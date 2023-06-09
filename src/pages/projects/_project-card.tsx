import React, {FC} from "react"
import {FeaturedProject} from "./_project-data"
import {
  Card,
  CardSection,
  Group,
  Title,
  ThemeIcon,
  Badge,
  Stack,
  Text,
  Anchor,
  Box
} from "@mantine/core"
import {User, Code, Tools, PlayerPlay} from "tabler-icons-react"

export const ProjectCard: FC<{project: FeaturedProject}> = ({project}) => {
  return (
    <Card shadow="sm">
      <CardSection>
        <iframe
          width="100%"
          src={getEmbedURL(project.video)}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{aspectRatio: "16/9"}}
        ></iframe>
      </CardSection>

      <Group position="apart" mb="md" mt="sm">
        <Title order={3} size="2rem">
          {project.title}
        </Title>
        <Badge color="grape" variant="filled">
          {project.category}
        </Badge>
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
              <Code />
            </ThemeIcon>
            <Anchor href={project.sourceCodeUrl} target="_blank">
              {(() => {
                const {hostname, pathname} = new URL(project.sourceCodeUrl)
                return hostname + pathname
              })()}
            </Anchor>
          </Group>
          <Group noWrap align="flex-start">
            <ThemeIcon>
              <Tools />
            </ThemeIcon>
            <Text>{project.tools.join(", ")}</Text>
          </Group>
        </Stack>

        <Box sx={{flexGrow: 1, flexBasis: 0, minWidth: 250}}>
          <Text>{project.description}</Text>
        </Box>
      </Group>
    </Card>
  )
}

function getEmbedURL(video: FeaturedProject["video"]) {
  if (video.type === "youtube")
    return `https://www.youtube-nocookie.com/embed/${video.embedId}`

  return video.url
}
