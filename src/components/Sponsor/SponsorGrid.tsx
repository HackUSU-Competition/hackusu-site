import { Group, Image, Title, useMantineTheme } from '@mantine/core';
import { Sponsor } from 'content/sponsorContent';
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
      <Group position="center" spacing={theme.spacing.xl * 2} mt={50}>
        {sponsors
          .filter((sponsor) => sponsor.logo)
          .map((sponsor) => (
            <Image key={sponsor.name} src={sponsor.logo} width={240} />
          ))}
      </Group>
    </>
  );
};

export default SponsorGrid;
