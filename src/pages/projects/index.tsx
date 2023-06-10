import PageTitle from "components/PageTitle"
import React from "react"
import {SEO} from "components/seo"
import Layout from "components/Layout/Layout"
import Section from "components/Layout/Section"
import {Alert, SimpleGrid} from "@mantine/core"
import {featuredProjects, grandChampion} from "./_project-data"
import {ProjectCard} from "./_project-card"
import {HACKUSU_EMAIL} from "utils/constants"

export default function Projects() {
  return (
    <Layout>
      <PageTitle>Featured Projects</PageTitle>

      <Section title="2023 Grand Champion" background="pattern">
        <ProjectCard project={grandChampion} />
      </Section>

      <Section
        title="Featured 2023 Submissions"
        subtitle="These are just some of the great projects teams have created at HackUSU!"
        width="xl"
      >
        <Alert
          title="Want your project featured?"
          mb="xl"
          variant="filled"
          maw={700}
          mx="auto"
          color="green"
        >
          Email {HACKUSU_EMAIL} with your name and project category
        </Alert>

        <SimpleGrid
          cols={3}
          breakpoints={[
            {maxWidth: 1000, cols: 2, spacing: "md"},
            {maxWidth: 800, cols: 1, spacing: "md"}
          ]}
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
