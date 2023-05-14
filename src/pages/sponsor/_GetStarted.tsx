import {Anchor, Center, Text} from "@mantine/core"
import GradientButton from "components/GradientButton"
import Section from "components/Layout/Section"
import React, {FC} from "react"
import {HACKUSU_EMAIL} from "utils/constants"

const GetStarted: FC = () => {
  return (
    <Section title="Ready to Learn More?" background="pattern" width="sm">
      <Text size="xl" mt={10} weight={500} align="center">
        Let us know which sponsorship package you&apos;re interested in, or work
        with us to put together opportunities that work best for you!
      </Text>
      <Text mt={40} align="center">
        Email us at{" "}
        <Anchor href={`mailto:${HACKUSU_EMAIL}`}>{HACKUSU_EMAIL}</Anchor>
      </Text>
      <Center>
        <GradientButton
          component="a"
          href={`mailto:${HACKUSU_EMAIL}`}
          size="xl"
          mt={40}
        >
          Let&apos;s Get Started!
        </GradientButton>
      </Center>
    </Section>
  )
}

export default GetStarted
