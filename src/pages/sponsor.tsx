import { Container, createStyles, Group, Image, Title, useMantineTheme } from '@mantine/core';
import { currentSponsors } from 'content/sponsors';
import React from 'react';
import Layout from '../components/Layout/Layout';

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },
}));

export default function Sponsor() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  console.log(currentSponsors);
  return (
    <Layout>
      <Container>
        <Title className={classes.title}>CURRENT SPONSORS</Title>
        <Group position="center" spacing={theme.spacing.xl * 2} mt={50}>
          {currentSponsors
            .filter((sponsor) => sponsor.logo)
            .map((sponsor) => (
              <Image key={sponsor.name} src={sponsor.logo} width={240} />
            ))}
        </Group>
      </Container>
    </Layout>
  );
}
