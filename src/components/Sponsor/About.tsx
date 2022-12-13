import { Image, List, Text, Title } from '@mantine/core';
import Section from 'components/Layout/Section';
import React, { FC } from 'react';
import { ArrowRight } from 'tabler-icons-react';

const About: FC = () => {
  return (
    <>
      <Section title="What is HackUSU" subtitle="300+ Students • 24 Hours • March 24-25, 2023">
        <Text size="xl" mt={10} weight={500}>
          We're HackUSU, Utah's largest and oldest student-run hackathon. Each year, hundreds of
          students and professionals meet at Utah State University for competitions and workshops
          related software, data analytics, hardware, and more!
        </Text>
        <Text mt={40}>
          You won't find malicious basement hackers trying to break into private servers at
          hackathons. Hackathons are weekend-long events hosted by a variety of universities and
          colleges across the country who pride themselves in encouraging students to 'hack' a
          solution to difficult technical problems. The 'hackathon' name has risen in recent years
          to represent student collaboration and interaction around hardware and software.
        </Text>

        <Text mt={40} weight="bold" size="xl">
          Here's what students will be doing at HackUSU 2023:
        </Text>
        <List icon={<ArrowRight />} mt={10}>
          <List.Item>
            {/* <Anchor component={Link} to={paths.competition}>
              Team competitions
            </Anchor>{' '} */}
            Team competitions in a variety of categories
          </List.Item>
          <List.Item>
            Workshops on topics related to software engineering, data analytics, and hardware
            development
          </List.Item>
          <List.Item>Networking with recruiters and engineers from our sponsors</List.Item>
        </List>
      </Section>

      <Section title="Why Sponsor?" background="light">
        <Text size="xl" mt={10} weight={500}>
          HackUSU provides a unique medium to bring your company to center stage and interact with
          the next generation of innovators from around the Midwest. Here are 3 ways that our
          sponsors benefit the most by getting involved:
        </Text>
        <Image
          src={require('images/maiden-voyage-table.jpeg').default}
          mt={30}
          ml="lg"
          mb="lg"
          sx={(theme) => ({
            borderRadius: 10,
            overflow: 'hidden',
            float: 'right',
            width: '50%',
            '@media (max-width: 755px)': {
              width: '100%',
            },
          })}
        />
        <Title order={3} mt={30}>
          Recruiting
        </Title>
        <Text mt={10}>
          What could be better than a building full of ambitious students willing to spend an entire
          weekend creating and hacking together new tech? Set up a table with us and get
          unparalleled access to university talent, resumes, interview rooms, and non-stop
          networking opportunities!
        </Text>
        <Title order={3} mt={30}>
          Branding
        </Title>
        <Text mt={10}>
          Sponsorship is a great way to accelerate brand recognition and allow students to explore
          your product's potential. We have arranged a variety of options for getting your name in
          front of our hackers including keynote presentations, swag, and custom competition
          categories!
        </Text>
        <Title order={3} mt={30}>
          Appraisal
        </Title>
        <Text mt={10}>
          Would you like to see how both new and experienced developers use your technology or
          services? You can either sponsor a competition category, or award a separate prize to
          whichever team you believe utilizes your tech the best.
        </Text>
      </Section>

      {/* <Title order={2} mt={40} align="center">
        How Sponsorship Helps
      </Title>
      <BudgetChart /> */}
    </>
  );
};

export default About;
