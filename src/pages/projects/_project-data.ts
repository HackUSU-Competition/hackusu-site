type ProjectCategory = "hardware" | "game dev"

export interface FeaturedProject {
  title: string
  category: ProjectCategory
  video: {type: "youtube"; embedId: string} | {type: "other"; url: string}
  description: string
  sourceCodeUrl: string
  teamMembers: string[]
  tools: string[]
}

export const grandChampion: FeaturedProject = {
  title: "Zen Garden",
  category: "hardware",
  video: {type: "youtube", embedId: "R83iP5Q-EOI"},
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

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Bloons Tower Defense 1 Clone",
    category: "game dev",
    video: {
      type: "other",
      url: "https://drive.google.com/file/d/14R-HZYNPK8FdrtLpZXiT5St24TGm-P1B/preview"
    },
    description:
      "I recreated an Adobe Flash game from my childhood, Bloons Tower Defense 1! I used the assets from the original game. It's built using TypeScript and renders to an HTML canvas.",
    sourceCodeUrl:
      "https://drive.google.com/file/d/1dgStZf_djGRaVld89Z8fmG2h1HYEOTDN/view?usp=share_link",
    teamMembers: ["Kollin Murphy"],
    tools: ["TypeScript", "Vite"]
  }
]
