import { Container } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import About from 'components/Layout/Press/About';
import FeaturedArticles from 'components/Layout/Press/FeaturedArticles';
import Attending from 'components/Layout/Press/Attending';
import PageTitle from 'components/PageTitle';
import React from 'react';

export default function Press() {
  return (
    <Layout>
      <PageTitle>PRESS RESOURCES</PageTitle>
      <Container>
        <About />
        <Attending />
        <FeaturedArticles />
      </Container>
    </Layout>
  );
}
