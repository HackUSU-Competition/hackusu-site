import PageTitle from "components/PageTitle"
import React from "react"
import Layout from "../components/Layout/Layout"
import {SEO} from "components/seo"
import ContactForm from "components/ContactForm"
import Section from "components/Layout/Section"
import CategoryList from "components/CategoryList"
import {Anchor, List, Text, ThemeIcon} from "@mantine/core"
import {ArrowRight} from "tabler-icons-react"
import {Link} from "gatsby"
import {paths} from "utils/navigationContent"
import SubSectionTitle from "components/SubsectionTitle"

export default function Registration() {
  return (
    <Layout>
      <PageTitle>About the Competition</PageTitle>

      <Section title="Registration & Teams">
        <Text size="xl">
          Get ready for the hackathon! Whether you prefer to compete solo or
          team up with a group of up to 4 people, the choice is yours. Everyone
          must register individually before the event starts. If you&apos;re
          looking for a team but haven&apos;t found one yet, just mention it on
          the registration form, and we&apos;ll help connect you get connected.
          You don&apos;t need to declare your team members in advance, but when
          it&apos;s time to submit your project for judging, make sure to list
          everyone who contributed.
        </Text>
      </Section>

      <Section title="Categories" background="light" width="sm">
        <CategoryList />
      </Section>

      <Section title="Rules">
        <List
          spacing="md"
          size="lg"
          icon={
            <ThemeIcon size={24} radius="xl">
              <ArrowRight size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            You must be current university, community college, or high school
            student; or have graduated less than one year ago.
          </List.Item>
          <List.Item>Each team may have 1-4 participants.</List.Item>
          <List.Item>Each team may only submit one project.</List.Item>
          <List.Item>
            When presenting your project for judging, you must disclose any code
            not written during the event including any major 3rd party
            packages/libraries that were used.
          </List.Item>
          <List.Item>
            You must be physically present at the event to participate in the
            competition and win prizes.
          </List.Item>
          <List.Item>
            You must follow the USU student code and the HackUSU code of
            conduct. See the{" "}
            <Anchor component={Link} to={paths.safety}>
              safety page
            </Anchor>{" "}
            for more details.
          </List.Item>
        </List>
      </Section>

      <Section title="Judging" background="light">
        <Text size="xl">
          During the judging phase, you will have 10 minutes to present your
          project and seek feedback from judges. Judges will determine beginner
          and advanced winners in each category.
        </Text>

        <SubSectionTitle size="xl" mb="md" mt="xl">
          Judging Criteria:
        </SubSectionTitle>
        <List
          spacing="md"
          size="lg"
          icon={
            <ThemeIcon size={24} radius="xl">
              <ArrowRight size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            <b>TECHNOLOGY:</b> How technically impressive was the project? Was
            the problem difficult? Did the team use a clever technique?
          </List.Item>
          <List.Item>
            <b>DESIGN:</b> How well designed is the user interface / experience?
            Are the graphics impressive?
          </List.Item>
          <List.Item>
            <b>COMPLETION:</b> Does the project work? Did the team achieve what
            they wanted?
          </List.Item>
          <List.Item>
            <b>LEARNING:</b> Did team members try to learn something new? Did
            they attempt something different than they had worked on before?
            This is especially important for the beginner prize.
          </List.Item>
        </List>
      </Section>

      <ContactForm />
    </Layout>
  )
}

export const Head = () => <SEO title="About the Competition" />
