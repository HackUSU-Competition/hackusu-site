import { DefaultMantineColor } from '@mantine/core';
import { FunctionComponent } from 'react';
import { CalendarEvent, colors, DaySchedule } from 'react-schedule-view';
import {
  CalendarEvent as CalendarEventIcon,
  Confetti,
  IconProps,
  Pizza,
  School,
} from 'tabler-icons-react';

const appleColors = colors.apple;

interface EventType {
  name: string;
  color: string;
  icon: FunctionComponent<IconProps>;
}

export const eventTypes: Record<'general' | 'workshop' | 'food' | 'activity', EventType> = {
  general: { name: 'General', color: appleColors.blue, icon: CalendarEventIcon },
  workshop: { name: 'Workshop', color: appleColors.purple, icon: School },
  food: { name: 'Food', color: appleColors.red, icon: Pizza },
  activity: { name: 'Activity', color: appleColors.green, icon: Confetti },
};

interface SkillLevel {
  name: string;
  color: DefaultMantineColor;
}

export const skillLevels: Record<
  'everyone' | 'beginner' | 'intermediate' | 'advanced',
  SkillLevel
> = {
  everyone: { name: 'Everyone', color: 'blue' },
  beginner: { name: 'Beginner', color: 'green' },
  intermediate: { name: 'Intermediate', color: 'orange' },
  advanced: { name: 'Advanced', color: 'red' },
};

export interface HackUSUCalendarEvent extends CalendarEvent {
  presenter?: {
    name: string;
    profileImage?: string;
    organization?: string;
  };
  type: EventType;
  skillLevel?: SkillLevel;
  location?: string;
  locationVerbose?: string;
  coverImage?: string;
}

export const fridaySchedule: DaySchedule<HackUSUCalendarEvent>[] = [
  {
    name: 'Friday',
    events: [
      {
        title: 'Check-in',
        startTime: 16,
        endTime: 18,
        location: 'N. Entrance',
        locationVerbose: 'North Entrance',
        type: eventTypes.general,
        description:
          'Check-in will be inside the north entrance of Huntsman Hall, Utah State University. Follow the signs to the front desk to get your swag!',
        coverImage: require('../images/scenes/huntsman-hall.jpg').default,
      },
      {
        startTime: 16.5,
        endTime: 17.75,
        title: 'Dinner - Pizza',
        type: eventTypes.food,
        location: '2nd Floor',
        description: 'After you check-in and find a spot for your group, come enjoy some pizza!',
      },
      {
        startTime: 18,
        endTime: 18.75,
        title: 'Opening Keynote',
        location: '4th Floor',
        locationVerbose: 'Perry Pavilion (4th floor)',
        type: eventTypes.general,
        skillLevel: skillLevels.everyone,
      },
      {
        startTime: 19,
        endTime: 20,
        title: 'Firebase: Cloud Services Simplified',
        presenter: {
          name: 'Joseph Ditton',
          organization: 'USU Computer Science',
          profileImage: 'https://www.usu.edu/cs/images/directory/faculty/ditton-joseph.jpeg',
        },
        skillLevel: skillLevels.beginner,
        coverImage:
          'https://www.talentica.com/wp-content/uploads/2021/04/Firebase-blog-feature-image-1.png',
        type: eventTypes.workshop,
        location: '#126',
        locationVerbose: 'Room #126',
        description:
          'Learn about how to use Firebase cloud services to build your first serverless app!',
      },
      {
        startTime: 19,
        endTime: 20,
        title: 'Intro to Kotlin',
        type: eventTypes.workshop,
        skillLevel: skillLevels.intermediate,
      },
      {
        startTime: 19,
        endTime: 20,
        title: 'Robotics Showcase',
        type: eventTypes.workshop,
        skillLevel: skillLevels.advanced,
      },
      {
        startTime: 20,
        endTime: 21,
        title: 'Khrysalis: Advanced Source-to-Source Transpilation',
        type: eventTypes.workshop,
      },
      {
        startTime: 21,
        endTime: 22,
        title: 'Khrysalis: Intro Hands-on Workshop',
        type: eventTypes.workshop,
      },
      {
        startTime: 22,
        endTime: 23.75,
        title: 'Movie',
        type: eventTypes.activity,
      },
      {
        startTime: 22,
        endTime: 23,
        title: 'Collaborative Software Development',
        type: eventTypes.workshop,
      },
      {
        startTime: 22,
        endTime: 23,
        title: 'Pizza: Round 2',
        type: eventTypes.food,
      },
    ],
  },
];

export const saturdaySchedule: DaySchedule<HackUSUCalendarEvent>[] = [
  {
    name: 'Saturday',
    events: [
      {
        startTime: 0,
        endTime: 1,
        title: 'Aggie Ice Cream',
        type: eventTypes.food,
      },
      {
        startTime: 1,
        endTime: 2.75,
        title: 'Movie',
        type: eventTypes.activity,
      },
      {
        startTime: 8,
        endTime: 9.5,
        title: 'Breakfast - Einstein Bros. Bagels',
        type: eventTypes.food,
      },
      {
        startTime: 9,
        endTime: 10,
        title: 'Resumes and Cover Letters that Work!',
        type: eventTypes.workshop,
      },
      {
        startTime: 10,
        endTime: 11,
        title: 'Wikipedia Race',
        type: eventTypes.activity,
      },
      {
        startTime: 10,
        endTime: 11,
        title: 'How to Build Awesome Web APIs',
        type: eventTypes.workshop,
      },
      {
        startTime: 10,
        endTime: 11,
        title: 'Effective Interviewing Skills',
        type: eventTypes.workshop,
      },
      {
        startTime: 11,
        endTime: 12,
        title: 'Career & Internship Search Strategies',
        type: eventTypes.workshop,
      },
      {
        startTime: 12,
        endTime: 13.5,
        title: 'Lunch - Sandwiches',
        type: eventTypes.food,
      },
      {
        startTime: 13,
        endTime: 14,
        title: 'Kotlin Server',
        type: eventTypes.workshop,
      },
      {
        startTime: 14,
        endTime: 15,
        title: 'Reactive Programming with RX',
        type: eventTypes.workshop,
      },
      {
        startTime: 16,
        endTime: 18,
        title: 'Dinner - Costa Vida',
        type: eventTypes.food,
      },
      {
        startTime: 16,
        endTime: 18,
        title: 'Networking Event',
        type: eventTypes.general,
      },
      {
        startTime: 17,
        endTime: 18,
        title: 'Judging for Finalists',
        type: eventTypes.general,
      },
      {
        startTime: 18.5,
        endTime: 19.25,
        title: 'Award Ceremony',
        type: eventTypes.general,
      },
    ],
  },
];
