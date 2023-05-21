import PageTitle from "components/PageTitle"
import React from "react"
import {SEO} from "components/seo"
import Layout from "components/Layout/Layout"
import Section from "components/Layout/Section"
import {SimpleGrid} from "@mantine/core"
import {featuredProjects, grandChampion} from "./_project-data"
import {ProjectCard} from "./_project-card"

export default function Projects() {
  return (
    <Layout>
      <PageTitle>Featured Projects</PageTitle>

      <Section title="2023 Grand Champion" background="pattern">
        <ProjectCard project={grandChampion} />
      </Section>

      <Section title="Featured 2023 Submissions">
        <SimpleGrid
          cols={2}
          breakpoints={[{maxWidth: 800, cols: 1, spacing: "md"}]}
          spacing="xl"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </SimpleGrid>
      </Section>
    </Layout>
  )
}

export const Head = () => <SEO />
