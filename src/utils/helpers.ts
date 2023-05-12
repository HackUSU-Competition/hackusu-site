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
