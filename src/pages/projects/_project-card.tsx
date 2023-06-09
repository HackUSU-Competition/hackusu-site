import React, {FC} from "react"
import {FeaturedProject} from "./_project-data"
import {
  Card,
  CardSection,
  Group,
  Title,
  ThemeIcon,
  Stack,
  Text,
  Anchor,
  Box,
  useMantineTheme,
  Button
} from "@mantine/core"
import {User, Code, Tools, PlayerPlay} from "tabler-icons-react"

export const ProjectCard: FC<{project: FeaturedProject}> = ({project}) => {
  const theme = useMantineTheme()
  console.log(theme)
  return (
    <Card
      shadow="sm"
      // sx={{borderTop: `7px solid #0E1927`}}
    >
      {project.video.type === "youtube" ? (
        <CardSection>
          <iframe
            width="100%"
            src={`https://www.youtube-nocookie.com/embed/${project.video.embedId}`}
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{aspectRatio: "16/9"}}
          ></iframe>
        </CardSection>
      ) : (
        <CardSection>
          <Button
            rightIcon={<PlayerPlay />}
            component="a"
            href={project.video.url}
            target="_blank"
            fullWidth
            size="xl"
            radius={0}
            variant="light"
          >
            Watch Demo
          </Button>
        </CardSection>
      )}

      <Group position="apart" mb="md" mt="sm">
        <Title order={3} size="2rem">
          {project.title}
        </Title>
        {/* <Badge color="grape" variant="filled">
          {project.category}
        </Badge> */}
      </Group>

      <Group spacing="xl" align="flex-start">
        <Stack sx={{flexGrow: 1, flexBasis: 0, minWidth: 250}}>
          <Group noWrap align="flex-start">
            <ThemeIcon>
              <User />
            </ThemeIcon>
            <Text>{project.teamMembers.join(", ")}</Text>
          </Group>

          <Group noWrap align="flex-start">
            <ThemeIcon>
              <Tools />
            </ThemeIcon>
            <Text>{project.tools.join(", ")}</Text>
          </Group>

          {project.sourceCodeUrl && (
            <Group noWrap align="flex-start">
              <ThemeIcon>
                <Code />
              </ThemeIcon>
              <Anchor href={project.sourceCodeUrl} target="_blank">
                {(() => {
                  const {hostname, pathname} = new URL(project.sourceCodeUrl)
                  return hostname + pathname
                })()}
              </Anchor>
            </Group>
          )}
        </Stack>

        <Box sx={{flexGrow: 1, flexBasis: 0, minWidth: 250}}>
          <Text>{project.description}</Text>
        </Box>
      </Group>
    </Card>
  )
}
