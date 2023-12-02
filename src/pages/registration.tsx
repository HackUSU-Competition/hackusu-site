import {Anchor, Text} from "@mantine/core"
import GradientButton from "components/GradientButton"
import Section from "components/Layout/Section"
import PageTitle from "components/PageTitle"
import SubSectionTitle from "components/SubsectionTitle"
import React from "react"
import {ArrowRight} from "tabler-icons-react"
import {HACKUSU_EMAIL, REGISTRATION_OPEN} from "utils/constants"
import Layout from "../components/Layout/Layout"
import {SEO} from "components/seo"

export default function Registration() {
  return (
    <Layout>
      <PageTitle>Register for Free!</PageTitle>

      {REGISTRATION_OPEN ? (
        <Section width="sm" background="pattern" mt={60}>
          <SubSectionTitle>Student registration is now open!</SubSectionTitle>

          <Text mt={10}>
            If you are representing a company, would like to volunteer, or are a
            member of the press, please email us at{" "}
            <Anchor href={`mailto:${HACKUSU_EMAIL}`} target="_blank">
              {HACKUSU_EMAIL}
            </Anchor>
            .
          </Text>

          <div style={{textAlign: "center", marginTop: "3rem"}}>
            <GradientButton
              component="a"
              rightIcon={<ArrowRight />}
              size="xl"
              href="https://hackusu2023.eventbrite.com/?aff=hackususite"
              target="_blank"
            >
              Register on Eventbrite
            </GradientButton>
          </div>
        </Section>
      ) : (
        <Section width="sm" background="pattern" mt={60}>
          <SubSectionTitle>Registration not yet open</SubSectionTitle>

          <Text mt={10}>
            Registration for HackUSU 2024 will open in January. Check back later
            for information!
          </Text>
        </Section>
      )}
    </Layout>
  )
}

export const Head = () => <SEO />
