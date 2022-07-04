import { Box, ColorSwatch, Container, Group, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageTitle from 'components/PageTitle';
import EventModal from 'components/Schedule/EventModal';
import EventTileContent from 'components/Schedule/EventTileContent';
import {
  HackUSUCalendarEvent,
  fridaySchedule,
  saturdaySchedule,
  eventTypes,
} from 'content/scheduleContent';
import React, { FC, useContext, useState } from 'react';
import { ScheduleView, createTheme, ThemeContext, themes } from 'react-schedule-view';
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
  const smallScreen = useMediaQuery('(max-width: 900px)');

  const [selectedEvent, setSelectedEvent] = useState<HackUSUCalendarEvent | null>(null);

  const commonScheduleProps: Partial<ScheduleViewProps<HackUSUCalendarEvent>> = {
    theme: customCalendarTheme,
    handleEventClick: (event) => setSelectedEvent(event),
  };

  return (
    <Layout>
      <PageTitle>SCHEDULE</PageTitle>
      <Container style={{ marginTop: '3rem' }} size="lg">
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
        <Box
          style={{
            display: 'grid',
            gap: '3rem',
            alignItems: 'flex-start',
            gridTemplateColumns: smallScreen ? 'auto' : 'auto auto',
            marginTop: '3rem',
          }}
        >
          <ScheduleView
            viewStartTime={15}
            viewEndTime={25}
            daySchedules={fridaySchedule}
            {...commonScheduleProps}
          />
          <ScheduleView
            viewStartTime={7}
            viewEndTime={20}
            daySchedules={saturdaySchedule}
            {...commonScheduleProps}
          />
        </Box>
      </Container>

      <EventModal event={selectedEvent} handleClose={() => setSelectedEvent(null)} />
    </Layout>
  );
}
