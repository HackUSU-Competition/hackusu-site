export enum LevelName {
  AFFILIATE = "Affiliate",
  PARTNER = "Partner",
  TRACK = "Track",
  TITLE = "Title"
}

export const levelData: Record<
  LevelName,
  {amount?: number; color: string; limit?: number}
> = {
  // [LevelName.BRONZE]: { amount: 500, color: 'linear-gradient(280deg, rgba(141,99,87,1) 0%, rgba(162,119,107,1) 100%)' },
  // [LevelName.SILVER]: { amount: 1500, color: 'linear-gradient(280deg, rgba(144,144,160,1) 0%, rgba(163,163,179,1) 100%)' },
  // [LevelName.GOLD]: { amount: 5000, color: 'linear-gradient(280deg, rgba(240,173,78,1) 0%, rgba(255,220,145,1) 100%)' },
  // [LevelName.PARTNER]: { amount: 8000, color: 'linear-gradient(280deg, rgba(71,129,228,1) 0%, rgba(111,175,231,1) 100%)' },
  [LevelName.AFFILIATE]: {amount: 500, color: "#9D7367"},
  [LevelName.PARTNER]: {amount: 1000, color: "#9090A0"},
  [LevelName.TRACK]: {amount: 5000, color: "#f0ad4e", limit: 4},
  [LevelName.TITLE]: {amount: undefined, color: "#4781E4", limit: 1}
}

// Returns a list of the levels above the given level, including the level
const levelsAbove = (minLevel: LevelName): LevelName[] => {
  const minAmount = levelData[minLevel].amount
  return Object.keys(levelData).filter((level) => {
    const levelAmount = levelData[level as LevelName].amount
    if (minAmount === undefined) return levelAmount === undefined
    return levelAmount === undefined || levelAmount >= minAmount
  }) as LevelName[]
}

export interface Benefit {
  name: string
  levels: LevelName[]
  levelsDetails?: Partial<Record<LevelName, string>>
  tooltip?: string
}

export interface BenefitGroup {
  groupName: string
  benefits: Benefit[]
}

export const sponsorLevelTableData: BenefitGroup[] = [
  {
    groupName: "General",
    benefits: [
      {
        name: "Send engineers and mentors",
        levels: levelsAbove(LevelName.PARTNER)
      },
      {
        name: "Host workshops",
        levels: levelsAbove(LevelName.PARTNER),
        tooltip:
          "Workshops may not promote your product or service, but instead focus on generally applicable skills"
      },
      {
        name: "Company info-session",
        levels: levelsAbove(LevelName.TRACK),
        tooltip:
          "Info-sessions allow you to promote your company, products, or services."
      }
    ]
  },
  {
    groupName: "Recruiting",
    benefits: [
      {
        name: "Resume Access",
        levels: levelsAbove(LevelName.AFFILIATE)
      },
      {
        name: "Recruiting table",
        levels: levelsAbove(LevelName.AFFILIATE),
        levelsDetails: {
          [LevelName.AFFILIATE]: "Recruiting Event Only"
        }
      }
      // {
      //   name: 'Interview room',
      //   levels: levelsAbove(LevelName.TITLE),
      // },
    ]
  },
  {
    groupName: "Branding",
    benefits: [
      {
        name: "Logo on website",
        levels: levelsAbove(LevelName.AFFILIATE)
      },
      {
        name: "Logo on event t-shirts",
        levels: levelsAbove(LevelName.PARTNER),
        levelsDetails: {
          [LevelName.PARTNER]: "Small",
          [LevelName.TRACK]: "Medium",
          [LevelName.TITLE]: "Large"
        },
        tooltip:
          "Your sponsorship must be confirmed at least 6 weeks prior to the event to include your logo on t-shirts"
      },
      {
        name: "Your swag included in swag bags",
        levels: levelsAbove(LevelName.TRACK)
      },
      {
        name: "Sponsored competition category",
        levels: levelsAbove(LevelName.TRACK),
        tooltip:
          "Track sponsors may each name and sponsor one competition category, including providing judges"
      },
      {
        name: "Keynote presentation",
        levels: levelsAbove(LevelName.TITLE)
      },
      {
        name: "Prominent company branding at check-in, keynote, and awards ceremony",
        levels: levelsAbove(LevelName.TITLE),
        tooltip:
          "Title sponsor may co-brand the event. Ex. HackUSU presented by YOUR COMPANY"
      }
    ]
  }
]
