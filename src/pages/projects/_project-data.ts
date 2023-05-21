type ProjectCategory = "hardware"

export interface FeaturedProject {
  title: string
	category: ProjectCategory
  youtubeEmbedId: string
  description: string
  sourceCodeUrl: string
  teamMembers: string[]
  tools: string[]
}

export const grandChampion: FeaturedProject = {
  title: "Zen Garden",
	category: "hardware",
  youtubeEmbedId: "R83iP5Q-EOI",
  description:
    "We 3D modeled, printed, and developed software to drive mini tractors to rake the sand in a Zen Garden. The brains of the tractors are ESP32 microcontrollers. The ESP32 controls 2 stepper motors using tank controls to propel, and steer the tractor forward. The esp32 also hosts a wi-fi network. If connected to the tractor wi-fi, an internet browser navigated to 192.168.4.1 a joystick will be displayed. The joystick can then control the tractor, allowing one to get their Zen on and feel relaxed and rested.",
  sourceCodeUrl: "https://github.com/daniel-morty/hackusu2023",
  teamMembers: ["Aaron Roth", "Daniel Mortenson", "Carter Nettesheim"],
  tools: [
    "Free RTOS",
    "ESP async web server",
    "stepper motor",
    "arduino",
    "Fusion 360",
    "Ultimaker Cura"
  ]
}
