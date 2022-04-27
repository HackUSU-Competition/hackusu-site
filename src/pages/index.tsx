import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Title,
  Text,
  Space,
  Button,
  Center,
} from '@mantine/core';
import ContactForm from 'components/Forms/ContactForm';
import GradientButton from 'components/GradientButton';
import Layout from 'components/Layout/Layout';
import SectionHead from 'components/SectionHead';
import { aboutTiles, faqContent } from 'content/homeContent';
import { paths } from 'content/navigationContent';
import { Link } from 'gatsby';
import React from 'react';
import { EVENT_DATES } from 'utils/constants';
import '../css/main.css';

export default function HomePage() {
  return (
    <Layout>
      {/* <PageTitle>HOME</PageTitle> */}
      <Box
        py={50}
        sx={(theme) => ({
          backgroundColor: theme.colors.navy[8],
          // minHeight: '80vh',
          boxShadow: 'inset 0 0 40vw 0 rgba(0,0,0,0.6)',
        })}
      >
        <Container size={750} py={50}>
          <Image
            src={require('images/logo-white.svg').default}
            alt="HackUSU Logo"
            fit="contain"
            width="100%"
            px="5vw"
          />
          <Title order={2} align="center" pt={20} sx={{ color: 'white', fontSize: '2rem' }}>
            {EVENT_DATES}
          </Title>
        </Container>
      </Box>
      <Container>
        <SectionHead title="What is HackUSU?">300+ Students • 24 Hours</SectionHead>
        <SimpleGrid breakpoints={[{ maxWidth: 'xs', cols: 1 }]} cols={2} spacing="xl">
          {aboutTiles.map(({ title, description }) => (
            <Box mx="auto" sx={{ maxWidth: 300 }}>
              <Title order={3} align="center">
                {title}
              </Title>
              <Text align="center">{description}</Text>
            </Box>
          ))}
        </SimpleGrid>

        <SectionHead title="Competition Categories">
          We'll award prizes for both beginner and experienced teams in each cateogry!
        </SectionHead>
        <Center>
          <GradientButton component={Link} to={paths.competition} variant="gradient">
            Learn more about the competition
          </GradientButton>
        </Center>
        <ul>
          <li>Game Dev</li>
          <li>Data Analytics & Visualization</li>
          <li>Hardware</li>
          <li>AI</li>
          <li>General</li>
        </ul>

        <SectionHead title="FAQ" />
        {faqContent.map(({ question, answer }) => (
          <Box mb="lg">
            <Title order={3}>{question}</Title>
            <Text>{answer}</Text>
          </Box>
        ))}

        <ContactForm my={30} />
      </Container>
    </Layout>
  );
}
