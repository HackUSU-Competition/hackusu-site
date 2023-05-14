import Section from "components/Layout/Section"
import PageTitle from "components/PageTitle"
import {pastSponsors} from "content/sponsor/sponsorCompaniesContent"
import React from "react"
import Layout from "../../components/Layout/Layout"
import About from "./_About"
import GetStarted from "./_GetStarted"
import BenefitsTable from "./_SponsorBenefitsTable"
import SponsorGrid from "../../components/SponsorGrid"

export default function Sponsor() {
  return (
    <Layout>
      <PageTitle>Sponsor HackUSU 2024</PageTitle>
      <About />
      <BenefitsTable />
      <GetStarted />
      <Section title="Previous Sponsors">
        <SponsorGrid sponsors={pastSponsors} />
      </Section>
    </Layout>
  )
}
