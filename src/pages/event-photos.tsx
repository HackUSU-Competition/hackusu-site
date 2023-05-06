import {Container} from "@mantine/core"
import PageTitle from "components/PageTitle"
import EventModal from "components/Schedule/EventModal"
import {HackUSUCalendarEvent} from "content/scheduleContent"
import React, {useState} from "react"
import Layout from "../components/Layout/Layout"

export default function EventPhotos() {
  const [selectedEvent, setSelectedEvent] =
    useState<HackUSUCalendarEvent | null>(null)

  return (
    <Layout>
      <PageTitle>HackUSU 2023 Photos</PageTitle>
      <Container style={{marginTop: "3rem"}} size="sm"></Container>

      <EventModal
        event={selectedEvent ?? undefined}
        handleClose={() => setSelectedEvent(null)}
      />
    </Layout>
  )
}
