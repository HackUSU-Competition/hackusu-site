import Section from 'components/Layout/Section';
import PageTitle from 'components/PageTitle';
import About from 'components/Sponsor/About';
import GetStarted from 'components/Sponsor/GetStarted';
import BenefitsTable from 'components/Sponsor/SponsorBenefitsTable';
import SponsorGrid from 'components/Sponsor/SponsorGrid';
import { pastSponsors } from 'content/sponsor/sponsorCompaniesContent';
import React from 'react';
import Layout from '../components/Layout/Layout';

export default function Sponsor() {
  return (
    <Layout>
      <PageTitle>SPONSOR HACKUSU</PageTitle>
      <About />
      <BenefitsTable />
      <GetStarted />
      <Section title="Previous Sponsors">
        <SponsorGrid sponsors={pastSponsors} />
      </Section>
    </Layout>
  );
}
