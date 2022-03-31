import { Container } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import About from 'components/Press/About';
import FeaturedArticles from 'components/Press/FeaturedArticles';
import Attending from 'components/Press/Attending';
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
