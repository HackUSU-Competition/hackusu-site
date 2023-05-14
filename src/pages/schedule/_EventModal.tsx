import {
  Avatar,
  Badge,
  Box,
  Card,
  Group,
  Image,
  Modal,
  Text,
  useMantineTheme
} from "@mantine/core"
import {HackUSUCalendarEvent} from "content/scheduleContent"
import React, {FC} from "react"
import {themes} from "react-schedule-view"
import {Clock, Pin} from "tabler-icons-react"

const getInitials = (name: string) => {
  const names = name.split(" ")
  const initials = names.map((n) => n[0]).join("")
  return initials
}

export interface EventModalProps {
  event?: HackUSUCalendarEvent
  handleClose: () => void
}

const EventModal: FC<EventModalProps> = (props) => {
  const {event, handleClose} = props
  const theme = useMantineTheme()

  if (!event) return null

  const location = event.locationVerbose ?? event.location

  return (
    <Modal
      centered
      opened={!!event}
      onClose={handleClose}
      withCloseButton={false}
      padding={0}
    >
      <Card padding="lg">
        <Card.Section style={{borderBottom: "1px solid #AAA"}}>
          <Image
            withPlaceholder
            src={
              event.coverImage ??
              require("../../images/backgrounds/triangles.svg").default
            }
            height={event.coverImage ? 160 : 80}
          />
        </Card.Section>

        <Card.Section component={Group}>
          <Group
            position="apart"
            style={{
              paddingBlock: 8,
              marginBottom: "1rem",
              backgroundColor: theme.colors.gray[2]
            }}
          >
            <Group spacing="xs" position="center" style={{flexGrow: 1}}>
              <Clock size="1.2rem" color="grey" />
              {themes.apple.timeRangeFormatter(event.startTime, event.endTime)}
            </Group>

            {location && (
              <Group spacing="xs" position="center" style={{flexGrow: 1}}>
                <Pin size="1.2rem" color="grey" />
                {location}
              </Group>
            )}
          </Group>
        </Card.Section>

        <Group noWrap position="apart" align="top">
          <Text weight="bold" size="xl" style={{lineHeight: 1.2}}>
            {event.title}
          </Text>

          {event.skillLevel && (
            <div>
              <Badge variant="filled" color={event.skillLevel.color}>
                {event.skillLevel.name}
              </Badge>
            </div>
          )}
        </Group>

        <Text size="sm" style={{lineHeight: 1.5, marginTop: "1rem"}}>
          {event.description}
        </Text>

        {event.presenter && (
          <Group style={{marginBlock: "1rem"}}>
            <Avatar
              src={event.presenter.profileImage}
              radius="xl"
              alt={event.presenter.name}
              color="primary"
            >
              {getInitials(event.presenter.name)}
            </Avatar>
            <Box>
              <Text size="lg" weight="bold">
                {event.presenter.name}
              </Text>
              <Text color="dimmed">{event.presenter.organization}</Text>
            </Box>
          </Group>
        )}
      </Card>
    </Modal>
  )
}

export default EventModal
