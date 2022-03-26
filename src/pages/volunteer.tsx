import { Box, Container, createStyles, Group, Image, Text, Title } from '@mantine/core';
import { volunteerOpportunities } from 'content/volunteerContent';
import React from 'react';
import Layout from '../components/Layout/Layout';

const useStyles = createStyles((styles) => ({
  opportunity: {
    flexWrap: 'nowrap',
    marginBlock: styles.spacing.xl * 4,
    gap: styles.spacing.xl * 3,

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
      <Container>
        <Title align="center">VOLUNTEER</Title>
        <Box>
          {volunteerOpportunities.map((opportunity, index) => {
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
                </Box>
              </Group>
            );
          })}
        </Box>
      </Container>
    </Layout>
  );
}
