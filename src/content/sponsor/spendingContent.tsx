import {Award, Bolt, Icon, Pizza, Shirt} from "tabler-icons-react"

export interface CategorySpend {
  name: string
  amount: number
  color: string
  icon: Icon
}

export const categorySpending: CategorySpend[] = [
  {
    name: "Food",
    amount: 11359,
    color: "red",
    icon: Pizza
  },
  {
    name: "T-shirts & Swag",
    amount: 3640,
    color: "indigo",
    icon: Shirt
  },
  {
    name: "Prizes",
    amount: 3826,
    color: "yellow",
    icon: Award
  },
  {
    name: "Misc",
    amount: 798,
    color: "green",
    icon: Bolt
  }
]
