import {graphql} from "gatsby"
import {Container} from "@mantine/core"
import PageTitle from "components/PageTitle"
import React from "react"
import Layout from "../components/Layout/Layout"
import {PhotoGrid} from "components/PhotoGrid"
import {FilesystemQueryResult} from "utils/helpers"

interface EventPhotosProps {
  data: {
    full: {
      edges: FilesystemQueryResult[]
    }
    thumbnails: {
      edges: FilesystemQueryResult[]
    }
  }
}

export default function EventPhotos({data}: EventPhotosProps) {
  return (
    <Layout>
      <PageTitle>HackUSU 2023 Photos</PageTitle>
      <Container style={{marginTop: "3rem"}} size="xl">
        <PhotoGrid full={data.full.edges} thumbnails={data.thumbnails.edges} />
      </Container>
    </Layout>
  )
}

export const portfolioQuery = graphql`
  {
    thumbnails: allFile {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
      }
    }
    full: allFile {
      edges {
        node {
          id
          base
          childImageSharp {
            gatsbyImageData(width: 2000)
          }
        }
      }
    }
  }
`
