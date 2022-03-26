import { Award, Bolt, Icon, Pizza, Shirt } from 'tabler-icons-react';

export interface CategorySpend {
  name: string;
  amount: number;
  color: string;
  icon: Icon;
}

export const categorySpending: CategorySpend[] = [
  {
    name: 'Food',
    amount: 11359,
    color: 'red',
    icon: Pizza,
  },
  {
    name: 'T-shirts & Swag',
    amount: 3640,
    color: 'indigo',
    icon: Shirt,
  },
  {
    name: 'Prizes',
    amount: 3826,
    color: 'yellow',
    icon: Award,
  },
  {
    name: 'Misc',
    amount: 798,
    color: 'green',
    icon: Bolt,
  },
];

export interface Sponsor {
  name: string;
  logo?: string;
  url?: string;
}

export const currentSponsors: Sponsor[] = [
  {
    name: 'Jon M. Huntsman School of Business',
    logo: require('images/sponsors/huntsman-dais.png').default,
  },
  {
    name: 'Lightning Kite',
    logo: require('images/sponsors/lightning-kite.svg').default,
  },
  {
    name: 'Focused Support',
    logo: require('images/sponsors/focused-support.png').default,
  },
  {
    name: 'USU College of Science',
    logo: require('images/sponsors/college-of-science.png').default,
  },
  {
    name: 'Space Dynamics Lab',
    logo: require('images/sponsors/sdl.png').default,
  },
  {
    name: 'XMission',
    logo: require('images/sponsors/xmission.png').default,
  },
  {
    name: 'VLCM',
    logo: require('images/sponsors/vlcm.png').default,
  },
];

export const pastSponsors: Sponsor[] = [
  {
    name: 'Major League Hacking',
  },
  {
    name: 'Jon M. Huntsman School of Business',
  },
  {
    name: 'USU College of Science',
  },
  {
    name: 'USU College of Engineering',
  },
  {
    name: 'Lightning Kite',
  },
  {
    name: 'Focused Support',
  },
  {
    name: 'Space Dynamics Lab',
  },
  {
    name: 'XMission',
  },
  {
    name: 'VLCM',
  },
  {
    name: 'RR Donnelley',
  },
  {
    name: 'Software Technology Group',
  },
  {
    name: 'Utah Open Data',
  },
  {
    name: 'Conservice',
  },
  {
    name: 'RStudio',
  },
  {
    name: 'USURF',
  },
  {
    name: 'IMFlash',
  },
  {
    name: 'Venmo',
  },
  {
    name: 'RethinkDB',
  },
  {
    name: 'EForce',
  },
  {
    name: 'Domo',
  },
  {
    name: 'AnyPresence',
  },
  {
    name: 'Purch',
  },
  {
    name: 'Centeva',
  },
  {
    name: 'Mozilla Foundation',
  },
  {
    name: 'Atomic Jolt',
  },
  {
    name: 'Digital Ocean',
  },
  {
    name: 'Girl Develop It',
  },
  {
    name: 'Twilio',
  },
  {
    name: 'Navitaire',
  },
  {
    name: 'Raytheon',
  },
  {
    name: 'Clarifai',
  },
  {
    name: 'STG Consulting',
  },
  {
    name: 'Qualtrics',
  },
  {
    name: 'JetBrains',
  },
  {
    name: 'CloudFlare',
  },
];
