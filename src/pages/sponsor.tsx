import { Container } from '@mantine/core';
import PageTitle from 'components/PageTitle';
import BudgetChart from 'components/Sponsor/BudgetChart';
import BenefitsTable from 'components/Sponsor/SponsorBenefitsTable';
import SponsorGrid from 'components/Sponsor/SponsorGrid';
import { pastSponsors, sponsors2022 } from 'content/sponsor/sponsorCompaniesContent';
import React from 'react';
import Layout from '../components/Layout/Layout';

export default function Sponsor() {
  return (
    <Layout>
      <PageTitle>SPONSOR HACKUSU</PageTitle>
      <Container>
        <BenefitsTable />
        <BudgetChart />
        {/* <SponsorGrid title="2022 SPONSORS" sponsors={sponsors2022} /> */}
        <SponsorGrid title="PREVIOUS SPONSORS" sponsors={pastSponsors} />
      </Container>
    </Layout>
  );
}
