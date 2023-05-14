import {DefaultMantineColor} from "@mantine/core"
import {FunctionComponent} from "react"
import {CalendarEvent, colors, DaySchedule} from "react-schedule-view"
import {
  CalendarEvent as CalendarEventIcon,
  Confetti,
  IconProps,
  Pizza,
  School
} from "tabler-icons-react"

const appleColors = colors.apple

interface EventType {
  name: string
  color: string
  icon: FunctionComponent<IconProps>
}

export const eventTypes: Record<
  "general" | "workshop" | "food" | "activity",
  EventType
> = {
  general: {name: "General", color: appleColors.blue, icon: CalendarEventIcon},
  workshop: {name: "Workshop", color: appleColors.purple, icon: School},
  food: {name: "Food", color: appleColors.red, icon: Pizza},
  activity: {name: "Activity", color: appleColors.green, icon: Confetti}
}

interface SkillLevel {
  name: string
  color: DefaultMantineColor
}

export const skillLevels: Record<
  "everyone" | "beginner" | "intermediate" | "advanced",
  SkillLevel
> = {
  everyone: {name: "Everyone", color: "blue"},
  beginner: {name: "Beginner", color: "green"},
  intermediate: {name: "Intermediate", color: "orange"},
  advanced: {name: "Advanced", color: "red"}
}

export interface HackUSUCalendarEvent extends CalendarEvent {
  presenter?: {
    name: string
    profileImage?: string
    organization?: string
  }
  type: EventType
  skillLevel?: SkillLevel
  location?: string
  locationVerbose?: string
  coverImage?: string
}

export const fridaySchedule: DaySchedule<HackUSUCalendarEvent>[] = [
  {
    name: "Friday",
    events: [
      {
        title: "Check-in",
        startTime: 16,
        endTime: 17,
        location: "N. Entrance",
        locationVerbose: "North Entrance",
        type: eventTypes.general,
        description:
          "Check-in will be inside the north entrance of Huntsman Hall, Utah State University. Follow the signs to the front desk to get your swag!",
        coverImage: require("images/scenes/huntsman-hall-banner.jpg").default
      },
      {
        startTime: 17,
        endTime: 17.83,
        title: "Opening Keynote - Quantum Computing",
        location: "4th Floor",
        locationVerbose: "Perry Pavilion (4th floor)",
        type: eventTypes.general,
        description:
          "We'll kick off the event with a keynote from our title sponsor!",
        presenter: {
          name: "Sean Kirby",
          profileImage: undefined,
          organization: "NICE"
        }
      },
      {
        startTime: 18,
        endTime: 19,
        title: "Dinner - Pizza",
        type: eventTypes.food,
        location: "2nd Floor",
        description:
          "After you check-in and find a spot for your group, come enjoy some pizza from Hungry Howie’s!"
      },
      {
        startTime: 19,
        endTime: 20,
        title: "The Kotlin Programming Language",
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Joseph Ivie",
          profileImage: undefined,
          organization: "Lightning Kite"
        }
      },
      {
        startTime: 19,
        endTime: 20,
        title: "Intro to Systems Engineering",
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "Room 322",
        description: undefined,
        presenter: {
          name: "Jaque Johansen",
          profileImage: require("images/schedule/jaque-johansen.jpg").default,
          organization: "L3Harris"
        }
      },
      {
        startTime: 20,
        endTime: 21,
        title: "Intro to MBSE",
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Braydn Clark",
          profileImage: require("images/schedule/braydn-clark.jpg").default,
          organization: "L3Harris"
        }
      },
      {
        startTime: 20,
        endTime: 21,
        title: "How hackathon experiences lead to real-world projects",
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "Room 322",
        description: undefined,
        presenter: {
          name: "John Harrison",
          profileImage: undefined,
          organization: "Lucid"
        }
      },
      {
        startTime: 21,
        endTime: 22,
        title: "Lightning Server: A simple, Kotlin server framework",
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Joseph Ivie",
          profileImage: undefined,
          organization: "Lightning Kite"
        }
      },
      {
        startTime: 21,
        endTime: 22,
        title: "How to Fund Your Startup",
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "Room 322",
        description: undefined,
        presenter: {
          name: "Alfredo Solar",
          profileImage: undefined,
          organization: undefined
        }
      },
      {
        startTime: 22,
        endTime: 23,
        title: "Lightning Server: Deploying to AWS",
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Joseph Ivie",
          profileImage: undefined,
          organization: "Lightning Kite"
        }
      },
      {
        startTime: 22,
        endTime: 23,
        title: "Organizing Large Codebases with Dependency Injection",
        skillLevel: skillLevels.intermediate,
        type: eventTypes.workshop,
        location: "Room 322",
        description: undefined,
        presenter: {
          name: "Hunter Henrichsen",
          profileImage: undefined,
          organization: "Lucid"
        }
      },
      {
        startTime: 23,
        endTime: 24,
        title: "Pizza: Round 2",
        type: eventTypes.food,
        location: "2nd Floor"
      }
    ]
  }
]

