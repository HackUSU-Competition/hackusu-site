import Layout from "components/Layout/Layout"
import PageTitle from "components/PageTitle"
import About from "pages/press/_About"
import React from "react"
import Attending from "./_Attending"
import FeaturedArticles from "./_FeaturedArticles"
import {SEO} from "components/seo"

export default function Press() {
  return (
    <Layout>
      <PageTitle>Press Resources</PageTitle>
      <About />
      <Attending />
      <FeaturedArticles />
    </Layout>
  )
}

export const Head = () => <SEO />
