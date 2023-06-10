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
  },

  {
    title: "MINDful Hand",
    category: "hardware",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/1tys-Eq0Ul1Rv0Oboey_nwtMVoASc8zKw/view"
    },
    description:
      "This project involves creating a mechanical hand using recycled materials that can be controlled by the user's thoughts using brain control technology. The hand is controlled using machine learning algorithms based on data acquired from the user's brain signals. The project uses Python and scikit-learn for machine learning, the Lab Streaming Layer for data acquisition, and an Arduino for hardware control. Pyserial is used to send commands from the Python code to the Arduino to control the movement of the hand. The project aims to promote sustainability by using recycled materials and cutting-edge technology to create a more innovative and sustainable future.",
    sourceCodeUrl: "https://github.com/AlexBerryhill/MINDful-Hand",
    teamMembers: ["Alexander Berryhill"],
    tools: ["ScikitLearn", "Pyserial", "Muse2", "pyLSL", "BlueMuse"]
  },

  {
    title: "Crime",
    category: "data analytics",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/1Wbwk4coIygeOMv9RPreURawQFHFQPOwj/view"
    },
    description:
      "Los Angeles has a reputation for being one of the most crime-ridden cities in the United States. While the city has made significant progress in reducing crime rates in recent years, it still struggles with a variety of criminal activities, including gang violence, drug trafficking, theft, and property crimes. The city's high population density, economic inequality, and the large number of tourists contribute to the challenges law enforcement faces in maintaining public safety. Despite the efforts of law enforcement agencies and community organizations, crime in Los Angeles remains a serious concern for residents and visitors alike.",
    sourceCodeUrl:
      "https://storymaps.arcgis.com/stories/04f0a81a3af84462a6d1dc6ef935e9c3",
    teamMembers: ["Sigmund Seranilla", "Trevor Neri"],
    tools: ["ArcGIS", "Google Colab", "Python", "Pandas"]
  },

  {
    title: "Graph Neural Network for Drug Discovery",
    category: "ai & ml",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/154VbLJV0i6hrDdtcazp9r1vVdMq4d2Wv/view"
    },
    description:
      "Our project uses a Graph Neural Network, or GNN, to analyze the Zinc database and identify potential drug candidates. The Zinc database is a large collection of purchasable compounds that can be used for drug discovery. Traditional methods for identifying potential drug candidates from this database don't work well, though, because the compounds are represented as nodes in a graph with various relationships represented as edges in the graph, such as similarity or chemical properties. By using a GNN and leveraging the graph structure of the database, we aim to overcome these limitations and discover new drugs that could save lives.",
    sourceCodeUrl: "https://github.com/TylerEnglish/GP_Graph_Net",
    teamMembers: [
      "Logan Ray",
      "Tyler English",
      "Randy Pierce",
      "Michael Harris"
    ],
    tools: ["Streamlit", "Pytorch Geometric", "Pickle", "Torch", "Matplotlib"]
  },

  {
    title: "The Matrix IRL",
    category: "game dev",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/1sXz27F1hYYAGuCZp9h4p216AxI_gBQHD/view"
    },
    description:
      "Networking between multiple VR HMDs to support multiple concurrent users in a single Virtual Environment interacting with each other and the environment. To showcase this feature, we built a nice park scene complete with a ping-pong table, football, mini golf course, basketball court, and a maze. Users can enjoy playing these games with up to 10 total users. Our scene also included relaxing background music which was filtered out by our recording software so is not found in the video.",
    sourceCodeUrl: "https://github.com/logan-nielsen/The-Matrix-IRL-HackUSU",
    teamMembers: ["Justin Roylance", "Logan Nielsen"],
    tools: ["Normcore"]
  },

  {
    title: "EasyHeal",
    category: "general",
    video: {
      type: "link",
      url: "https://drive.google.com/file/d/1aH3FRPi5G5gkKxlMccXwh63gwCH6PwcY/view"
    },
    description:
      "Coping with loss can be a daily challenge, and many people struggle to find ways to honor and remember their loved ones. Our web application is designed to provide personalized support and companionship for those experiencing loss. Through our platform, users can celebrate the lives of their loved ones and express their feelings in a way that feels authentic and meaningful to them. Our aim is to offer a space of comfort and healing for individuals who are navigating this difficult journey.",
    sourceCodeUrl: "",
    teamMembers: ["Lesliee Cruz", "Na Rah"],
    tools: ["React", "MUI", "Firebase", "MongoDB"]
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
