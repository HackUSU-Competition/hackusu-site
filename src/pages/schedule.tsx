import { Avatar, Box, ColorSwatch, Container, Group, Modal, Portal, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageTitle from 'components/PageTitle';
import {
  HackUSUCalendarEvent,
  fridaySchedule,
  saturdaySchedule,
  eventColorMap,
} from 'content/scheduleContent';
import React, { FC, useContext, useState } from 'react';
import { ScheduleView, createTheme, ThemeContext, themes, colors } from 'react-schedule-view';
import { Clock, Pin } from 'tabler-icons-react';
import Layout from '../components/Layout/Layout';

const getInitials = (name: string) => {
  const names = name.split(' ');
  const initials = names.map((n) => n[0]).join('');
  return initials;
};

const EventContent: FC<{ event: HackUSUCalendarEvent }> = ({ event }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Group
        position="apart"
        style={{
          fontSize: '0.8rem',
          fontWeight: 'lighter',
        }}
      >
        {theme.eventTiles.timeRangeFormatter(event.startTime, event.endTime)}
        <div>{event.location}</div>
      </Group>
      <div style={{ fontWeight: 'bold', fontSize: '0.8rem', lineHeight: 1.2 }}>{event.title}</div>
    </>
  );
};

const customCalendarTheme = createTheme('apple', {
  grid: { hourHeight: '95px' },
  dayLabels: {
    style: {
      fontWeight: 'bold',
      fontFamily: 'Roboto Slab',
      textTransform: 'uppercase',
      fontSize: '22px',
      marginBottom: '1rem',
    },
  },
  eventTiles: {
    tileContent: EventContent,
  },
  timeScale: {
    style: {
      color: '#555',
    },
  },
});

export default function Schedule() {
  const smallScreen = useMediaQuery('(max-width: 900px)');
  const [selectedEvent, setSelectedEvent] = useState<HackUSUCalendarEvent | null>(null);

  return (
    <Layout>
      <PageTitle>SCHEDULE</PageTitle>
      <Container style={{ marginTop: '3rem' }} size="lg">
        <Group spacing="xl" position="center">
          {Object.entries(eventColorMap).map(([key, value]) => (
            <Group key={key} spacing="xs">
              <ColorSwatch color={value.color}>
                {<value.icon color="#ddd" size="16px" style={{ mixBlendMode: 'luminosity' }} />}
              </ColorSwatch>
              <Text>{key}</Text>
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
            theme={customCalendarTheme}
            handleEventClick={(event) => setSelectedEvent(event)}
          />
          <ScheduleView
            viewStartTime={7}
            viewEndTime={20}
            daySchedules={saturdaySchedule}
            theme={customCalendarTheme}
            handleEventClick={(event) => setSelectedEvent(event)}
          />
        </Box>
      </Container>

      <Portal>
        <Modal
          opened={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent?.title}
          styles={{
            title: {
              fontWeight: 'bold',
              fontSize: '1.2rem',
            },
            header: {
              margin: 0,
            },
          }}
        >
          {(() => {
            if (!selectedEvent) return null;

            const selectedColor = eventColorMap[selectedEvent?.type]?.color;
            const SelectedIcon = eventColorMap[selectedEvent?.type]?.icon;

            return (
              <>
                {selectedEvent.presenter && (
                  <Group spacing={4}>
                    <Avatar src={null} radius="xl" alt={selectedEvent.presenter} color="primary">
                      {getInitials(selectedEvent.presenter)}
                    </Avatar>
                    <Text color="dimmed">Presented by </Text>
                    <Text>{selectedEvent.presenter}</Text>
                  </Group>
                )}

                <Box style={{ marginBlock: '1rem' }}>
                  <Group>
                    <Clock size="1.2rem" color="grey" />
                    <Text>
                      {themes.apple.eventTiles.timeRangeFormatter(
                        selectedEvent.startTime,
                        selectedEvent.endTime
                      )}
                    </Text>
                  </Group>

                  {(() => {
                    const location = selectedEvent.locationVerbose || selectedEvent.location;
                    if (location)
                      return (
                        <Group>
                          <Pin size="1.2rem" color="grey" />
                          <Text>{location}</Text>
                        </Group>
                      );
                  })()}

                  <Group>
                    <SelectedIcon size="1.2rem" color="grey" />
                    <Text>{selectedEvent.type}</Text>
                  </Group>
                </Box>

                <Text>{selectedEvent.description}</Text>
              </>
            );
          })()}
        </Modal>
      </Portal>
    </Layout>
  );
}
