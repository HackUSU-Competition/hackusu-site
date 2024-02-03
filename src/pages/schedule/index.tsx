import {ColorSwatch, Container, Group, Space, Text} from "@mantine/core"
import Layout from "components/Layout/Layout"
import PageTitle from "components/PageTitle"
import EventModal from "pages/schedule/_EventModal"
import {
  eventTypes,
  fridaySchedule,
  HackUSUCalendarEvent,
  saturdaySchedule
} from "pages/schedule/_scheduleContent"
import React, {useState} from "react"
import {createTheme, ScheduleView, themes} from "react-schedule-view"
import {ScheduleViewProps} from "react-schedule-view/dist/ScheduleView"
import EventTileContent from "./_EventTileContent"
import {SEO} from "components/seo"
import Section from "components/Layout/Section"
import ContactForm from "components/ContactForm"

const customCalendarTheme = createTheme("apple", {
  hourHeight: "75px",
  style: {
    timeScaleLabels: {color: "#555", paddingRight: "0.5rem"},
    dayLabels: {
      fontWeight: "bold",
      fontFamily: "Roboto Slab",
      textTransform: "uppercase",
      fontSize: "22px",
      marginBottom: "1rem"
    },
    eventTiles: {
      maxWidth: "450px"
    }
  },
  timeFormatter: (time: number) =>
    time === 0 || time === 24 ? "Mid." : themes.apple.timeFormatter(time),
  themeTileContent: EventTileContent,
  defaultTileColor: (event: HackUSUCalendarEvent) => event.type.color
})

export default function Schedule() {
  const [selectedEvent, setSelectedEvent] =
    useState<HackUSUCalendarEvent | null>(null)

  const commonScheduleProps: Partial<ScheduleViewProps<HackUSUCalendarEvent>> =
    {
      theme: customCalendarTheme,
      handleEventClick: (event) => setSelectedEvent(event)
    }

  return (
    <Layout>
      <PageTitle>Schedule</PageTitle>
      <Section width="sm">
        <Group spacing="xl" position="center">
          {Object.values(eventTypes).map((event) => (
            <Group key={event.name} spacing="xs">
              <ColorSwatch color={event.color}>
                {
                  <event.icon
                    color="#ddd"
                    size="16px"
                    style={{mixBlendMode: "luminosity"}}
                  />
                }
              </ColorSwatch>
              <Text>{event.name}</Text>
            </Group>
          ))}
        </Group>

        <Space h="xl" />

        <ScheduleView
          viewStartTime={14}
          daySchedules={fridaySchedule}
          {...commonScheduleProps}
        />
        <Space h="xl" />
        <ScheduleView
          viewEndTime={20}
          daySchedules={saturdaySchedule}
          {...commonScheduleProps}
        />
      </Section>

      <ContactForm />

      <EventModal
        event={selectedEvent ?? undefined}
        handleClose={() => setSelectedEvent(null)}
      />
    </Layout>
  )
}

export const Head = () => <SEO title="Event Schedule" />
