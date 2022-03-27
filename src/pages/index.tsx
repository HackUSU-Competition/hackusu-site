import { Container } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import PageTitle from 'components/PageTitle';
import React from 'react';
import '../css/main.css';

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <PageTitle>HOME</PageTitle>
      </Container>
    </Layout>
  );
}
