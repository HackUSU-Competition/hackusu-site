import { Image, SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import { Sponsor } from 'content/sponsor/sponsorCompaniesContent';
import React, { FC } from 'react';

export interface SponsorGridProps {
  title: string;
  sponsors: Sponsor[];
}

const SponsorGrid: FC<SponsorGridProps> = ({ title, sponsors }) => {
  const theme = useMantineTheme();
  return (
    <>
      <Title order={2} align="center">
        {title}
      </Title>
      <SimpleGrid
        cols={4}
        spacing="lg"
        mt={30}
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        {' '}
        {sponsors
          .filter((sponsor) => sponsor.logo)
          .map((sponsor) => (
            <Image
              fit="contain"
              key={sponsor.name}
              src={sponsor.logo}
              width={150}
              height={70}
              mx="auto"
              withPlaceholder
            />
          ))}
      </SimpleGrid>
    </>
  );
};

export default SponsorGrid;
