import {
  Avatar,
  Box,
  Card,
  ColorSwatch,
  Container,
  Group,
  Modal,
  Image,
  Badge,
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageTitle from 'components/PageTitle';
import {
  HackUSUCalendarEvent,
  fridaySchedule,
  saturdaySchedule,
  eventTypes,
} from 'content/scheduleContent';
import React, { FC, useContext, useState } from 'react';
import { ScheduleView, createTheme, ThemeContext, themes } from 'react-schedule-view';
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
        {theme.timeRangeFormatter(event.startTime, event.endTime)}
        <div>{event.location}</div>
      </Group>
      <div style={{ fontWeight: 'bold', fontSize: '0.8rem', lineHeight: 1.2 }}>{event.title}</div>
    </>
  );
};

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
  themeTileContent: EventContent,
  defaultTileColor: (event: HackUSUCalendarEvent) => event.type.color,
});

export default function Schedule() {
  const smallScreen = useMediaQuery('(max-width: 900px)');
  const [selectedEvent, setSelectedEvent] = useState<HackUSUCalendarEvent | null>(null);

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

      <Modal
        centered
        opened={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        withCloseButton={false}
        overlayBlur={1}
        styles={{
          modal: {
            padding: '0 !important',
          },
        }}
      >
        {(() => {
          if (!selectedEvent) return null;

          const location = selectedEvent.locationVerbose ?? selectedEvent.location;

          return (
            <Card>
              <Card.Section style={{ borderBottom: '1px solid #AAA' }}>
                <Image
                  withPlaceholder
                  src={
                    selectedEvent.coverImage ||
                    require('../images/backgrounds/triangles.svg').default
                  }
                  height={selectedEvent.coverImage ? 160 : 80}
                />
              </Card.Section>

              <Group position="apart" style={{ marginBlock: 16 }}>
                <div style={{ flexGrow: 1, textAlign: 'center' }}>
                  {themes.apple.timeRangeFormatter(selectedEvent.startTime, selectedEvent.endTime)}
                </div>
                <div>•</div>
                {location && (
                  <>
                    <div style={{ flexGrow: 1, textAlign: 'center' }}>{location}</div>
                    <div>•</div>
                  </>
                )}

                <div style={{ flexGrow: 1, textAlign: 'center' }}>{selectedEvent.type.name}</div>
              </Group>

              <Group noWrap position="apart" align="top">
                <Text weight="bold" size="xl" style={{ lineHeight: 1.2 }}>
                  {selectedEvent.title}
                </Text>

                {selectedEvent.skillLevel && (
                  <div>
                    <Badge variant="filled" color={selectedEvent.skillLevel.color}>
                      {selectedEvent.skillLevel.name}
                    </Badge>
                  </div>
                )}
              </Group>

              <Text size="sm" style={{ lineHeight: 1.5, marginTop: '1rem' }}>
                {selectedEvent.description}
              </Text>

              {selectedEvent.presenter && (
                <Group style={{ marginBlock: '1rem' }}>
                  <Avatar
                    src={selectedEvent.presenter.profileImage}
                    radius="xl"
                    alt={selectedEvent.presenter.name}
                    color="primary"
                  >
                    {getInitials(selectedEvent.presenter.name)}
                  </Avatar>
                  <Box>
                    <Text size="lg" weight="bold">
                      {selectedEvent.presenter.name}
                    </Text>
                    <Text color="dimmed">{selectedEvent.presenter.organization}</Text>
                  </Box>
                </Group>
              )}
            </Card>
          );
        })()}
      </Modal>
    </Layout>
  );
}
