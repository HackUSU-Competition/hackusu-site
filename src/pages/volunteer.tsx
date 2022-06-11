import {
  Anchor,
  Box,
  Container,
  createStyles,
  Divider,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import AnimateUpOnce from 'components/AnimateUpOnce';
import VolunteerForm from 'components/Forms/VolunteerForm';
import GradientButton from 'components/GradientButton';
import PageTitle from 'components/PageTitle';
import { paths } from 'content/navigationContent';
import React, { ReactElement } from 'react';
import { ChevronDown } from 'tabler-icons-react';
import Layout from '../components/Layout/Layout';

interface VolunteerOpportunity {
  title: string;
  description: ReactElement;
  image: string;
  cta: string;
}

const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    title: 'Event Organizer',
    image: require('images/illustrations/meeting.svg').default,
    cta: 'Become an Event Organizer',
    description: (
      <>
        <p>
          Our amazing organizers spend all year planning HackUSU! Our committees include outreach,
          financial, and technology.
        </p>
        <p>
          If you'd like to join us, you'll need 1-2 hours per week to work on preparing for HackUSU.
        </p>
      </>
    ),
  },
  {
    title: 'Workshop Host',
    image: require('images/illustrations/teaching.svg').default,
    cta: 'Host a Workshop',
    description: (
      <>
        <p>
          If you're an experienced industry professional, we'd love to have you run a workshop!
          Topics could be in the areas of software development, data science, hardware engineering,
          or anything else interesting to the HackUSU community!
        </p>
        <p>
          Workshops should be on non-branded topics generally applicable to many students. To
          promote your own company's software products, check out our several{' '}
          <Anchor href={paths.sponsor}>sponsorship options</Anchor>.
        </p>
      </>
    ),
  },
  {
    title: 'Project Judge',
    image: require('images/illustrations/performance-overview.svg').default,
    cta: 'Become a Project Judge',
    description: (
      <p>
        As a judge, you'll review all project submissions for a specific category to select the
        winners! As the event gets closer, we'll provide specific instructions on the judging
        process.
      </p>
    ),
  },
  {
    title: 'Mentor',
    image: require('images/illustrations/pair-programming.svg').default,
    cta: 'Become a Mentor',
    description: (
      <p>
        We'll have mentors available throughout the competition whenever teams need help on their
        project or need to learn more about a specific technology.
      </p>
    ),
  },
];

const useStyles = createStyles((styles) => ({
  opportunity: {
    flexWrap: 'nowrap',
    marginBlock: styles.spacing.xl * 4,

    // Desktop
    [styles.fn.largerThan('xs')]: {
      '&:nth-of-type(even)': {
        flexDirection: 'row-reverse',
        // textAlign: 'right',
      },
    },

    [styles.fn.smallerThan('sm')]: {
      gap: styles.spacing.xl,
    },

    // Mobile
    [styles.fn.smallerThan('xs')]: {
      flexWrap: 'wrap',
      textAlign: 'center',
    },
  },

  image: {
    [styles.fn.smallerThan('xs')]: {
      marginInline: 'auto',
    },
  },
}));

export default function About() {
  const { classes } = useStyles();
  return (
    <Layout>
      <PageTitle>VOLUNTEER OPPORTUNITIES</PageTitle>
      <Container>
        <Box>
          {volunteerOpportunities.map((opportunity, idx) => {
            return (
              <AnimateUpOnce key={idx}>
                <Group key={opportunity.title} className={classes.opportunity}>
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    width={300}
                    className={classes.image}
                  />
                  <Box>
                    <Title order={3} my={10}>
                      {opportunity.title}
                    </Title>
                    <Text>{opportunity.description}</Text>
                    <GradientButton
                      rightIcon={<ChevronDown size={14} />}
                      component="a"
                      href="#sign-up-form"
                    >
                      {opportunity.cta}
                    </GradientButton>
                  </Box>
                </Group>
              </AnimateUpOnce>
            );
          })}
        </Box>
        <Divider />
        <VolunteerForm mt={50} />
      </Container>
    </Layout>
  );
}
