import { Box, Container, createStyles, Divider, Group, Image, Text, Title } from '@mantine/core';
import VolunteerForm from 'components/Forms/VolunteerForm';
import GradientButton from 'components/GradientButton';
import PageTitle from 'components/PageTitle';
import { volunteerOpportunities } from 'content/volunteerContent';
import React from 'react';
import { ChevronDown } from 'tabler-icons-react';
import Layout from '../components/Layout/Layout';

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
          {volunteerOpportunities.map((opportunity) => {
            return (
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
            );
          })}
        </Box>
        <Divider />
        <VolunteerForm mt={50} />
      </Container>
    </Layout>
  );
}
