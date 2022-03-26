import {
  Container,
  createStyles,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';
import React from 'react';
import { Icon as TablerIcon, User } from 'tabler-icons-react';
import Layout from '../components/Layout/Layout';

interface FeatureProps {
  icon: TablerIcon;
  title: React.ReactNode;
  description: React.ReactNode;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  const theme = useMantineTheme();
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: 20, height: 20 }} />
      </ThemeIcon>
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
      <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  title: {
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

export default function Schedule() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const cardData: FeatureProps[] = [
    {
      icon: User,
      title: 'User-friendly',
      description:
        'We are a friendly team, we are always looking for new members to join our team.',
    },
  ];

  const features = cardData.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Layout>
      <Container className={classes.wrapper}>
        <Title className={classes.title}>SCHEDULE</Title>

        <Container size={560} p={0}>
          <Text size="sm" className={classes.description}>
            This is a nice description of the workshops
          </Text>
        </Container>

        <SimpleGrid
          mt={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'xl' },
            { maxWidth: 755, cols: 1, spacing: 'xl' },
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}
