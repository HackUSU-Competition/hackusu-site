import {ImageDataLike} from "gatsby-plugin-image"

export interface FilesystemQueryResult {
  node: {
    id: string
    childImageSharp: {
      gatsbyImageData: ImageDataLike
    }
  }
}
