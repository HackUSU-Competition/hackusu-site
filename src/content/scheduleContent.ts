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
        endTime: 17,
        location: 'N. Entrance',
        locationVerbose: 'North Entrance',
        type: eventTypes.general,
        description:
          'Check-in will be inside the north entrance of Huntsman Hall, Utah State University. Follow the signs to the front desk to get your swag!',
        coverImage: require('../images/scenes/huntsman-hall.jpg').default,
      },
      {
        startTime: 18,
        endTime: 19,
        title: 'Dinner - Pizza',
        type: eventTypes.food,
        location: '2nd Floor',
        description: 'After you check-in and find a spot for your group, come enjoy some pizza!',
      },
      {
        startTime: 17,
        endTime: 17.83,
        title: 'Opening Keynote',
        location: '4th Floor',
        locationVerbose: 'Perry Pavilion (4th floor)',
        type: eventTypes.general,
        description: "We'll kick off the event with a keynote from our title sponsor!",
        // presenter: {
        //   name: '',
        // },
      },
      {
        startTime: 19,
        endTime: 24,
        title: 'Friday Evening Workshops',
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: '3rd Floor',
        description:
          "Join us for workshops and talks related to software, hardware, data science, and more! We'll post more details closer to the event.",
      },
      // {
      //   startTime: 19,
      //   endTime: 20,
      //   title: 'Firebase: Cloud Services Simplified',
      //   presenter: {
      //     name: 'Joseph Ditton',
      //     organization: 'USU Computer Science',
      //     profileImage: 'https://www.usu.edu/cs/images/directory/faculty/ditton-joseph.jpeg',
      //   },
      //   skillLevel: skillLevels.beginner,
      //   coverImage:
      //     'https://www.talentica.com/wp-content/uploads/2021/04/Firebase-blog-feature-image-1.png',
      //   type: eventTypes.workshop,
      //   location: '#126',
      //   locationVerbose: 'Room #126',
      //   description:
      //     'Learn about how to use Firebase cloud services to build your first serverless app!',
      // },
      // {
      //   startTime: 19,
      //   endTime: 20,
      //   title: 'Intro to Kotlin',
      //   type: eventTypes.workshop,
      //   skillLevel: skillLevels.intermediate,
      // },
      // {
      //   startTime: 19,
      //   endTime: 20,
      //   title: 'Robotics Showcase',
      //   type: eventTypes.workshop,
      //   skillLevel: skillLevels.advanced,
      // },
      // {
      //   startTime: 20,
      //   endTime: 21,
      //   title: 'Khrysalis: Advanced Source-to-Source Transpilation',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 21,
      //   endTime: 22,
      //   title: 'Khrysalis: Intro Hands-on Workshop',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 22,
      //   endTime: 23,
      //   title: 'Collaborative Software Development',
      //   type: eventTypes.workshop,
      // },
      {
        startTime: 23,
        endTime: 24,
        title: 'Pizza: Round 2',
        type: eventTypes.food,
        location: '2nd Floor',
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
        location: '2nd Floor',
      },
      {
        startTime: 0.5,
        endTime: 1.75,
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
        endTime: 12,
        title: 'Saturday Morning Workshops',
        type: eventTypes.workshop,
        description:
          "Join us for workshops and talks related to software, hardware, data science, and more! We'll post more details closer to the event.",
        location: '3rd Floor',
      },
      // {
      //   startTime: 9,
      //   endTime: 10,
      //   title: 'Resumes and Cover Letters that Work!',
      //   type: eventTypes.workshop,
      // },
      {
        startTime: 10,
        endTime: 11,
        title: 'Wikipedia Race',
        type: eventTypes.activity,
      },
      {
        startTime: 13,
        endTime: 15,
        title: 'Saturday Afternoon Workshops',
        type: eventTypes.workshop,
        description:
          "Join us for workshops and talks related to software, hardware, data science, and more! We'll post more details closer to the event.",
        location: '3rd Floor',
      },
      // {
      //   startTime: 10,
      //   endTime: 11,
      //   title: 'How to Build Awesome Web APIs',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 10,
      //   endTime: 11,
      //   title: 'Effective Interviewing Skills',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 11,
      //   endTime: 12,
      //   title: 'Career & Internship Search Strategies',
      //   type: eventTypes.workshop,
      // },
      {
        startTime: 12,
        endTime: 13.5,
        title: 'Lunch - Sandwiches',
        type: eventTypes.food,
        location: '2nd Floor',
      },
      // {
      //   startTime: 13,
      //   endTime: 14,
      //   title: 'Kotlin Server',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 14,
      //   endTime: 15,
      //   title: 'Reactive Programming with RX',
      //   type: eventTypes.workshop,
      // },
      {
        startTime: 15.25,
        endTime: 16,
        title: 'Final Project Submission',
        type: eventTypes.general,
      },
      {
        startTime: 16,
        endTime: 18,
        title: 'Dinner',
        type: eventTypes.food,
        location: '1st Floor',
      },
      {
        startTime: 16,
        endTime: 18,
        title: 'Networking Event',
        type: eventTypes.general,
        location: '2nd Floor',
      },
      {
        startTime: 16,
        endTime: 17,
        title: 'Preliminary Judging',
        type: eventTypes.general,
        location: '3rd Floor',
      },
      {
        startTime: 17,
        endTime: 18,
        title: 'Finalist Judging',
        type: eventTypes.general,
        location: '3rd Floor',
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
