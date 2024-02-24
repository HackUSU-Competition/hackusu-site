import {ImageDataLike} from "gatsby-plugin-image"

export interface FilesystemQueryResult {
  node: {
    id: string
    name: string
    childImageSharp: {
      gatsbyImageData: ImageDataLike
    }
  }
}

export function getInitials(name: string) {
  const names = name.split(" ")
  const initials = names.map((n) => n[0]).join("")
  return initials
}
