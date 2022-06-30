import { CSSProperties } from '@mantine/styles/lib/tss/types/css-object';
import { FunctionComponent, ReactElement } from 'react';
import { CalendarEvent, colors, DaySchedule } from 'react-schedule-view';
import {
  CalendarEvent as CalendarEventIcon,
  Confetti,
  IconProps,
  Pizza,
  School,
} from 'tabler-icons-react';

const appleColors = colors.apple;

enum EventType {
  GENERAL = 'General',
  FOOD = 'Food',
  WORKSHOP = 'Workshop',
  ACTIVITY = 'Activity',
}

export interface HackUSUCalendarEvent extends CalendarEvent {
  presenter?: string;
  type: EventType;
  location?: string;
  locationVerbose?: string;
}

export const eventColorMap: Record<
  EventType,
  { color: string; icon: FunctionComponent<IconProps> }
> = {
  [EventType.GENERAL]: { color: appleColors.blue, icon: CalendarEventIcon },
  [EventType.WORKSHOP]: { color: appleColors.purple, icon: School },
  [EventType.FOOD]: { color: appleColors.red, icon: Pizza },
  [EventType.ACTIVITY]: { color: appleColors.green, icon: Confetti },
};

const withEventColors = (daySchedules: DaySchedule<HackUSUCalendarEvent>[]) =>
  daySchedules.map((daySchedule) => ({
    ...daySchedule,
    events: daySchedule.events.map((event) => ({
      ...event,
      color: eventColorMap[event.type]?.color ?? undefined,
    })),
  }));

export const fridaySchedule: DaySchedule<HackUSUCalendarEvent>[] = withEventColors([
  {
    name: 'Friday',
    events: [
      {
        startTime: 16,
        endTime: 18,
        title: 'Check-in',
        type: EventType.GENERAL,
        presenter: 'Troy DeSpain',
      },
      {
        startTime: 16.5,
        endTime: 17.75,
        title: 'Dinner - Pizza',
        type: EventType.FOOD,
      },
      {
        startTime: 18,
        endTime: 18.75,
        title: 'Opening Keynote',
        type: EventType.GENERAL,
      },
      {
        startTime: 19,
        endTime: 20,
        title: 'Firebase: Cloud Services Simplified',
        presenter: 'Joseph Ditton',
        type: EventType.WORKSHOP,
        location: '#126',
        locationVerbose: 'Room #126',
        description:
          'Learn about how to use Firebase cloud services to build your first serverless app!',
      },
      {
        startTime: 19,
        endTime: 20,
        title: 'Intro to Kotlin',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 19,
        endTime: 20,
        title: 'Robotics Showcase',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 20,
        endTime: 21,
        title: 'Khrysalis: Advanced Source-to-Source Transpilation',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 21,
        endTime: 22,
        title: 'Khrysalis: Intro Hands-on Workshop',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 22,
        endTime: 24,
        title: 'Movie',
        type: EventType.ACTIVITY,
      },
      {
        startTime: 22,
        endTime: 23,
        title: 'Collaborative Software Development',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 22,
        endTime: 23,
        title: 'Pizza: Round 2',
        type: EventType.FOOD,
      },
      {
        startTime: 24,
        endTime: 25,
        title: 'Aggie Ice Cream',
        type: EventType.FOOD,
      },
    ],
  },
]);

export const saturdaySchedule: DaySchedule<HackUSUCalendarEvent>[] = withEventColors([
  {
    name: 'Saturday',
    events: [
      {
        startTime: 8,
        endTime: 9.5,
        title: 'Breakfast - Einstein Bros. Bagels',
        type: EventType.FOOD,
      },
      {
        startTime: 9,
        endTime: 10,
        title: 'Resumes and Cover Letters that Work!',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 10,
        endTime: 11,
        title: 'Wikipedia Race',
        type: EventType.ACTIVITY,
      },
      {
        startTime: 10,
        endTime: 11,
        title: 'How to Build Awesome Web APIs',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 10,
        endTime: 11,
        title: 'Effective Interviewing Skills',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 11,
        endTime: 12,
        title: 'Career & Internship Search Strategies',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 12,
        endTime: 13.5,
        title: 'Lunch - Sandwiches',
        type: EventType.FOOD,
      },
      {
        startTime: 13,
        endTime: 14,
        title: 'Kotlin Server',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 14,
        endTime: 15,
        title: 'Reactive Programming with RX',
        type: EventType.WORKSHOP,
      },
      {
        startTime: 16,
        endTime: 18,
        title: 'Dinner - Costa Vida',
        type: EventType.FOOD,
      },
      {
        startTime: 16,
        endTime: 18,
        title: 'Networking Event',
        type: EventType.GENERAL,
      },
      {
        startTime: 17,
        endTime: 18,
        title: 'Judging for Finalists',
        type: EventType.GENERAL,
      },
      {
        startTime: 18.5,
        endTime: 19.25,
        title: 'Award Ceremony',
        type: EventType.GENERAL,
      },
    ],
  },
]);
