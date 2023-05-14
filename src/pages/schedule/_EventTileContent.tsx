import {Group} from "@mantine/core"
import {HackUSUCalendarEvent} from "content/scheduleContent"
import React, {FC, useContext} from "react"
import {ThemeContext} from "react-schedule-view"

const EventTileContent: FC<{event: HackUSUCalendarEvent}> = ({event}) => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Group
        position="apart"
        style={{
          fontSize: "0.8rem",
          fontWeight: "lighter"
        }}
      >
        {theme.timeRangeFormatter(event.startTime, event.endTime)}
        <div>{event.location}</div>
      </Group>
      <div style={{fontWeight: "bold", fontSize: "0.8rem", lineHeight: 1.1}}>
        {event.title}
      </div>
    </>
  )
}

export default EventTileContent
