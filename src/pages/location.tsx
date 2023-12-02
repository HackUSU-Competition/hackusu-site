import {Box, Button, Paper, SimpleGrid, Text, Title} from "@mantine/core"
import PageTitle from "components/PageTitle"
import {Link} from "gatsby"
import React from "react"
import Layout from "../components/Layout/Layout"
import {StaticImage} from "gatsby-plugin-image"
import {useMediaQuery} from "@mantine/hooks"
import {SEO} from "components/seo"
import Section from "components/Layout/Section"
import ContactForm from "components/ContactForm"
import {EVENT_DATES} from "utils/constants"
import {ExternalLink} from "tabler-icons-react"

export default function Location() {
  const isMobile = useMediaQuery("(max-width: 700px)")

  return (
    <Layout>
      <PageTitle>Location and Parking</PageTitle>

      {isMobile ? (
        <StaticImage
          layout="fullWidth"
          src={"../images/scenes/huntsman-hall.jpg"}
          alt="Huntsman Hall building"
        />
      ) : (
        <StaticImage
          layout="fullWidth"
          src={"../images/scenes/huntsman-hall-banner.jpg"}
          alt="Huntsman Hall building"
        />
      )}

      <Section
        width="lg"
        title="Huntsman Hall"
        subtitle={`HackUSU 2024 will be in Huntsman Hall at Utah State University on ${EVENT_DATES.monthDateRange}`}
      >
        <SimpleGrid
          cols={2}
          spacing={36}
          breakpoints={[{maxWidth: 800, cols: 1}]}
        >
          <Box>
            <Title order={3}>Student Parking</Title>
            <Text mt="xs">
              Overnight parking will be available in the Big Blue Parking
              Terrace. Staff parking lots on campus may be used for daytime
              parking on Saturday.
            </Text>
            <Button
              component={Link}
              variant="light"
              to="https://maps.app.goo.gl/UdKdd5Ti9kDbCLA28"
              mt="md"
              fullWidth
              target="_blank"
              rightIcon={<ExternalLink size={16} />}
            >
              Google Maps: Parking Terrace
            </Button>

            <Title order={3} mt="xl">
              Busses, Vans, and Accessible Parking
            </Title>
            <Text mt="xs">
              The overnight parking terrace has a maximum clearance of 7 ft. For
              schools bringing busses or large vans, please contact us in
              advance for details on alternate parking. If accessible parking is
              required, we can provide a permit from the USU Parking Office.
            </Text>

            <Title order={3} mt="xl">
              Check-in
            </Title>
            <Text mt="xs">
              Check-in will open at 4:00 PM on Friday at the Huntsman Hall north
              entrance.
            </Text>
            <Button
              component={Link}
              variant="light"
              to="https://maps.app.goo.gl/aJv3ULjRqzUpUDqQ9"
              mt="md"
              fullWidth
              target="_blank"
              rightIcon={<ExternalLink size={16} />}
            >
              Google Maps: Huntsman Hall
            </Button>
          </Box>
          <Paper shadow="sm" withBorder p="0" sx={{minHeight: "400px"}}>
            <iframe
              style={{border: 0}}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2977.0787242121787!2d-111.81117427366463!3d41.7403948072429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc88fd9fc64697ebb!2sUSU%20Huntsman%20Hall%20Building%20(HH)!5e0!3m2!1sen!2sus!4v1648397284322!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
            />
          </Paper>
        </SimpleGrid>
      </Section>

      <ContactForm />
    </Layout>
  )
}

export const Head = () => <SEO />
