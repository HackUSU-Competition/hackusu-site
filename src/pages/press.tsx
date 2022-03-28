import {
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Title,
  useMantineTheme,
} from '@mantine/core';
import Layout from 'components/Layout/Layout';
import PageTitle from 'components/PageTitle';
import { pressArticles } from 'content/pressArticles';
import { Link } from 'gatsby';
import React from 'react';

export default function About() {
  const theme = useMantineTheme();

  return (
    <Layout>
      <Container>
        <PageTitle>PRESS RESOURCES</PageTitle>
        <Title order={2} my='xl'>Featured Articles</Title>
        <SimpleGrid
          cols={3}
          spacing="lg"
          mt={30}
          breakpoints={[
            { maxWidth: 'md', cols: 2, spacing: 'md' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
            // { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          {pressArticles.map((article) => (
            <Card shadow="sm" p="lg">
              <Card.Section>
                <Image src={article.image} height={160} alt="Norway" />
              </Card.Section>

              <Group direction="column" position="apart" sx={{ height: '120px' }}>
                <Title
                  order={5}
                  mt={10}
                  mb={5}
                  sx={{
                    flexGrow: 1,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    '-webkit-line-clamp': '2',
                    '-webkit-box-orient': 'vertical',
                  }}
                >
                  {article.title}
                </Title>
                <Button
                  component={Link}
                  to={article.link}
                  target="_blank"
                  variant="light"
                  color="blue"
                  fullWidth
                  style={{ display: 'block' }}
                >
                  Read on {article.source}
                </Button>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
