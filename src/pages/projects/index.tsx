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
import {grandChampion} from "./_project-data"

export default function Projects() {
  return (
    <Layout>
      <PageTitle>Featured Projects</PageTitle>

      <Section title="2023 Grand Champion" background="pattern">
        <Card shadow="sm">
          <CardSection>
            <iframe
              width="100%"
              src={`https://www.youtube-nocookie.com/embed/${grandChampion.youtubeEmbedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{aspectRatio: "16/9"}}
            ></iframe>
          </CardSection>

          <Group position="apart" mb="md" mt="sm">
            <Title order={3} size="2rem">
              {grandChampion.title}
            </Title>
            <Badge color="grape" variant="filled">
              {grandChampion.category}
            </Badge>
          </Group>

          <Group noWrap spacing="xl" align="flex-start">
            <Stack sx={{flexGrow: 1, flexBasis: 0}}>
              <Group noWrap align="flex-start">
                <ThemeIcon>
                  <User />
                </ThemeIcon>
                <List>
                  {grandChampion.teamMembers.map((member) => (
                    <List.Item key={member}>{member}</List.Item>
                  ))}
                </List>
              </Group>
              <Group noWrap align="flex-start">
                <ThemeIcon>
                  <Code />
                </ThemeIcon>
                <Anchor href={grandChampion.sourceCodeUrl} target="_blank">
                  {(() => {
                    const {hostname, pathname} = new URL(
                      grandChampion.sourceCodeUrl
                    )
                    return hostname + pathname
                  })()}
                </Anchor>
              </Group>
              <Group noWrap align="flex-start">
                <ThemeIcon>
                  <Tools />
                </ThemeIcon>
                <Text>{grandChampion.tools.join(", ")}</Text>
              </Group>
            </Stack>

            <Divider orientation="vertical" />

            <Box sx={{flexGrow: 1, flexBasis: 0}}>
              <Text>{grandChampion.description}</Text>
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
