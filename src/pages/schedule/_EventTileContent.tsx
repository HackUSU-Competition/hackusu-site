import {Group, Text} from "@mantine/core"
import {HackUSUCalendarEvent} from "pages/schedule/_scheduleContent"
import React, {FC, useContext} from "react"
import {ThemeContext} from "react-schedule-view"

const EventTileContent: FC<{event: HackUSUCalendarEvent}> = ({event}) => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Group
        position="apart"
        sx={{
          fontSize: "0.8rem",
          fontWeight: "lighter",
          columnGap: "0.5rem",
          rowGap: 0,
          lineHeight: 1.1,
          marginBottom: "0.2rem"
        }}
      >
        <div>{theme.timeRangeFormatter(event.startTime, event.endTime)}</div>
        <div>{event.location}</div>
      </Group>
      <Text
        sx={{
          fontWeight: "bold",
          fontSize: "0.8rem",
          lineHeight: 1.1,
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
      >
        {event.title}
      </Text>
    </>
  )
}

export default EventTileContent
