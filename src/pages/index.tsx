import {
  Avatar,
  Box,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import ContactForm from 'components/Forms/ContactForm';
import Layout from 'components/Layout/Layout';
import Section from 'components/Layout/Section';
import React from 'react';
import { Bulb, ChartDots, Code, DeviceGamepad2, Robot } from 'tabler-icons-react';
import { EVENT_DATES } from 'utils/constants';
import '../css/main.css';

export default function HomePage() {
  return (
    <Layout>
      <Box
        pt={50}
        sx={(theme) => ({
          backgroundColor: theme.colors.navy[8],
          background: `url(${require('../images/backgrounds/triangles.svg').default})`,
          backgroundSize: 'cover',
        })}
      >
        <Container size={800} pt={50} px={50}>
          <Image
            src={require('images/logo-white.svg').default}
            alt="HackUSU Logo"
            fit="contain"
            width="100%"
          />
          <Title order={2} align="center" pt={50} sx={{ color: 'white', fontSize: '2rem' }}>
            {EVENT_DATES}
          </Title>
        </Container>
        {/* <img
            src={require('images/dividers/waves-opacity.svg').default}
            alt="section divider"
            style={{
              width: '100%',
              height: '10vw',
              objectFit: 'fill',
            }}
          /> */}
        <img
          src={require('images/dividers/triangle-negative.svg').default}
          alt="section divider"
          style={{
            width: '100%',
            height: '10vw',
          }}
        />
      </Box>

      <Section title="What is HackUSU?" subtitle="300+ Students • 24 Hours">
        <SimpleGrid breakpoints={[{ maxWidth: 'xs', cols: 1 }]} cols={2} spacing="xl">
          {[
            {
              title: '24-hr Hackathon',
              description:
                'Build a software or hardware project to compete against other teams. All college students and high school seniors are invited!',
            },
            {
              title: 'Workshops',
              description:
                "We'll have many great workshops and tech talks on a variety of topics. Check back closer to the event for a complete list!",
            },
            {
              title: 'Networking',
              description:
                'Come network with our sponsors and potential employers. There will be many industry experts to learn from and learn more about their companies!',
            },
            {
              title: 'Free Food',
              description:
                "We'll provide dinner on Friday, and breakfast, lunch, and dinner on Saturday. There will also be plenty of snacks available the entire event!",
            },
          ].map(({ title, description }, idx) => (
            <Box mx="auto" sx={{ maxWidth: 300 }} key={idx}>
              <Title order={3} align="center">
                {title}
              </Title>
              <Text align="center">{description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Section>

      <Section
        title="Competition Categories"
        subtitle="We'll award separate prizes for both beginner and experienced teams in each cateogry!"
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
              title: 'Game Dev',
              icon: DeviceGamepad2,
              description:
                "Any game, any technology. Try recreating a retro game, or design a brand new one we haven't seen before!",
            },
            {
              title: 'Data Analytics & Visualization',
              icon: ChartDots,
              description:
                'Find a dataset online, then demonstrate ways of gaining interesting insights or displaying data in a creative way!',
            },
            {
              title: 'Hardware',
              icon: Robot,
              description:
                "Show us your creation utilizing physical hardware including Raspberry Pi's, PCB's, or microcontrollers!",
            },
            {
              title: 'AI & Machine Learning',
              icon: Bulb,
              description: 'Can you write a program that learns how to solve a problem?',
            },
            {
              title: 'General',
              icon: Code,
              description: "All projects that  are too unique and don't fit the other categories!",
            },
          ].map(({ title, icon, description }) => (
            <Card sx={{ overflow: 'visible' }} shadow="sm" ml={25} mr={10} py="lg">
              <Group>
                <Avatar
                  color="blue"
                  size="lg"
                  radius="xl"
                  sx={{
                    position: 'absolute',
                    left: -28,
                    border: '5px solid white',
                    boxShadow: '2px 2px 5px 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {icon({ size: 24 })}
                </Avatar>
                <Box pl={30}>
                  <Text weight="bold" size="lg">
                    {title}
                  </Text>
                  <Text color="gray">{description}</Text>
                </Box>
              </Group>
            </Card>
          ))}
        </Stack>
      </Section>

      <Section title="FAQ" width="sm">
        {[
          {
            question: 'Are there other things to do besides the competition?',
            answer:
              "Yes, we'll have workshops and other activities running the whole time! You'll also be able to network with employers, and get help from experts on other projects.",
          },
          {
            question: 'Do I need to know how to code?',
            answer:
              'Nope, there will be workshops for all skill levels from introductory to graduate level.',
          },
          {
            question: 'Can I start now?',
            answer:
              "You can't use any code that was written before the start of the hackathon. However, you can form your team and begin thinking of ideas now!",
          },
          {
            question: 'What is the max team size?',
            answer:
              'Each team can have 1 to 4 students. Only team members present at the award ceremony will be eligible to receive prizes.',
          },
          {
            question: 'Who can attend HackUSU?',
            answer:
              'All university or college students and high school seniors are welcome! Participants must be current students or have graduated in the last 12 months. There is no restriction on major.',
          },
          {
            question: 'Does it cost anything to attend?',
            answer:
              "HackUSU is completely free! There's no entry fee, and we'll provide enough food and snacks for the entire 24 hours. How neat is that?",
          },
          {
            question: 'Can I stay in the building overnight?',
            answer:
              'Absolutely! You can stay up all night working, bring a sleeping bag, or leave to sleep off-campus.',
          },
        ].map(({ question, answer }, idx) => (
          <Box mb="xl" key={idx}>
            <Title order={3}>{question}</Title>
            <Text>{answer}</Text>
          </Box>
        ))}
      </Section>

      <ContactForm />
    </Layout>
  );
}
