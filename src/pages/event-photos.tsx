import {graphql} from "gatsby"
import {Container} from "@mantine/core"
import PageTitle from "components/PageTitle"
import React from "react"
import Layout from "../components/Layout/Layout"
import {PhotoGrid} from "components/PhotoGrid"
import {FilesystemQueryResult} from "utils/helpers"
import {SEO} from "components/seo"

interface EventPhotosProps {
  data: {
    photos: {
      edges: FilesystemQueryResult[]
    }
  }
}

export default function EventPhotos({data}: EventPhotosProps) {
  return (
    <Layout>
      <PageTitle>HackUSU 2023 Photos</PageTitle>
      <Container style={{marginTop: "3rem"}} size="xl">
        <PhotoGrid photos={data.photos.edges} />
      </Container>
    </Layout>
  )
}

export const portfolioQuery = graphql`
  {
    photos: allFile {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export const Head = () => <SEO />
