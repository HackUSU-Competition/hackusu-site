import {
  Alert,
  Avatar,
  Box,
  Card,
  Chip,
  Group,
  Image,
  Stack,
  Text
} from "@mantine/core"
import {
  Sponsor,
  koch,
  snowflake,
  sponsorCenterForAnticipatoryIntelligence,
  sponsorL3Harris,
  sponsorLightningKite
} from "pages/sponsor/_sponsorCompaniesContent"
import React, {FC} from "react"
import {
  Bulb,
  ChartBubble,
  DeviceGamepad2,
  Icon,
  InfoCircle,
  Robot,
  Spy
} from "tabler-icons-react"

interface Category {
  title: string
  icon: Icon
  description: string
  sponsors?: Sponsor[]
}

const categories: Category[] = [
  {
    title: "Cybersecurity",
    icon: Spy,
    description:
      "Flex your cybersecurity skills by finding and fixing vulnerabilities, creating solid defense plans, or crafting nifty security solutions to protect and strengthen critical infrastructure!",
    sponsors: [sponsorCenterForAnticipatoryIntelligence]
  },
  {
    title: "Game Dev",
    icon: DeviceGamepad2,
    description:
      "Multiple-use mechanics: Slashing with your sword in Hollow Knight builds up your magic power. Mario's jump acts as both a navigation ability and as an attack. How many uses for a mechanic can you roll together?",
    sponsors: [sponsorLightningKite]
  },
  {
    title: "Hardware",
    icon: Robot,
    description:
      "Get hands-on with cool gadgets – Create an edge node passive RADAR using microcontrollers. Microcontrollers (limit of 8 teams) and challenge details to be provided at the event.",
    sponsors: [sponsorL3Harris]
  },
  {
    title: "AI & Machine Learning",
    icon: Bulb,
    description:
      "Do you know SQL? Do you know Python? Perfect! Give this competition a try at HackUSU on March 1-2, 2024. Koch (a strong USU corporate partner) + Snowflake (a leading data platform solution) have joined forces to sponsor an AI & Machine Learning track at HackUSU. You'll be given a real dataset, access to Snowflake, and a task to build ML model to answer a specific business question. And guess what? The judges are on the lookout for talent + there are some awesome prizes up for grabs.",
    sponsors: [koch, snowflake]
  },
  {
    title: "Data Analytics & Visualization",
    icon: ChartBubble,
    description: "Analyze a dataset and present your interesting findings!"
  },
  {
    title: "Business Solutions",
    icon: Bulb,
    description:
      "Craft a great business proposal for a cool app, platform, or system that tackles real-world issues. No technical expertise needed!"
  }
]

const CategoryList: FC = () => {
  return (
    <Stack spacing="xl">
      <Alert variant="filled" icon={<InfoCircle />}>
        For sponsored categories, extra points will be awarded for projects that
        follow the prompt!
      </Alert>

      {categories.map(({title, icon, description, sponsors}) => (
        <Card
          key={title}
          sx={{overflow: "visible"}}
          shadow="sm"
          ml={25}
          py="lg"
        >
          <Group>
            <Avatar
              color="blue"
              size="lg"
              radius="xl"
              sx={{
                position: "absolute",
                left: -28,
                border: "5px solid white",
                boxShadow: "2px 2px 5px 0 rgba(0, 0, 0, 0.2)"
              }}
            >
              {icon({size: 24})}
            </Avatar>
            <Box pl={30} w="100%">
              <Group position="apart">
                <Text weight="bold" size="lg">
                  {title}
                </Text>
                {sponsors ? (
                  <Chip checked variant="filled" size="xs">
                    Sponsored
                  </Chip>
                ) : null}
              </Group>
              <Text>{description}</Text>
              {sponsors ? (
                <Stack mt="lg" spacing="xs">
                  <Text size="xs" c="dimmed">
                    Sponsored by:
                  </Text>
                  <Group spacing="xl">
                    {sponsors.map((sponsor) => (
                      <div key={sponsor.name}>
                        <Image
                          fit="contain"
                          src={sponsor.logo}
                          height={40}
                          alt={`${sponsor.name} logo`}
                          imageProps={{
                            loading: "lazy",
                            style: {objectPosition: "left"}
                          }}
                        />
                      </div>
                    ))}
                  </Group>
                </Stack>
              ) : null}
            </Box>
          </Group>
        </Card>
      ))}
    </Stack>
  )
}

export default CategoryList
