import PageTitle from "components/PageTitle"
import React from "react"
import {SEO} from "components/seo"
import Layout from "components/Layout/Layout"
import Section from "components/Layout/Section"
import {
  Anchor,
  Badge,
  Box,
  Card,
  CardSection,
  Divider,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title
} from "@mantine/core"
import {Code, Tools, User} from "tabler-icons-react"

export default function Projects() {
  return (
    <Layout>
      <PageTitle>Featured Projects</PageTitle>

      {/* Don't use these section, use nice looking cards */}

      <Section
        title="2023 Grand Champion"
        // subtitle="Zen Garden"
        background="pattern"
      >
        <Card shadow="sm">
          <CardSection>
            <iframe
              width="100%"
              src="https://www.youtube-nocookie.com/embed/R83iP5Q-EOI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{aspectRatio: "16/9"}}
            ></iframe>
          </CardSection>

          <Group position="apart" mb="md" mt="sm">
            <Title order={3} size="2rem">
              Zen Garden
            </Title>
            <Badge color='grape' variant="filled">
              Hardware
            </Badge>
          </Group>

          <Group noWrap spacing="xl" align="flex-start">
            <Stack sx={{flexGrow: 1, flexBasis: 0}}>
              <Group noWrap align="flex-start">
                <ThemeIcon>
                  <User />
                </ThemeIcon>
                <List>
                  <Text>Aaron Roth</Text>
                  <Text>Daniel Mortenson</Text>
                  <Text>Carter Nettesheim</Text>
                </List>
              </Group>
              <Group noWrap align="flex-start">
                <ThemeIcon>
                  <Code />
                </ThemeIcon>
                <Anchor
                  href="https://github.com/daniel-morty/hackusu2023"
                  target="_blank"
                >
                  github.com/daniel-morty/hackusu2023
                </Anchor>
              </Group>
              <Group noWrap align="flex-start">
                <ThemeIcon>
                  <Tools />
                </ThemeIcon>
                <Text>
                  Free RTOS, esp async web server, stepper motor, arduino,
                  fusion 360, ultimaker cura
                </Text>
              </Group>
            </Stack>

            <Divider orientation="vertical" />

            <Box sx={{flexGrow: 1, flexBasis: 0}}>
              <Text>
                We 3D modeled, printed, and developed software to drive mini
                tractors to rake the sand in a Zen Garden. The brains of the
                tractors are ESP32 microcontrollers. The ESP32 controls 2
                stepper motors using tank controls to propel, and steer the
                tractor forward. The esp32 also hosts a wi-fi network. If
                connected to the tractor wi-fi, an internet browser navigated to
                192.168.4.1 a joystick will be displayed. The joystick can then
                control the tractor, allowing one to get their Zen on and feel
                relaxed and rested.
              </Text>
            </Box>
          </Group>
        </Card>
      </Section>

      {/* <Section
        title="Featured 2023 Submissions"
        // subtitle={`400+ Students • 24 Hours • ${EVENT_DATES.monthYear}`}
      >
        foo
      </Section> */}
    </Layout>
  )
}

export const Head = () => <SEO />
