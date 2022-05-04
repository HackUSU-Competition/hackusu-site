import { Anchor, Button, Center, Text, List } from '@mantine/core';
import Section from 'components/Layout/Section';
import PageTitle from 'components/PageTitle';
import SubSectionTitle from 'components/SubsectionTitle';
import { DISCORD_INVITE } from 'content/navigationContent';
import React from 'react';
import { ArrowRight, Download } from 'tabler-icons-react';
import { HACKUSU_EMAIL, USU_POLICE_PHONE } from 'utils/constants';
import Layout from '../components/Layout/Layout';

export default function About() {
  return (
    <Layout>
      <PageTitle>Safety</PageTitle>
      <Section title="Code of Conduct">
        <SubSectionTitle>TL;DR.</SubSectionTitle>
        <Text component="p">
          Be respectful. Harassment and abuse are never tolerated. If you are in a situation that
          makes you uncomfortable at HackUSU, if the event itself is creating an unsafe or
          inappropriate environment, or if interacting with a HackUSU representative or event
          organizer makes you uncomfortable, please report it using the procedures below.
        </Text>

        <SubSectionTitle mt={30}>Harassment</SubSectionTitle>
        <Text component="p">
          We believe that every single person has the right to hack in a safe and welcoming
          environment.
        </Text>

        <Text component="p">
          Harassment includes but is not limited to offensive verbal or written comments related to
          gender, age, sexual orientation, disability, physical appearance, body size, race,
          religion, social class, economic status, veteran status. Additional cases of harassment
          include but not limited to sharing sexual images, deliberate intimidation, stalking,
          following, brigading, doxxing, harassing photography or recording, sustained disruption of
          talks or other events, inappropriate physical contact, and unwelcome sexual attention. If
          what you're doing is making someone feel uncomfortable, that counts as harassment and is
          enough reason to stop doing it.
        </Text>

        <Text component="p">
          Participants asked to stop any harassing behavior are expected to comply immediately.
        </Text>

        <Text component="p">
          Sponsors, judges, mentors, volunteers, organizers, and anyone else participating in the
          event are also subject to the anti-harassment policy. In particular, attendees should not
          use sexualised images, activities, or other material both in their hacks and during the
          event. Booth staff (including volunteers) should not use sexualised
          clothing/uniforms/costumes, or otherwise create a sexualised environment.
        </Text>

        <Text component="p">
          If a participant engages in harassing behavior, HackUSU organizers may take any action
          they deem appropriate, including warning the offender, expulsion from the event, or
          contacting the USU Police Department.
        </Text>

        <SubSectionTitle mt={30}>Reporting</SubSectionTitle>

        <Text component="p">
          If you are being harassed, notice that someone else is being harassed, or have any other
          concerns, please talk to a HackUSU organizer or send them a direct message over Discord.
        </Text>

        <Text component="p">
          <b>HackUSU Email: </b> <Anchor href={`mailto:${HACKUSU_EMAIL}`}>{HACKUSU_EMAIL}</Anchor>
          <br />
          <b>HackUSU Discord: </b>{' '}
          <Anchor href={`mailto:${DISCORD_INVITE}`}>{DISCORD_INVITE}</Anchor>
          <br />
          <b>USU Police: </b> <Anchor href={`tel:${USU_POLICE_PHONE}`}>{USU_POLICE_PHONE}</Anchor>
        </Text>
      </Section>

      <Section title="Risk Management Plan" background="light">
        <Center mb={50}>
          <Button
            component="a"
            href="/risk-management-plan.pdf"
            download
            mt={20}
            rightIcon={<Download size={18} />}
          >
            Download Risk Management Plan
          </Button>
        </Center>

        <Text component="p">
          HackUSU organizers have worked with USU Risk Management to develop a plan to ensure the
          safety of all attendees at HackUSU. This includes policies for:
        </Text>

        <List icon={<ArrowRight />} mt={10}>
          <List.Item>Health</List.Item>
          <List.Item>Supervision</List.Item>
          <List.Item>Training</List.Item>
          <List.Item>Interactions between staff and attendees</List.Item>
          <List.Item>Working with minors</List.Item>
        </List>
      </Section>
    </Layout>
  );
}
