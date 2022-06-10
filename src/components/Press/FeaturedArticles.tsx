import { Button, Card, Group, Image, SimpleGrid, Text, Title } from '@mantine/core';
import Section from 'components/Layout/Section';
import { PressArticle, pressArticles } from 'content/press/pressArticles';
import { Link } from 'gatsby';
import React, { FC } from 'react';

const ArticleCard: FC<{ article: PressArticle }> = ({ article }) => (
  <Card shadow="sm" p="lg">
    <Card.Section>
      <Image src={article.image} height={160} withPlaceholder />
    </Card.Section>

    <Group direction="column" position="apart" sx={{ height: '120px' }}>
      <Text
        my={10}
        mb={5}
        weight="bold"
        sx={{
          flexGrow: 1,
        }}
        lineClamp={2}
      >
        {article.title}
      </Text>
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
);

const PressArticlesGrid: FC<{ articles: PressArticle[] }> = ({ articles }) => (
  <SimpleGrid
    cols={3}
    spacing="lg"
    mt={30}
    breakpoints={[
      { maxWidth: 'md', cols: 2, spacing: 'md' },
      { maxWidth: 'xs', cols: 1, spacing: 'sm' },
    ]}
  >
    {articles.map((article) => (
      <ArticleCard key={article.title} article={article} />
    ))}
  </SimpleGrid>
);

const FeaturedArticles: FC = () => {
  return (
    <Section title="Featured Articles">
      <Title order={3} my="xl">
        HackUSU 2022
      </Title>
      <PressArticlesGrid articles={pressArticles.filter((article) => article.year === 2022)} />
      <Title order={3} my="xl">
        Previous Events
      </Title>
      <PressArticlesGrid articles={pressArticles.filter((article) => article.year < 2022)} />
    </Section>
  );
};

export default FeaturedArticles;
