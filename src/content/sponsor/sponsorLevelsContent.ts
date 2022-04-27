export enum LevelName {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PARTNER = 'Partner',
}

export const levelData: Record<LevelName, { amount: number; color: string }> = {
  // [LevelName.BRONZE]: { amount: 500, color: 'linear-gradient(280deg, rgba(141,99,87,1) 0%, rgba(162,119,107,1) 100%)' },
  // [LevelName.SILVER]: { amount: 1500, color: 'linear-gradient(280deg, rgba(144,144,160,1) 0%, rgba(163,163,179,1) 100%)' },
  // [LevelName.GOLD]: { amount: 5000, color: 'linear-gradient(280deg, rgba(240,173,78,1) 0%, rgba(255,220,145,1) 100%)' },
  // [LevelName.PARTNER]: { amount: 8000, color: 'linear-gradient(280deg, rgba(71,129,228,1) 0%, rgba(111,175,231,1) 100%)' },
  [LevelName.BRONZE]: { amount: 500, color: '#9D7367' },
  [LevelName.SILVER]: { amount: 1500, color: '#9090A0' },
  [LevelName.GOLD]: { amount: 5000, color: '#f0ad4e' },
  [LevelName.PARTNER]: { amount: 8000, color: '#4781E4' },
};

// Returns a list of the levels above the given level, including the level
const levelsAbove = (minLevel: LevelName): LevelName[] => {
  const minAmount = levelData[minLevel].amount;
  return Object.keys(levelData).filter(
    (level) => levelData[level].amount >= minAmount
  ) as LevelName[];
};

export interface Benefit {
  name: string;
  levels: LevelName[];
  details?: Partial<Record<LevelName, string>>;
}

export interface BenefitGroup {
  groupName: string;
  benefits: Benefit[];
}

export const sponsorLevelTableData: BenefitGroup[] = [
  {
    groupName: 'General',
    benefits: [
      {
        name: 'Send engineers and mentors',
        levels: levelsAbove(LevelName.BRONZE),
      },
      {
        name: 'Help with judging',
        levels: levelsAbove(LevelName.BRONZE),
      },
      {
        name: 'Host workshops',
        levels: levelsAbove(LevelName.BRONZE),
      },
      {
        name: 'Promotional tech-talks and workshops',
        levels: levelsAbove(LevelName.GOLD),
      },
    ],
  },
  {
    groupName: 'Recruiting',
    benefits: [
      {
        name: 'Recruiting table',
        levels: levelsAbove(LevelName.BRONZE),
        details: {
          [LevelName.BRONZE]: 'Sat. Afternoon Only',
        },
      },
      {
        name: 'Interview room',
        levels: levelsAbove(LevelName.PARTNER),
      },
    ],
  },
  {
    groupName: 'Branding',
    benefits: [
      {
        name: 'Logo on t-shirts and website',
        levels: levelsAbove(LevelName.SILVER),
        details: {
          [LevelName.SILVER]: 'Small',
          [LevelName.GOLD]: 'Medium',
          [LevelName.PARTNER]: 'Large',
        },
      },
      {
        name: 'Your swag included in swag bags',
        levels: levelsAbove(LevelName.GOLD),
      },
      {
        name: 'Sponsored competition category',
        levels: levelsAbove(LevelName.GOLD),
      },
      {
        name: 'Opening keynote presentation',
        levels: levelsAbove(LevelName.PARTNER),
      },
      {
        name: 'Award ceremony presentation',
        levels: levelsAbove(LevelName.PARTNER),
      },
      {
        name: 'Prominent company branding at check-in, keynote, and awards ceremony',
        levels: levelsAbove(LevelName.PARTNER),
      },
    ],
  },
];
