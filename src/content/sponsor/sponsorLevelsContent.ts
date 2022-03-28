export enum LevelName {
  BRONZE = 'Bronze',
  SILVER = 'Silver',
  GOLD = 'Gold',
  PARTNER = 'Partner',
}

export const levelData: Record<LevelName, { amount: number; color: string }> = {
  [LevelName.BRONZE]: { amount: 500, color: '#9D7367' },
  [LevelName.SILVER]: { amount: 1500, color: '#8080a0' },
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
        name: 'Promotional tech-talks or workshops',
        levels: levelsAbove(LevelName.GOLD),
      },
    ],
  },
  {
    groupName: 'Recruiting',
    benefits: [
      {
        name: 'Send recruiters',
        levels: levelsAbove(LevelName.BRONZE),
      },
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
        name: 'Logo on t-shirts',
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
