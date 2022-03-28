import { Container, SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import PressCard from 'components/Layout/Press/PressCard';
import PageTitle from 'components/PageTitle';
import { PressArticle, pressArticles } from 'content/pressArticles';
import React, { FC } from 'react';

export default function About() {
  const theme = useMantineTheme();

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
        <PressCard key={article.title} article={article} />
      ))}
    </SimpleGrid>
  );

  return (
    <Layout>
      <Container>
        <PageTitle>PRESS RESOURCES</PageTitle>
        <Title order={2} my="xl">
          Featured Articles
        </Title>
        <Title order={3} my="xl">
          HackUSU 2022
        </Title>
        <PressArticlesGrid articles={pressArticles.filter((article) => article.year === 2022)} />
        <Title order={3} my="xl">
          Previous Events
        </Title>
        <PressArticlesGrid articles={pressArticles.filter((article) => article.year < 2022)} />
      </Container>
    </Layout>
  );
}
