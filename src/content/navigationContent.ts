import { FooterLinkGroup } from 'components/Layout/Footer';
import { NavLink } from 'components/Layout/Header';

export const DISCORD_INVITE = 'https://discord.gg/DpjrzqBwq5';

export enum paths {
  home = '/',
  about = '/about',
  competition = '/competition',
  location = '/location',
  schedule = '/schedule',
  sponsor = '/sponsor',
  volunteer = '/volunteer',
  press = '/press',
  pressPhotos = '/press/photos',
}

export const headerLinks: NavLink[] = [
  { label: 'About', href: paths.about },
  { label: 'Competition', href: paths.competition },
  { label: 'Location', href: paths.location },
  { label: 'Schedule', href: paths.schedule },
	{ label: 'Volunteer', href: paths.volunteer },
  { label: 'Sponsor', href: paths.sponsor },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'About',
    links: [
      {
        label: 'About HackUSU',
        href: paths.about,
      },
      {
        label: 'Competition',
        href: paths.competition,
      },
      {
        label: 'Location',
        href: paths.location,
      },
      {
        label: 'Schedule',
        href: paths.schedule,
      },
    ],
  },
  {
    title: 'Join Us',
    links: [
      {
        label: 'Sponsor',
        href: paths.sponsor,
      },
      {
        label: 'Volunteer',
        href: paths.volunteer,
      },
      {
        label: 'Press Resources',
        href: paths.press,
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'Join Discord',
        href: DISCORD_INVITE,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/HackUSU-Competition',
      },
    ],
  },
];
