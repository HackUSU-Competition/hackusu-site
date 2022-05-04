import { Box, Center, Container, Image, SimpleGrid, Text, Title } from '@mantine/core';
import ContactForm from 'components/Forms/ContactForm';
import GradientButton from 'components/GradientButton';
import Layout from 'components/Layout/Layout';
import Section from 'components/Layout/Section';
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
      <Box
        pt={50}
        sx={(theme) => ({
          backgroundColor: theme.colors.navy[8],
          // minHeight: '80vh',
          // boxShadow: 'inset 0 0 40vw 0 rgba(0,0,0,0.6)',
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
          {aboutTiles.map(({ title, description }) => (
            <Box mx="auto" sx={{ maxWidth: 300 }}>
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
        subtitle="We'll award prizes for both beginner and experienced teams in each cateogry!"
        background="light"
      >
        <Center>
          <GradientButton component={Link} to={paths.competition} variant="gradient">
            Competition Details
          </GradientButton>
        </Center>
        <ul>
          <li>Game Dev</li>
          <li>Data Analytics & Visualization</li>
          <li>Hardware</li>
          <li>AI</li>
          <li>General</li>
        </ul>
      </Section>

      <Section title="FAQ">
        {faqContent.map(({ question, answer }) => (
          <Box mb="lg">
            <Title order={3}>{question}</Title>
            <Text>{answer}</Text>
          </Box>
        ))}
      </Section>

      <ContactForm />
    </Layout>
  );
}
