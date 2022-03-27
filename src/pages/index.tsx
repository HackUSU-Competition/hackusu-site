import { Container, Title } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import React from 'react';
import '../css/main.css';

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <Title align="center">HOME</Title>
      </Container>
    </Layout>
  );
}
