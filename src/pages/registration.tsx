import { Box, Image, SimpleGrid, Text } from '@mantine/core';
import Section from 'components/Layout/Section';
import PageTitle from 'components/PageTitle';
import SubSectionTitle from 'components/SubsectionTitle';
import React from 'react';
import Layout from '../components/Layout/Layout';

export default function Registration() {
  return (
    <Layout>
      <PageTitle>Registration</PageTitle>
      <Section width="sm" background="light" mt={60}>
        <SubSectionTitle>Registration will open soon!</SubSectionTitle>
        <SimpleGrid
          cols={2}
          spacing="lg"
          mt={30}
          breakpoints={[{ maxWidth: 'xs', cols: 1, spacing: 'sm' }]}
        >
          <Box>
            <Text component="p">
              We'll publish the registration form near the end of fall semester!
            </Text>
            <Text component="p">
              In the meantime, we're looking for help preparing for the event! Let us know if you
              have connections with people at any companies who are interested in partnering with
              HackUSU. We're currently looking for sponsors, workshop hosts, and judges!
            </Text>
          </Box>
          <Image
            src={require('images/illustrations/time.svg').default}
            alt="Location pin illustration"
            sx={{ maxWidth: 500, marginInline: 'auto' }}
          />
        </SimpleGrid>
      </Section>
    </Layout>
  );
}
