import { Box, createStyles, Paper, SimpleGrid, Text, Title } from '@mantine/core';
import { stats } from 'content/stats';
import React, { FC } from 'react';

const useStyles = createStyles((theme) => ({
  stats: {
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.blue[6],
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      padding: theme.spacing.lg,
    },

    [theme.fn.smallerThan('xs')]: {
      padding: theme.spacing.md,
    },
  },

  stat: {
    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid rgba(255, 255, 255, 0.6)`,

      [theme.fn.smallerThan('xs')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xs,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid rgba(255, 255, 255, 0.6)`,
      },
    },
  },

  value: {
    fontSize: theme.fontSizes.xl * 2,
    fontWeight: 800,
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs / 2,
  },

  label: {
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    textTransform: 'uppercase',
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    fontSize: theme.fontSizes.sm,
    marginBottom: theme.spacing.xs,
    opacity: 0.9,
    lineHeight: 1.2,
  },
}));

const About: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <Title order={2} my="xl">
        About HackUSU
      </Title>
      <Paper shadow="sm" className={classes.stats} radius='lg'>
        <SimpleGrid cols={3} spacing={0} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
          {stats.map((stat) => (
            <Box className={classes.stat}>
              <Text className={classes.value}>{stat.value}</Text>
              <Text className={classes.label}>{stat.label}</Text>
              <Text className={classes.description}>{stat.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Paper>
    </>
  );
};

export default About;
