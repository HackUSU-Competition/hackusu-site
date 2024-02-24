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
        startTime: 15,
        endTime: 17,
        location: "N. Entrance",
        locationVerbose: "North Entrance",
        type: eventTypes.general,
        description:
          "Check-in will be inside the north entrance of Huntsman Hall, Utah State University. Follow the signs to the front desk to get your swag!",
        coverImage: require("images/scenes/huntsman-hall-banner.jpg").default
      },
      {
        startTime: 15,
        endTime: 17,
        title: "Employer Networking Event",
        type: eventTypes.general,
        location: "2nd Floor"
      },
      {
        startTime: 17,
        endTime: 17.75,
        title: "Opening Keynote",
        location: "4th Floor",
        locationVerbose: "Perry Pavilion (4th floor)",
        type: eventTypes.general,
        // description:
        //   "We'll kick off the event with a keynote from our title sponsor!",
        presenter: {
          name: "Betsy Cantwell",
          profileImage: require("images/schedule/elizabeth-cantwell.jpg")
            .default,
          organization: "President, Utah State University"
        }
      },
      {
        startTime: 17.75,
        endTime: 19,
        title: "Pizza",
        type: eventTypes.food,
        location: "2nd Floor",
        description:
          "After the opening keynote come enjoy some pizza from Hungry Howie’s!"
      },
      {
        startTime: 19,
        endTime: 20,
        title: "How to stand out in the interview process",
        presenter: {
          name: "Jordan Sinquefield",
          profileImage: require("images/schedule/jordan_sinquefield.jpeg")
            .default,
          organization: "NICE"
        },
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 19,
        endTime: 20,
        title: "Library development and principles",
        presenter: {
          name: "Joseph Ivie",
          profileImage: require("images/schedule/joseph-ivie.jpg").default,
          organization: "Lightning Kite"
        },
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 19,
        endTime: 20,
        title: "Home security: How safe are you?",
        presenter: {
          name: "Garrett Kuns",
          profileImage: require("images/schedule/garrett-kuns.jpeg").default,
          organization: "309 Software Engineering Group"
        },
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      // {
      //   startTime: 19,
      //   endTime: 20,
      //   title: "TBA (L3 Harris)",
      //   // skillLevel: skillLevels.beginner,
      //   type: eventTypes.workshop,
      //   location: "3rd Floor"
      // },
      {
        startTime: 20,
        endTime: 21,
        title: "Kotlin basics",
        presenter: {
          name: "Brady Svedin",
          profileImage: require("images/schedule/brady-svedin.jpg").default,
          organization: "Lightning Kite"
        },
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 20,
        endTime: 21,
        title: "How to Develop Your Idea into a Business",
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor",
        presenter: {
          name: "Alfredo Solar",
          profileImage: require("images/schedule/alfredo-solar.jpeg").default
        }
      },
      {
        startTime: 20,
        endTime: 21,
        title: "Reinforcement Learning for Fintech",
        // skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor",
        presenter: {
          name: "Dr. Tyler Brough",
          profileImage: require("images/schedule/tyler-brough.jpg").default,
          organization: "Academic Director, The Analytics Solutions Center"
        }
      },
      {
        startTime: 21,
        endTime: 22,
        title: "Binary keychains activity",
        skillLevel: skillLevels.everyone,
        type: eventTypes.activity,
        location: "3rd Floor",
        presenter: {
          name: "Women in Tech"
        }
      },
      {
        startTime: 21,
        endTime: 22,
        title: "Building your first React app",
        skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "3rd Floor",
        description: undefined,
        presenter: {
          name: "Troy DeSpain",
          profileImage: require("images/schedule/troy-despain.png").default,
          organization: "Evidently"
        }
      },
      {
        startTime: 21,
        endTime: 22,
        title: "Code organization and dependency injection",
        // skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor",
        presenter: {
          name: "Hunter Henrichsen",
          profileImage: require("images/schedule/hunter-henrichsen.jpg")
            .default,
          organization: "Lucid"
        }
      },
      {
        startTime: 22,
        endTime: 23,
        title: "TBA (Center for Anticipatory Intelligence)",
        // skillLevel: skillLevels.intermediate,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 22,
        endTime: 23,
        title: "Multiplatform app development with Kotlin",
        presenter: {
          name: "Joseph Ivie",
          profileImage: require("images/schedule/joseph-ivie.jpg").default,
          organization: "Lightning Kite"
        },
        skillLevel: skillLevels.intermediate,
        type: eventTypes.workshop,
        location: "3rd Floor"
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
      // {
      //   startTime: 0.5,
      //   endTime: 1.75,
      //   title: "Movie",
      //   type: eventTypes.activity
      // },
      {
        startTime: 8,
        endTime: 9,
        title: "Breakfast",
        description: "Come get some breakfast from Einstein Bros. Bagels!",
        type: eventTypes.food
      },
      {
        startTime: 9,
        endTime: 10,
        title: "Sandbox Technical Entrepreneurial Experience",
        // skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "3rd Floor",
        presenter: {
          name: "Doug Derrick",
          profileImage: require("images/schedule/doug-derrick.png").default,
          organization: "Analytics Solutions Center"
        }
      },
      {
        startTime: 10,
        endTime: 11,
        title: "How to get your dream job",
        type: eventTypes.workshop,
        skillLevel: skillLevels.everyone,
        location: "3rd Floor",
        presenter: {
          name: "Mason Francis",
          profileImage: require("images/schedule/mason-francis.jpeg").default
        }
      },
      {
        startTime: 10,
        endTime: 11,
        title: "Coding principles from the real world",
        presenter: {
          name: "Joseph Ivie",
          profileImage: require("images/schedule/joseph-ivie.jpg").default,
          organization: "Lightning Kite"
        },
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 10,
        endTime: 11,
        title: "The Psychology behind App Designs",
        description:
          "Dark Patterns and Design Principles that can help sell more apps and also help you avoid being manipulated",
        presenter: {
          name: "Adrian Musters",
          profileImage: require("images/schedule/adrian-musters.jpeg").default,
          organization: "L3 Harris"
        },
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 11,
        endTime: 12,
        title: "Basic UX concepts",
        presenter: {
          name: "Joseph Ivie",
          profileImage: require("images/schedule/joseph-ivie.jpg").default,
          organization: "Lightning Kite"
        },
        skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 11,
        endTime: 12,
        title: "Time Traveling Databases",
        presenter: {
          name: "Logan Rios",
          organization: "309 Software Engineering Group"
        },
        // skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      {
        startTime: 11,
        endTime: 12,
        title: "An Introduction to Anomaly Detection",
        presenter: {
          name: "Eric McKinney",
          organization: "Space Dynamics Laboratory",
          profileImage: require("images/schedule/eric-mckinney.jpeg").default
        },
        // skillLevel: skillLevels.everyone,
        type: eventTypes.workshop,
        location: "3rd Floor"
      },
      // {
      //   startTime: 11,
      //   endTime: 12,
      //   title: "TBA (L3 Harris)",
      //   type: eventTypes.workshop,
      //   location: "3rd Floor"
      // },
      {
        startTime: 12,
        endTime: 13,
        title: "Lunch",
        description: "Come get some lunch from Mo' Bettahs!",
        type: eventTypes.food,
        location: "2nd Floor"
      },
      {
        startTime: 13,
        endTime: 14,
        title: "Contributing to open source software",
        // skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "3rd Floor",
        presenter: {
          name: "Hunter Henrichsen",
          profileImage: require("images/schedule/hunter-henrichsen.jpg")
            .default,
          organization: "Lucid"
        }
      },
      {
        startTime: 13,
        endTime: 14,
        title: "TBA (Earl Carlisle)",
        // skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "3rd Floor",
        presenter: {
          name: "Earl Carlisle"
          // organization: ""
        }
      },
      {
        startTime: 14,
        endTime: 15,
        title: "AWS infrastructure with Terraform",
        // skillLevel: skillLevels.beginner,
        type: eventTypes.workshop,
        location: "3rd Floor",
        presenter: {
          name: "Dalyn Dalton",
          profileImage: require("images/schedule/dalyn-dalton.jpg").default,
          organization: "Lucid"
        }
      },
      // {
      //   startTime: 13,
      //   endTime: 14,
      //   title: "TBA (Hill Air Force Base)",
      //   type: eventTypes.workshop,
      //   location: "3rd Floor"
      // },
      // {
      //   startTime: 14,
      //   endTime: 15,
      //   title: "TBA (Hill Air Force Base)",
      //   type: eventTypes.workshop,
      //   location: "3rd Floor"
      // },
      {
        startTime: 16,
        endTime: 18,
        title: "Dinner",
        description: "Come get some dinner from Raising Cane's!",
        type: eventTypes.food,
        location: "1st Floor"
      },
      {
        startTime: 16,
        endTime: 18,
        title: "Project Showcase & Judging",
        type: eventTypes.general,
        location: "2nd & 3rd Floors"
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