export const saturdaySchedule: DaySchedule<HackUSUCalendarEvent>[] = [
  {
    name: "Saturday",
    events: [
      {
        startTime: 0,
        endTime: 1,
        title: "Aggie Ice Cream",
        type: eventTypes.food,
        location: "2nd Floor"
      },
      {
        startTime: 0.5,
        endTime: 1.75,
        title: "Movie",
        type: eventTypes.activity
      },
      {
        startTime: 8,
        endTime: 9,
        title: "Breakfast - Bagels & Breakfast Sandwiches",
        description: "Come get some breakfast from Einstein Bros. Bagels!",
        type: eventTypes.food
      },
      {
        startTime: 9,
        endTime: 10,
        title: "A Wholly Remarkable Orientation to the Corporate Universe",
        type: eventTypes.workshop,
        skillLevel: skillLevels.everyone,
        description:
          "This presentation will take a dive into the corporate universe and provide you with a wholly remarkable orientation to help you understand what corporate life will be like. Should you work for that company? Diagnose and understand what life will be like for you as you pursue your successful career. Will you enjoy the fast paced company? or would you like something more structured? We will weigh the pros and cons of each and help you know before you go!",
        location: "Room 320",
        presenter: {
          name: "Mike Judy",
          profileImage: undefined,
          organization: "iFit"
        }
      },
      {
        startTime: 10,
        endTime: 11,
        title: "Making a Kotlin Library",
        skillLevel: skillLevels.intermediate,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Joseph Ivie",
          profileImage: undefined,
          organization: "Lightning Kite"
        }
      },
      {
        startTime: 11,
        endTime: 12,
        title: "Technical Writing in STEM",
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Colin Geslin",
          profileImage: undefined,
          organization: "Space Dynamics Laboratory"
        }
      },

      // {
      //   startTime: 9,
      //   endTime: 10,
      //   title: 'Resumes and Cover Letters that Work!',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 10,
      //   endTime: 11,
      //   title: 'Wikipedia Race',
      //   type: eventTypes.activity,
      // },
      {
        startTime: 13,
        endTime: 14,
        title: "How to Fund Your Startup",
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Alfredo Solar",
          profileImage: undefined,
          organization: undefined
        }
      },
      {
        startTime: 14,
        endTime: 15,
        title: "Creating a Web Application with Docker and Node.js",
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "Room 320",
        description: undefined,
        presenter: {
          name: "Hunter Henrichsen",
          profileImage: undefined,
          organization: "Lucid"
        }
      },
      // {
      //   startTime: 10,
      //   endTime: 11,
      //   title: 'How to Build Awesome Web APIs',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 10,
      //   endTime: 11,
      //   title: 'Effective Interviewing Skills',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 11,
      //   endTime: 12,
      //   title: 'Career & Internship Search Strategies',
      //   type: eventTypes.workshop,
      // },
      {
        startTime: 12,
        endTime: 13,
        title: "Lunch - Subs",
        description: "Come get some lunch from Firehouse Subs!",
        type: eventTypes.food,
        location: "2nd Floor"
      },
      // {
      //   startTime: 13,
      //   endTime: 14,
      //   title: 'Kotlin Server',
      //   type: eventTypes.workshop,
      // },
      // {
      //   startTime: 14,
      //   endTime: 15,
      //   title: 'Reactive Programming with RX',
      //   type: eventTypes.workshop,
      // },
      {
        startTime: 15.25,
        endTime: 16,
        title: "Final Project Submission",
        type: eventTypes.general
      },
      {
        startTime: 16,
        endTime: 18,
        title: "Dinner - Mo' Bettahs",
        type: eventTypes.food,
        location: "1st Floor"
      },
      {
        startTime: 16,
        endTime: 18,
        title: "Networking Event",
        type: eventTypes.general,
        location: "2nd Floor"
      },
      {
        startTime: 16,
        endTime: 17,
        title: "Preliminary Judging",
        type: eventTypes.general
      },
      {
        startTime: 17,
        endTime: 18,
        title: "Finalist Judging",
        type: eventTypes.general
      },
      {
        startTime: 18.5,
        endTime: 19.25,
        title: "Award Ceremony",
        type: eventTypes.general,
        location: "4th Floor",
        locationVerbose: "Perry Pavilion (4th floor)"
      }
    ]
  }
]
