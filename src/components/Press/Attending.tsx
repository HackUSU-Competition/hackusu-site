import { Anchor, createStyles, Text, Title } from '@mantine/core';
import SectionHead from 'components/SectionHead';
import React, { FC } from 'react';
import { HACKUSU_EMAIL } from 'utils/constants';

const useStyles = createStyles((theme) => ({}));

const Attending: FC = () => {
  const { classes } = useStyles();

  return (
    <>
      <SectionHead title="Attending HackUSU" />

      <Title order={3} mt={30}>
        Registration
      </Title>
      <Text mt={10}>
        Email us at{' '}
        <Anchor href={`mailto:${HACKUSU_EMAIL}`} target="_blank">
          {HACKUSU_EMAIL}
        </Anchor>{' '}
        if you plan on attending HackUSU so we can add you to the guest list.
      </Text>

      <Title order={3} mt={30}>
        Parking and Check-in
      </Title>
      <Text mt={10}>
        Members of the media should contact us at{' '}
        <Anchor href={`mailto:${HACKUSU_EMAIL}`} target="_blank">
          {HACKUSU_EMAIL}
        </Anchor>{' '}
        to arrange parking on campus. We will coordinate with the USU Parking Office to provide any
        necissary permits for free.
      </Text>
      <Text mt={10}>
        After arriving, please check-in at the north entrance of Huntsman Hall to pick up your
        badge. You are welcome to attend all portions of the event and join us for any of the meals.
      </Text>
    </>
  );
};

export default Attending;