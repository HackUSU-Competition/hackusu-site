export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export const stats: Stat[] = [
  {
    label: 'Students',
    value: '279',
		description: 'From high school seniors, all the way to Ph.D. students!',
  },
  {
    label: 'Schools',
    value: '12',
    description:
      'Students attended from 12 different universities, community colleges, and high schools from across Utah and Idaho',
  },
  {
    label: 'Projects',
    value: '80',
		description: 'Competition categories included game development, security, data analytics, and more!',
  },
];
