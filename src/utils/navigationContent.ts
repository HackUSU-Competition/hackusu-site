export const DISCORD_INVITE = "https://discord.gg/DpjrzqBwq5"

export enum paths {
  home = "/",
  location = "/location",
  schedule = "/schedule",
  photos = "/event-photos",
  sponsor = "/sponsor",
  volunteer = "/volunteer",
  press = "/press",
  // pressPhotos = '/press/photos',
  safety = "/safety"
}

export const headerLinks: NavLink[] = [
  {label: "Home", href: paths.home},
  {label: "2023 Photos", href: paths.photos},
  // { label: 'Location', href: paths.location },
  {label: "Schedule", href: paths.schedule},
  {label: "Volunteer", href: paths.volunteer},
  {label: "Sponsor", href: paths.sponsor}
]

export interface NavLink {
  href: string
  label: string
  external?: boolean
}

export interface FooterLinkGroup {
  title: string
  links: NavLink[]
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "About",
    links: [
      {
        label: "Home",
        href: paths.home
      },
      // {
      //   label: 'About HackUSU',
      //   href: paths.about,
      // },
      // {
      //   label: 'Competition',
      //   href: paths.competition,
      // },
      // {
      //   label: "Location",
      //   href: paths.location
      // },
      {
        label: "2023 Photos",
        href: paths.photos
      },
      {
        label: "Schedule",
        href: paths.schedule
      },
      {
        label: "Code of Conduct & Risk Management",
        href: paths.safety
      }
    ]
  },
  {
    title: "Join Us",
    links: [
      {
        label: "Sponsor",
        href: paths.sponsor
      },
      {
        label: "Volunteer",
        href: paths.volunteer
      },
      {
        label: "Press Resources",
        href: paths.press
      }
    ]
  },
  {
    title: "Community",
    links: [
      {
        label: "Join Discord",
        href: DISCORD_INVITE,
        external: true
      },
      {
        label: "GitHub",
        href: "https://github.com/HackUSU-Competition",
        external: true
      }
    ]
  }
]
