import {
  Anchor,
  Blockquote,
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';
import SectionHead from 'components/SectionHead';
import { paths } from 'content/navigationContent';
import { stats } from 'content/press/stats';
import { Link } from 'gatsby';
import React, { FC } from 'react';
import { ArrowRight } from 'tabler-icons-react';

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
      <SectionHead title="About HackUSU">
        Started in 2015, HackUSU is an annual 24 hr technology competiton and conference hosted at
        Utah State University (USU).
      </SectionHead>

      <Text size="xl">
        Every year, hundreds of students come to USU from across Utah and Idaho to build projects
        and attend workshops related to topics from game development and data analytics to hardware
        and security. The event venue is open overnight, and many teams stay up working all 24
        hours!
      </Text>

      <Center>
        <Button
          component={Link}
          to={paths.pressPhotos}
          mt={20}
          rightIcon={<ArrowRight size={18} />}
        >
          Download images from past events
        </Button>
      </Center>

      <Title order={3} mt={30}>
        What is hacking?
      </Title>
      <Text mt={10}>
        "Hacking" at this event isn't about breaking into computer systems, it's about quickly
        building a project that showcases your skills and demonstrates your ability to think outside
        the box.
      </Text>

      <Title order={3} mt={30}>
        Who can participate?
      </Title>
      <Text mt={10}>
        All college students and high school seniors are invited to participate! Most are from USU,
        but about 30% typically come in from other schools across Utah and Idaho. Students of all
        skill levels are welcome to attend to learn more!
      </Text>

      <Title order={3} mt={30}>
        What can students do at the event?
      </Title>
      <Text mt={10}>
        HackUSU is a 24 hour overnight event with plenty of things offered including:
        <ul>
          <li>
            Competitions to build projects related to software development, data analytics,
            hardware, and more!
          </li>
          <li>Workshops to learn more about a variety of technical topics</li>
          <li>Activities to get to know students from other programs and schools</li>
          <li>Network with employers to find out about internship and career opportunities</li>
          <li>Free food and unlimited snacks!</li>
        </ul>
      </Text>

      <Title order={3} mt={30}>
        What recources are available for media use?
      </Title>
      <Text mt={10}>
        On this page, we have stats about HackUSU, information about attending, and links to past
        articles written about the event. The{' '}
        <Anchor
          underline
          href="https://www.usu.edu/umac/media-relations/photos/index"
          target="_blank"
        >
          University Marketing and Communications
        </Anchor>{' '}
        website provides general photos of USU campus. We also have photos from past HackUSU events
        available for media use.
      </Text>
      <Button component={Link} to={paths.pressPhotos} mt={10} rightIcon={<ArrowRight size={18} />}>
        Download images from past events
      </Button>

      <Paper shadow="sm" className={classes.stats} radius="lg" my={40}>
        <Title order={3} align="center" mb="lg">
          HackUSU 2022 Stats
        </Title>
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

      <Container size="sm">
        <Blockquote my={40} cite="– Chandler Peterson, Student">
          I really loved the workshops, they helped me get a foot in the door for many concepts I
          wanted to learn more about but did not know where I could learn about it.
        </Blockquote>

        <Blockquote my={40} cite="– Cory Christensen, Student">
          Hackathons aren't just about gaining programming skills. They are about building up our
          communities, and becoming an innovative generation. This is something awesome, and I'm
          proud to be a part of it.
        </Blockquote>
      </Container>
    </>
  );
};

export default About;
