import React, {FC} from "react"
import Section from "./Layout/Section"
import {Avatar, Box, SimpleGrid, Stack, Text} from "@mantine/core"
import {getInitials} from "utils/helpers"

interface TeamMember {
  name: string
  profileImage?: string
  subtitle?: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Chelsea Harding",
    subtitle: "Instructor, Data Analytics and Information Systems, USU",
    profileImage: require("images/team/chelsea-harding.jpg").default
  },
  {
    name: "Troy DeSpain",
    subtitle: "Software Engineer, Evidently",
    profileImage: require("images/team/troy-despain.jpg").default
  },
  {
    name: "Brian Weller",
    subtitle:
      "Corporate Relations Specialist, Huntsman School of Business, USU",
    profileImage: require("images/team/brian-weller.jpg").default
  },
  {
    name: "Kayli Clegg",
    subtitle: "Data Analytics Student, USU",
    profileImage: require("images/team/kayli-clegg.jpg").default
  },
  {
    name: "Chandler McClellan",
    subtitle: "Data Analytics Student, USU",
    profileImage: require("images/team/chandler-mcclellan.jpg").default
  },
  {
    name: "Joseph Johnson",
    subtitle: "Information Systems Student, USU",
    profileImage: require("images/team/joseph-johnson.jpg").default
  }
]

const OrganizerTeam: FC = () => {
  return (
    <Section title="Organizer Team">
      <SimpleGrid
        spacing={50}
        cols={3}
        breakpoints={[
          {maxWidth: "sm", cols: 2},
          {maxWidth: "xs", cols: 1}
        ]}
      >
        {teamMembers.map((member) => (
          <Stack key={member.name} align="center">
            <Avatar
              src={member.profileImage}
              radius="md"
              alt={member.name}
              color="primary"
              size={180}
            >
              {getInitials(member.name)}
            </Avatar>
            <Box w="100%" maw={300}>
              <Text size="lg" weight="bold" align="center">
                {member.name}
              </Text>
              <Text color="dimmed" sx={{lineHeight: 1.2}} align="center">
                {member.subtitle}
              </Text>
            </Box>
          </Stack>
        ))}
      </SimpleGrid>
    </Section>
  )
}

export default OrganizerTeam
