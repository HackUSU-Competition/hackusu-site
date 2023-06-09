type ProjectCategory =
  | "hardware"
  | "game dev"
  | "ai & ml"
  | "general"
  | "data analytics"

export interface FeaturedProject {
  title: string
  category: ProjectCategory
  video: {type: "youtube"; embedId: string} | {type: "link"; url: string}
  description: string
  sourceCodeUrl?: string
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
    title: "TohDoh",
    category: "general",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/1eNfafNn6g6ua_Ea_WNCtbNGLmmuOoB9-/view"
    },
    description:
      "TohDoh: “Pick up grandma” Scheduling web app! To-do apps have been a hot topic especially within the programming classes at USU. Well now you never need to worry about forgetting to pick up grandma because our team has created a to-do app that will end all to-do apps – TohDoh! On the TohDoh web app you can enter your work or class schedule to auto fill into your calendar. Then you can put the various tasks you need to do for work, school, and life with an estimation of how long each will take. TohDoh will then auto-schedule these different tasks as availability permits in your schedule. Your generated schedule can then be imported into any calendar with an .ics file that TohDoh can download to your computer.",
    sourceCodeUrl: "https://github.com/WesleyEdwards/tohdoh",
    teamMembers: [
      "Josh McClung",
      "Wesley Edwards",
      "Elise Francis",
      "Abby Israelsen"
    ],
    tools: [
      "React",
      "TypeScript",
      "Express",
      "Prisma",
      "MaterialUI",
      "generate-ical"
    ]
  },
  {
    title: "Bloons Tower Defense 1 Clone",
    category: "game dev",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/14R-HZYNPK8FdrtLpZXiT5St24TGm-P1B/view"
    },
    description:
      "I recreated an Adobe Flash game from my childhood, Bloons Tower Defense 1! I used the assets from the original game. It's built using TypeScript and renders to an HTML canvas.",
    sourceCodeUrl:
      "https://drive.google.com/file/d/1dgStZf_djGRaVld89Z8fmG2h1HYEOTDN/view?usp=share_link",
    teamMembers: ["Kollin Murphy"],
    tools: ["TypeScript", "Vite"]
  },
  {
    title: "Shakespearean English Translator and Generator",
    category: "ai & ml",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/1VyThO4XGhG_7FoOieU4CKuyomUoOpqvi/view"
    },
    description:
      "Our project takes a LLM (GPT2) and finetunes it to our specific use case, translating or generating Shakespearean English. After training the model, we then created a web app using Flask which loads and leverages our model or translation and generation. Through out web app we can feed prompts to our model and either receive a translation or generated text.",
    teamMembers: ["Cailean Bushnell", "Landon Work"],
    tools: ["Pandas", "Numpy", "torch", "tqdm", "GPT2"]
  },
  {
    title: "National Parks Interactive Planning",
    category: "data analytics",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/1aU7nfhIUR2znQEAwvvzvHYCxQoP8832v/view?usp=sharing"
    },
    description:
      "Our project is an online website that displays an interactive map along with the top 5 parks to visit in the current month. This list was made by us from a consideration of multiple factors including weather and visitor information. The interactive map allows you to select parks and when selected will bring you to a new page that shows the best months to visit that park based on your weather preferences of rain, and temperature. It also displays a line chart of the current monthly average visitors, along with recommendations of things to do around each park. ",
    sourceCodeUrl:
      "https://drive.google.com/file/d/1CUb-W-SqxEJIqdChvg4cGwKroGwKfOds/view?usp=sharing",
    teamMembers: ["Isaac Holcomb", "Isaac Black", "Tom Waite", "Kaden Yardley"],
    tools: ["Streamlit", "Pandas", "OpenAI", "Plotly", "Numpy", "LeafMap"]
  }

  // {
  //   title: "",
  //   category: "game dev",
  //   video: {
  //     type: "link",
  //     url: ""
  //   },
  //   description: "",
  //   sourceCodeUrl: "",
  //   teamMembers: [],
  //   tools: []
  // }
]
