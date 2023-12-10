import {Avatar, Box, Card, Group, Stack, Text} from "@mantine/core"
import React, {FC} from "react"
import {
  Bulb,
  ChartBubble,
  DeviceGamepad2,
  Icon,
  Robot,
  Spy
} from "tabler-icons-react"

interface Category {
  title: string
  icon: Icon
  description: string
}

const categories: Category[] = [
  {
    title: "Game Dev",
    icon: DeviceGamepad2,
    description:
      "Any game, any technology. Try recreating a retro game, or design a brand new one we haven't seen before!"
  },
  {
    title: "Data Analytics & Visualization",
    icon: ChartBubble,
    description: "Analyze a dataset and present your interesting findings!"
  },
  {
    title: "Cybersecurity",
    icon: Spy,
    description:
      "Flex your cybersecurity skills by finding and fixing vulnerabilities, creating solid defense plans, or crafting nifty security solutions to keep digital stuff safe!"
  },
  {
    title: "Business Solutions",
    icon: Bulb,
    description:
      "Craft a great business proposal for a cool app, platform, or system that tackles real-world issues. No technical expertise needed!"
  },
  {
    title: "Hardware",
    icon: Robot,
    description:
      "Get hands-on with cool gadgets — create something amazing using Raspberry Pi's, PCBs, or microcontrollers."
  },
  {
    title: "AI & Machine Learning",
    icon: Bulb,
    description:
      "Create a program to problem-solve — explore AI, machine learning, and code that adapts to tackle real-world challenges."
  }
]

const CategoryList: FC = () => {
  return (
    <Stack spacing="xl">
      {categories.map(({title, icon, description}) => (
        <Card
          key={title}
          sx={{overflow: "visible"}}
          shadow="sm"
          ml={25}
          mr={10}
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
            <Box pl={30}>
              <Text weight="bold" size="lg">
                {title}
              </Text>
              <Text>{description}</Text>
            </Box>
          </Group>
        </Card>
      ))}
    </Stack>
  )
}

export default CategoryList
