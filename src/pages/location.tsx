import { Box, Button, Container, Image, Paper, SimpleGrid, Text } from '@mantine/core';
import PageTitle from 'components/PageTitle';
import { Link } from 'gatsby';
import React from 'react';
import { EVENT_DATES } from 'utils/constants';
import Layout from '../components/Layout/Layout';

export default function Location() {
  return (
    <Layout>
      <PageTitle>LOCATION</PageTitle>

      <Image fit="cover" height={500} src={require('images/scenes/huntsman-hall.jpg').default} />
      <Container size="lg">
        <SimpleGrid cols={2} spacing={36} breakpoints={[{ maxWidth: 650, cols: 1 }]} mt={60}>
          <Box>
            <Text size="xl" weight={500}>
              HackUSU 2023 will be hosted in Huntsman Hall at Utah State University on {EVENT_DATES}
              .
            </Text>
            <Text mt={15}>
              Free overnight parking will be available in the Big Blue Parking Terrace. Staff
              parking lots on campus may be used for daytime parking on Saturday.
            </Text>
            <Text mt={15}>
              After arriving, follow the signs to check in at Huntsman Hall's north entrance.
            </Text>
            <Text size="xl" weight={500} mt={30}>
              Busses, Vans, and Accessible Parking
            </Text>
            <Text mt={15}>
              The overnight parking terrace has a maximum clearance of 7 ft. For schools bringing
              busses or large vans, please contact us in advance for details on alternate parking.
              If accessible parking is required, we can provide a permit from the USU Parking
              Office.
            </Text>
            <Button
              component={Link}
              variant="light"
              to="https://goo.gl/maps/sWuht9HKoxj7rqyL9"
              mt={20}
              fullWidth
              target="_blank"
            >
              Open in Google Maps
            </Button>
          </Box>
          <Paper shadow="sm" withBorder p="0" sx={{ minHeight: '400px' }}>
            <iframe
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2977.0787242121787!2d-111.81117427366463!3d41.7403948072429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc88fd9fc64697ebb!2sUSU%20Huntsman%20Hall%20Building%20(HH)!5e0!3m2!1sen!2sus!4v1648397284322!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
            />
          </Paper>
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
