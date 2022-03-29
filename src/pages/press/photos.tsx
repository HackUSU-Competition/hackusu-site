import { Anchor, Button, Container, Image, SimpleGrid, Text } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import PageTitle from 'components/PageTitle';
import { paths } from 'content/navigationContent';
import { Link } from 'gatsby';
import React from 'react';
import { Download } from 'tabler-icons-react';

export default function About() {
  return (
    <Layout>
      <PageTitle>PRESS PHOTOS</PageTitle>
      <Container>
        <Anchor component={Link} to={paths.press}>
          &larr; Press Resources
        </Anchor>
        {/* TODO: Make images available for download */}

        <Text my={20}>
          The following page contains images that can be used by members of the media.
        </Text>

        <Button rightIcon={<Download size={14} />}>Download All Images</Button>

        <SimpleGrid
          cols={3}
          spacing="lg"
          mt={30}
          breakpoints={[
            { maxWidth: 'md', cols: 2, spacing: 'md' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
          ]}
        >
          {[...Array(10)].map((_, index) => (
            <Image
              width={200}
              height={200}
              key={index}
              src={null}
              alt="With default placeholder"
              withPlaceholder
            />
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
