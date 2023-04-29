import {Container} from "@mantine/core"
import Layout from "components/Layout/Layout"
import PageTitle from "components/PageTitle"
import About from "components/Press/About"
import Attending from "components/Press/Attending"
import FeaturedArticles from "components/Press/FeaturedArticles"
import React from "react"

export default function Press() {
  return (
    <Layout>
      <PageTitle>PRESS RESOURCES</PageTitle>
      <About />
      <Attending />
      <FeaturedArticles />
    </Layout>
  )
}
