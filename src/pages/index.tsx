import { Container } from '@mantine/core';
import React from 'react';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Layout from '../components/Layout/Layout';

import '../css/main.css';

export default function HomePage() {
  return (
    <Layout>
      <Container>
        <ColorSchemeToggle />
      </Container>
    </Layout>
  );
}
