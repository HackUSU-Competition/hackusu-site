import { Anchor } from '@mantine/core';
import React, { ReactChild } from 'react';
import { paths } from './navigationContent';

export interface VolunteerOpportunity {
  title: string;
  description: ReactChild;
  image: string;
}

export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    title: 'Event Organizer',
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
    image: require('images/illustrations/meeting.svg').default,
  },
  {
    title: 'Workshop Host',
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
    image: require('images/illustrations/teaching.svg').default,
  },
  {
    title: 'Project Judge',
    description: (
      <p>
        As a judge, you'll review all project submissions for a specific category to select the
        winners! Check out the <Anchor href={paths.competition}>competition page</Anchor> for more
        information on each category.
      </p>
    ),
    image: require('images/illustrations/performance-overview.svg').default,
  },
  {
    title: 'Mentor',
    description: (
      <p>
        We'll have mentors available throughout the competition whenever teams need help on their
        project or need to learn more about a specific technology.
      </p>
    ),
    image: require('images/illustrations/pair-programming.svg').default,
  },
];
