import { Container } from '@mantine/core';
import PageTitle from 'components/PageTitle';
import SectionHead from 'components/SectionHead';
import About from 'components/Sponsor/About';
import BudgetChart from 'components/Sponsor/BudgetChart';
import BenefitsTable from 'components/Sponsor/SponsorBenefitsTable';
import SponsorGrid from 'components/Sponsor/SponsorGrid';
import { pastSponsors } from 'content/sponsor/sponsorCompaniesContent';
import React from 'react';
import Layout from '../components/Layout/Layout';

export default function Sponsor() {
  return (
    <Layout>
      <PageTitle>SPONSOR HACKUSU</PageTitle>
      <Container>
        <About />
        <BenefitsTable />
        <SectionHead title="Previous Sponsors" />
        <SponsorGrid sponsors={pastSponsors} />
      </Container>
    </Layout>
  );
}
