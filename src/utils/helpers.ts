import {FluidObject} from "gatsby-image"

export interface FilesystemQueryResult {
  node: {
    id: string
    childImageSharp: {
      fluid: FluidObject
    }
  }
}
