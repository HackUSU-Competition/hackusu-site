import { Container, Image, Paper } from '@mantine/core';
import PageTitle from 'components/PageTitle';
import React from 'react';
import Layout from '../components/Layout/Layout';

export default function Location() {
  return (
    <Layout>
      <PageTitle>LOCATION</PageTitle>
      <Container>
        <Paper shadow="sm" withBorder mt="xl" p="0">
          <iframe
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2977.0787242121787!2d-111.81117427366463!3d41.7403948072429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc88fd9fc64697ebb!2sUSU%20Huntsman%20Hall%20Building%20(HH)!5e0!3m2!1sen!2sus!4v1648397284322!5m2!1sen!2sus"
            width="100%"
            height={300}
            frameBorder="0"
            allowFullScreen={true}
          />
        </Paper>
        <Image fit="cover" height={400} src={require('images/scenes/huntsman-hall.jpg').default} />
      </Container>
    </Layout>
  );
}
