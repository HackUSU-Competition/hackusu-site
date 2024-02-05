import {
  Anchor,
  Box,
  List,
  Stack,
  Text,
  ThemeIcon,
  createStyles
} from "@mantine/core"
import GradientButton from "components/GradientButton"
import Section from "components/Layout/Section"
import PageTitle from "components/PageTitle"
import React from "react"
import {ArrowRight, Check} from "tabler-icons-react"
import {
  HACKUSU_EMAIL,
  REGISTRATION_LINK,
  REGISTRATION_OPEN
} from "utils/constants"
import Layout from "../components/Layout/Layout"
import {SEO} from "components/seo"
import SectionHead from "components/SectionHead"
import ContactForm from "components/ContactForm"

const useStyles = createStyles((theme) => ({
  banner: {
    backgroundColor: theme.colors.orange[2],
    color: theme.colors.orange[9],
    borderBottom: `1px solid ${theme.colors.orange[4]}`,
    textAlign: "center",
    padding: theme.spacing.xs
  }
}))

export default function Registration() {
  const {classes} = useStyles()

  return (
    <Layout>
      <PageTitle>Register for HackUSU 2024</PageTitle>

      <Box className={classes.banner}>
        {REGISTRATION_OPEN ? (
          <>
            <Text size="lg" weight="bold">
              General registration is now open!
            </Text>
            Register before prices increase on Feb 26<sup>th</sup>
          </>
        ) : (
          <>
            <Text size="lg" weight="bold">
              Limited early registration opens January 8<sup>th</sup>
            </Text>
            Early registration will be available to business and engineering
            students attending USU
          </>
        )}
      </Box>

      <Section width="sm">
        <SectionHead title="Student Registration">
          {REGISTRATION_OPEN ? (
            <>$10 for general registration</>
          ) : (
            <>
              $5 • Opens January 8<sup>th</sup>
            </>
          )}
        </SectionHead>

        {REGISTRATION_OPEN && (
          <Text size="lg">
            General registration is available to all college students and high
            school seniors from any school (including boot camps, community
            colleges, and technical schools). Registration prices will increase
            on February 26<sup>th</sup>.
          </Text>
        )}

        <Stack align="center" maw={425} m="auto" spacing={8} mt={48}>
          {/* <GradientButton
            component="a"
            rightIcon={<ArrowRight />}
            size="xl"
            href={REGISTRATION_LINK}
            target="_blank"
            fullWidth
            disabled={!REGISTRATION_OPEN}
          >
            Business Students
          </GradientButton>
          <Text size="sm" color="dimmed" align="center">
            {REGISTRATION_OPEN ? (
              <>
                Limited to students from USU&apos;s{" "}
                <span style={{whiteSpace: "nowrap"}}>
                  Huntsman School of Business
                </span>
              </>
            ) : (
              <>
                Opens January 8<sup>th</sup>
              </>
            )}
          </Text>

          <GradientButton
            component="a"
            rightIcon={<ArrowRight />}
            size="xl"
            href={REGISTRATION_LINK}
            target="_blank"
            fullWidth
            mt="xl"
            disabled={!REGISTRATION_OPEN}
          >
            Engineering Students
          </GradientButton>
          <Text size="sm" color="dimmed" align="center">
            {REGISTRATION_OPEN ? (
              <>
                Limited to students from USU&apos;s{" "}
                <span style={{whiteSpace: "nowrap"}}>
                  College of Engineering
                </span>
              </>
            ) : (
              <>
                Opens January 8<sup>th</sup>
              </>
            )}
          </Text> */}

          <GradientButton
            component="a"
            rightIcon={<ArrowRight />}
            size="xl"
            href={REGISTRATION_LINK}
            target="_blank"
            fullWidth
            mt="xl"
            // disabled
          >
            General Registration
          </GradientButton>
          <Text size="sm" color="dimmed" align="center">
            Ends February 26<sup>th</sup>
          </Text>

          <GradientButton
            component="a"
            rightIcon={<ArrowRight />}
            size="xl"
            href={REGISTRATION_LINK}
            target="_blank"
            fullWidth
            mt="xl"
            disabled
          >
            Late Registration
          </GradientButton>
          <Text size="sm" color="dimmed" align="center">
            Prices increase when registering the week of the event
          </Text>
        </Stack>

        {/* <Timeline bulletSize={30} lineWidth={3} mt={60}>
          <Timeline.Item
            active={REGISTRATION_OPEN}
            bullet={1}
            title="Limited Early Registration – $5"
          >
            <Text size="xs">
              {REGISTRATION_OPEN ? "Ends January 31" : "January 1 - January 31"}
            </Text>
            <Text color="dimmed" size="sm">
              Early registration is limited to students from USU&apos;s Huntsman
              School of Business and College of Engineering
            </Text>
          </Timeline.Item>

          <Timeline.Item bullet={2} title="General Registration – $15">
            <Text size="xs">Ends February 23</Text>
            <Text color="dimmed" size="sm">
              General registration is open to all students attending any
              university, community college, or high school
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Late Registration – $25"
            bullet={3}
            lineVariant="dashed"
          >
            <Text color="dimmed" size="sm">
              Late registration for all students registering the week of the
              event
            </Text>
          </Timeline.Item>
        </Timeline> */}
      </Section>

      <Section width="sm" background="light">
        <SectionHead title="What's Included?" />

        <List
          spacing="md"
          size="lg"
          icon={
            <ThemeIcon size={24} radius="xl">
              <Check size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item>
            Entry to the hackathon competition with prizes for top teams from
            each category
          </List.Item>
          <List.Item>
            Entry to all workshops, presentations, and keynotes
          </List.Item>
          <List.Item>
            4 catered meals and plenty of snacks throughout HackUSU
          </List.Item>
          <List.Item>
            Networking event to meet with recruiters and engineers from our
            sponsors
          </List.Item>
        </List>
      </Section>

      <Section width="sm">
        <SectionHead title="Guest Registration">
          Presenters, judges, sponsors, and media
        </SectionHead>

        <Text size="lg">
          If you are representing a company, would like to volunteer, or are a
          member of the press, please email us at{" "}
          <Anchor href={`mailto:${HACKUSU_EMAIL}`} target="_blank">
            {HACKUSU_EMAIL}
          </Anchor>{" "}
          or use the contact form below.
        </Text>
      </Section>

      <ContactForm />
    </Layout>
  )
}

export const Head = () => <SEO title="Register" />
