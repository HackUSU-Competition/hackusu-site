import { Text, Title } from '@mantine/core';
import SectionHead from 'components/SectionHead';
import React, { FC } from 'react';
import BudgetChart from './BudgetChart';

const About: FC = () => {
  return (
    <>
      <SectionHead title="What is HackUSU?">300+ Students • 24 Hours</SectionHead>
      <Text mt={10}>
        We're HackUSU, Utah's largest and oldest student-run hackathon. Each year, hundreds of
        student developers, engineers, and data analysts meet at Utah State University to unite for
        a weekend of building and collaboration. We'll have competitions and workshops related to
        many topics from game development and data analytics to hardware and security.
      </Text>
      <Text mt={10}>
        You won't find malicious basement hackers trying to break into private servers at
        hackathons. Hackathons are weekend-long events hosted by a variety of universities and
        colleges across the country who pride themselves on encouraging students to 'hack' a
        solution to difficult technical problems. The 'hackathon' nomenclature has risen in recent
        years to represent student collaboration and interaction around hardware and software.
      </Text>

      <SectionHead title="Why Sponsor?"></SectionHead>
      <Text mt={10}>
        HackUSU provides a unique medium to bring your company to center stage as well as interact
        with the next generation of innovators from around the Midwest. Here are 3 ways that our
        sponsors benefit the most by getting involved:
      </Text>
      <Title order={3} mt={30}>
        Recruiting
      </Title>
      <Text mt={10}>
        What could be better than a building full of ambitious students willing to spend an entire
        weekend building and hacking together new tech? Set up a table with us and get unparalleled
        access to university talent, resumes, interview rooms, and non-stop networking
        opportunities!
      </Text>
      <Title order={3} mt={30}>
        Branding
      </Title>
      <Text mt={10}>
        Sponsorship is a great way to accelerate brand recognition and allow students to explore
        your product's potential. We have arranged a variety of options for getting your name in
        front of our hackers ranging from swag, meals, to workshops.
      </Text>
      <Title order={3} mt={30}>
        Appraisal
      </Title>
      <Text mt={10}>
        Hackathonsdoubleasaweekendofhigh-speed,top-qualityusertesting. HackUSUisachance to see how
        developers use your tech in practical applications while simultaneously getting feedback. To
        facilitate this, we offer the opportunity for your company to award a separate sponsored
        prize to whoever you believe utilized your tech the best.
      </Text>

      <Title order={2} mt={40} align="center">
        How Sponsorship Helps
      </Title>
      <BudgetChart />
    </>
  );
};

export default About;
