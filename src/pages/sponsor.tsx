import {
  Box,
  Container,
  createStyles,
  Group,
  Image,
  List,
  RingProgress,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { categorySpending, currentSponsors } from 'content/sponsors';
import React from 'react';
import { CircleCheck } from 'tabler-icons-react';
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

  const totalSpend = categorySpending.reduce((acc, curr) => acc + curr.amount, 0);

  console.log(totalSpend);

  return (
    <Layout>
      <Container>
        <Title order={1} className={classes.title}>
          SPONSOR HACKUSU
        </Title>

        <Title order={2} className={classes.title}>
          HOW SPONSORSHIP HELPS
        </Title>
        <Group position='center' mb={50}>
          <Box>
            <RingProgress
              size={300}
              thickness={40}
              label={
                <Text size="xs" align="center">
                  2022 Budget Allocation
                </Text>
              }
              sections={categorySpending.map((category) => ({
                color: category.color,
                value: (100 * category.amount) / totalSpend,
              }))}
            />
          </Box>
          <Box>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <CircleCheck size={16} />
                </ThemeIcon>
              }
            >
              {categorySpending.map((category) => (
                <List.Item
                  icon={
                    <ThemeIcon color={category.color} size={24} radius="xl">
                      <category.icon size={16} />
                    </ThemeIcon>
                  }
                >
                  {category.name}
                </List.Item>
              ))}
            </List>
          </Box>
        </Group>

        <Title order={2} className={classes.title}>
          CURRENT SPONSORS
        </Title>
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
