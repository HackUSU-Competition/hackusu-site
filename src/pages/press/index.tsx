import { Anchor, Container, Text, Title, useMantineTheme } from '@mantine/core';
import Layout from 'components/Layout/Layout';
import About from 'components/Layout/Press/About';
import FeaturedArticles from 'components/Layout/Press/FeaturedArticles';
import PageTitle from 'components/PageTitle';
import { paths } from 'content/navigationContent';
import { Link } from 'gatsby';
import React from 'react';

export default function Press() {
  return (
    <Layout>
      <PageTitle>PRESS RESOURCES</PageTitle>
      <Container>
        <About />
        <Title order={2} my="xl">
          Parking at HackUSU
        </Title>
        <Title order={2} my="xl">
          Photography and Filming
        </Title>
        <Title order={2} my="xl">
          Photos for Download
        </Title>
        <Text>
          <Anchor component={Link} to={paths.pressPhotos}>
            Download images for media use
          </Anchor>
        </Text>
        <FeaturedArticles />
      </Container>
    </Layout>
  );
}
