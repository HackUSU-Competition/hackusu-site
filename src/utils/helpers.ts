import {ImageDataLike} from "gatsby-plugin-image"

export interface FilesystemQueryResult {
  node: {
    id: string
    base: string
    childImageSharp: {
      gatsbyImageData: ImageDataLike
    }
  }
}
