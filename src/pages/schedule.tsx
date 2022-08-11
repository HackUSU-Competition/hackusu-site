import { ColorSwatch, Container, Group, Space, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageTitle from 'components/PageTitle';
import EventModal from 'components/Schedule/EventModal';
import EventTileContent from 'components/Schedule/EventTileContent';
import {
  eventTypes,
  fridaySchedule,
  HackUSUCalendarEvent,
  saturdaySchedule,
} from 'content/scheduleContent';
import React, { useState } from 'react';
import { createTheme, ScheduleView, themes } from 'react-schedule-view';
import { ScheduleViewProps } from 'react-schedule-view/ScheduleView';
import Layout from '../components/Layout/Layout';

const customCalendarTheme = createTheme('apple', {
  hourHeight: '95px',
  style: {
    timeScaleLabels: { color: '#555' },
    dayLabels: {
      fontWeight: 'bold',
      fontFamily: 'Roboto Slab',
      textTransform: 'uppercase',
      fontSize: '22px',
      marginBottom: '1rem',
    },
  },
  timeFormatter: (time: number) =>
    time === 0 || time === 24 ? 'Midnight' : themes.apple.timeFormatter(time),
  themeTileContent: EventTileContent,
  defaultTileColor: (event: HackUSUCalendarEvent) => event.type.color,
});

export default function Schedule() {
  const smallScreen = useMediaQuery('screen and (max-width: 900px)');

  const [selectedEvent, setSelectedEvent] = useState<HackUSUCalendarEvent | null>(null);

  const commonScheduleProps: Partial<ScheduleViewProps<HackUSUCalendarEvent>> = {
    theme: customCalendarTheme,
    handleEventClick: (event) => setSelectedEvent(event),
  };

  return (
    <Layout>
      <PageTitle>SCHEDULE</PageTitle>
      <Container style={{ marginTop: '3rem' }} size="sm">
        <Group spacing="xl" position="center">
          {Object.values(eventTypes).map((event) => (
            <Group key={event.name} spacing="xs">
              <ColorSwatch color={event.color}>
                {<event.icon color="#ddd" size="16px" style={{ mixBlendMode: 'luminosity' }} />}
              </ColorSwatch>
              <Text>{event.name}</Text>
            </Group>
          ))}
        </Group>

        <Space h="xl" />

        <ScheduleView viewStartTime={15} daySchedules={fridaySchedule} {...commonScheduleProps} />
        <Space h="xl" />
        <ScheduleView viewEndTime={20} daySchedules={saturdaySchedule} {...commonScheduleProps} />
      </Container>

      <EventModal event={selectedEvent} handleClose={() => setSelectedEvent(null)} />
    </Layout>
  );
}
