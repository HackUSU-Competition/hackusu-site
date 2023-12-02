import PageTitle from "components/PageTitle"
import React from "react"
import Layout from "components/Layout/Layout"
import {SEO} from "components/seo"
import Section from "components/Layout/Section"
import {presenters} from "./_presenter-data"
import {Image, SimpleGrid, Stack, Text} from "@mantine/core"
import ContactForm from "components/ContactForm"

export default function Registration() {
  return (
    <Layout>
      <PageTitle>Presenters</PageTitle>

      <Section>
        <SimpleGrid
          breakpoints={[
            {minWidth: 400, cols: 2},
            {minWidth: 600, cols: 3}
          ]}
          verticalSpacing="xl"
        >
          {presenters.map((presenter) => (
            <Stack key={presenter.name} spacing={0}>
              <Image
                src={presenter.profileImage}
                alt={presenter.name}
                radius="lg"
                sx={{aspectRatio: "1"}}
              />
              <Text fz="lg" fw="bold" lh={1} mt="sm">
                {presenter.name}
              </Text>
              <Text fz="sm" c="dark.3" lh={1.2} mt={4}>
                {presenter.subTitle}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Section>

      <ContactForm />
    </Layout>
  )
}

export const Head = () => <SEO />
