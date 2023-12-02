import {randCompanyName, randFullName, randJobTitle} from "@ngneat/falso"

export interface Presenter {
  name: string
  profileImage: string
  title?: string
  subTitle?: string
  // bio?: string
}

export const presenters: Presenter[] = Array.from({length: 12}, (_, i) => {
  const name = randFullName()

  return {
    name,
    profileImage: `https://i.pravatar.cc/300?u=${name}`,
    subTitle: `${randJobTitle()} – ${randCompanyName()}`,
    // profileImage: require("images/presenters/troy-despain.png").default,
    organization: randCompanyName()
  }
})
