import {
  AspectRatio,
  Avatar,
  Box,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title
} from "@mantine/core"
import ContactForm from "components/ContactForm"
import Layout from "components/Layout/Layout"
import Section from "components/Layout/Section"
import SponsorGrid from "components/SponsorGrid"
import React from "react"
import {
  ArrowRight,
  Bulb,
  DeviceGamepad2,
  Robot,
  Spy,
  ChartBubble
} from "tabler-icons-react"
import {EVENT_DATES} from "utils/constants"
import "../css/main.css"
import {StaticImage} from "gatsby-plugin-image"
import {sponsors2023} from "./sponsor/_sponsorCompaniesContent"
import {SEO} from "components/seo"
import GradientButton from "components/GradientButton"
import {Link} from "gatsby"
import {paths} from "utils/navigationContent"

export default function HomePage() {
  return (
    <Layout>
      <Title order={1} sx={{position: "absolute", zIndex: -1, inset: 0}}>
        HackUSU
      </Title>
      <Box
        pt={50}
        sx={(theme) => ({
          backgroundColor: theme.colors.navy[8],
          background: `url(${
            require("../images/backgrounds/triangles.svg").default
          })`,
          backgroundSize: "cover"
        })}
      >
        <Container size={600} pt={50} px={50} pb={100}>
          <Image
            src={require("images/logo-base.svg").default}
            alt="HackUSU Logo"
            fit="contain"
            width="100%"
            style={{filter: "invert(1)"}}
          />
          <Title
            order={2}
            align="center"
            pt={50}
            sx={{color: "white", fontSize: "2rem"}}
          >
            {EVENT_DATES.monthDateRangeYear}
          </Title>
          <Text align="center" color="white" opacity={0.7} italic>
            Registration opens in January
          </Text>
          {/* <Title */}
          {/*   order={2} */}
          {/*   align="center" */}
          {/*   pt={50} */}
          {/*   sx={{color: "white", fontSize: "1.5rem"}} */}
          {/* > */}
          {/*   HackUSU 2023 has already happened, but we look forward to seeing you */}
          {/*   next year! */}
          {/* </Title> */}
        </Container>
        <img
          src={require("images/dividers/waves-opacity.svg").default}
          alt="section divider"
          style={{
            width: "100%",
            height: "10vw",
            objectFit: "fill"
          }}
        />
        {/* <img
          src={require('images/dividers/triangle-negative.svg').default}
          alt="section divider"
          style={{
            width: '100%',
            height: '10vw',
          }}
        /> */}
      </Box>

      <Section title="What is HackUSU?" subtitle="400+ Students • 24 Hours">
        <SimpleGrid
          breakpoints={[{maxWidth: "xs", cols: 1}]}
          cols={2}
          spacing="xl"
        >
          {[
            {
              title: "24-hr Hackathon",
              description:
                "Craft a software, hardware, or business proposal project to compete against other teams. All college students and high school seniors are invited!"
            },
            {
              title: "Workshops",
              description:
                "We'll have many great workshops and tech talks on a variety of topics. Check back closer to the event for a complete list!"
            },
            {
              title: "Networking",
              description:
                "Come network with our sponsors and potential employers. There will be many industry experts to learn from and learn more about their companies!"
            },
            {
              title: "Food",
              description:
                "We'll provide dinner on Friday, and breakfast, lunch, and dinner on Saturday. There will also be plenty of snacks available the entire event!"
            }
          ].map(({title, description}, idx) => (
            <Box mx="auto" sx={{maxWidth: 300}} key={idx}>
              <Title order={3} align="center">
                {title}
              </Title>
              <Text align="center">{description}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <Box mt="xl" sx={{textAlign: "center"}}>
          <GradientButton
            component={Link}
            to={paths.photos}
            rightIcon={<ArrowRight size={16} />}
          >
            {"Check out last year's photos"}
          </GradientButton>
        </Box>
      </Section>

      <AspectRatio ratio={25 / 10}>
        <StaticImage
          src="../images/event-photos/Mike Johnson Photo-04439.jpg"
          alt="Students working on a project at HackUSU"
          layout="fullWidth"
          loading="lazy"
        />
      </AspectRatio>

      <Section
        title="Competition Categories"
        subtitle="We'll award separate prizes for both beginner and experienced teams in each category!"
        background="pattern"
        width="sm"
      >
        {/* <Center>
          <GradientButton component={Link} to={paths.competition} variant="gradient">
            Competition Details
          </GradientButton>
        </Center> */}
        <Stack spacing="xl">
          {[
            {
              title: "Game Dev",
              icon: DeviceGamepad2,
              description:
                "Any game, any technology. Try recreating a retro game, or design a brand new one we haven't seen before!"
            },
            {
              title: "Data Analytics & Visualization",
              icon: ChartBubble,
              description:
                "Analyze a dataset and present your interesting findings!"
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
          ].map(({title, icon, description}) => (
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
      </Section>

      <AspectRatio ratio={17 / 10}>
        <StaticImage
          src="../images/event-photos/Mike Johnson Photo-04404.jpg"
          alt="A group of students wearing HackUSU shirts"
          layout="fullWidth"
          loading="lazy"
        />
      </AspectRatio>

      <Section title="FAQ" width="sm">
        {[
          {
            question: "When and where is HackUSU?",
            answer: `HackUSU 2024 will be ${EVENT_DATES.monthDateRange}! The event will take place in Huntsman Hall, Utah State University.`
          },
          {
            question: "Are there other things to do besides the competition?",
            answer:
              "Yes, we'll have workshops and other activities running the whole time! You'll also be able to network with employers, and get help from experts on other projects."
          },
          {
            question: "Do I need to know how to code?",
            answer:
              "Nope, there will be workshops for all skill levels from introductory to graduate level. This year, we are also introducing the business solutions category for non-technical projects!"
          },
          {
            question: "Can I start now?",
            answer:
              "You can't use any code that was written before the start of the hackathon. However, you can form your team and begin thinking of ideas now!"
          },
          {
            question: "What is the max team size?",
            answer:
              "Each team can have 1 to 4 students. Only team members present at the award ceremony will be eligible to receive prizes."
          },
          {
            question: "Who can attend HackUSU?",
            answer:
              "All university or college students and high school seniors are welcome! Participants must be current students or have graduated in the last 12 months. There is no restriction on major."
          },
          {
            question: "Can I stay in the building overnight?",
            answer:
              "Absolutely! You can stay up all night working, bring a sleeping bag, or leave to sleep off-campus."
          }
        ].map(({question, answer}, idx) => (
          <Box mb="xl" key={idx}>
            <Title order={3}>{question}</Title>
            <Text>{answer}</Text>
          </Box>
        ))}
      </Section>

      <Section title="Last Year's Sponsors" width="md">
        <SponsorGrid sponsors={sponsors2023} />
      </Section>

      <ContactForm />
    </Layout>
  )
}

export const Head = () => <SEO />
