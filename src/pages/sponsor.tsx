import { Container } from '@mantine/core';
import PageTitle from 'components/PageTitle';
import BudgetChart from 'components/Sponsor/BudgetChart';
import SponsorGrid from 'components/Sponsor/SponsorGrid';
import { sponsors2022 } from 'content/sponsor/sponsorCompaniesContent';
import React from 'react';
import Layout from '../components/Layout/Layout';

export default function Sponsor() {
  return (
    <Layout>
      <Container>
        <PageTitle>SPONSOR HACKUSU</PageTitle>
        <BudgetChart />
        <SponsorGrid title="2022 SPONSORS" sponsors={sponsors2022} />
      </Container>
    </Layout>
  );
}
