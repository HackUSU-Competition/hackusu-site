import { Container } from '@mantine/core';
import ContactForm from 'components/Forms/ContactForm';
import Layout from 'components/Layout/Layout';
import PageTitle from 'components/PageTitle';
import React from 'react';
import '../css/main.css';

export default function HomePage() {
  return (
    <Layout>
      <PageTitle>HOME</PageTitle>
      <Container>
        <ContactForm my={30} />
      </Container>
    </Layout>
  );
}
