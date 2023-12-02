import PageTitle from "components/PageTitle"
import React from "react"
import Layout from "../components/Layout/Layout"
import {SEO} from "components/seo"
import ContactForm from "components/ContactForm"
import Section from "components/Layout/Section"

export default function Registration() {
  return (
    <Layout>
      <PageTitle>About the Competition</PageTitle>

      <Section title="Registration & Teams">
        <div />
      </Section>

      <Section title="Rules" background="light">
        <div />
      </Section>

      <Section title="Judging">
        <div />
      </Section>

      <ContactForm />
    </Layout>
  )
}

export const Head = () => <SEO />
