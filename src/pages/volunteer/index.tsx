import {
  Anchor,
  Box,
  Container,
  createStyles,
  Divider,
  Group,
  Image,
  Text,
  Title
} from "@mantine/core"
import AnimateUpOnce from "components/AnimateUpOnce"
import GradientButton from "components/GradientButton"
import Layout from "components/Layout/Layout"
import PageTitle from "components/PageTitle"
import {paths} from "utils/navigationContent"
import React, {ReactElement} from "react"
import {ChevronDown} from "tabler-icons-react"
import VolunteerForm from "./_VolunteerForm"
import { SEO } from "components/seo"

interface VolunteerOpportunity {
  title: string
  description: ReactElement
  image: string
  cta: string
}

const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    title: "Event Organizer",
    image: require("images/illustrations/meeting.svg").default,
    cta: "Become an Event Organizer",
    description: (
      <>
        <p>
          Our amazing organizers spend all year planning HackUSU! We need
          volunteers to work on the following projects:
        </p>
        <ul>
          <li>Work with companies to coordinate sponsorships</li>
          <li>Schedule workshops, judges, and speakers</li>
          <li>
            Organize other volunteers who will help us on the day of the event
          </li>
          <li>Coordinate catering</li>
        </ul>
      </>
    )
  },
  {
    title: "Workshop Presenter",
    image: require("images/illustrations/teaching.svg").default,
    cta: "Host a Workshop",
    description: (
      <>
        <p>
          If you&apos;re an experienced industry professional, we&apos;d love to
          have you run a workshop! Topics could be in the areas of software
          development, data science, hardware engineering, or anything else
          interesting to the HackUSU community!
        </p>
        <p>
          Workshops should be on topics generally applicable to many students.
          If you&apos;d instead like to promote your own company&apos;s
          products, check out our several{" "}
          <Anchor href={paths.sponsor}>sponsorship options</Anchor>.
        </p>
      </>
    )
  },
  {
    title: "Project Judge",
    image: require("images/illustrations/performance-overview.svg").default,
    cta: "Become a Project Judge",
    description: (
      <p>
        As a judge, you&apos;ll review all project submissions for a specific
        category to select the winners! As the event gets closer, we&apos;ll
        provide specific instructions on the judging process.
      </p>
    )
  }
  // {
  //   title: "Mentor",
  //   image: require("images/illustrations/pair-programming.svg").default,
  //   cta: "Become a Mentor",
  //   description: (
  //     <p>
  //       We&apos;ll have mentors available throughout the competition whenever
  //       teams need help on their project or need to learn more about a specific
  //       technology.
  //     </p>
  //   )
  // }
]

const useStyles = createStyles((theme) => ({
  opportunity: {
    flexWrap: "nowrap",
    marginBlock: 90,

    // Desktop
    [theme.fn.largerThan("xs")]: {
      "&:nth-of-type(even)": {
        flexDirection: "row-reverse"
        // textAlign: 'right',
      }
    },

    [theme.fn.smallerThan("sm")]: {
      gap: theme.spacing.xl
    },

    // Mobile
    [theme.fn.smallerThan("xs")]: {
      flexWrap: "wrap",
      textAlign: "center"
    }
  },

  image: {
    [theme.fn.smallerThan("xs")]: {
      marginInline: "auto"
    }
  }
}))

export default function Volunteer() {
  const {classes} = useStyles()
  return (
    <Layout>
      <PageTitle>Volunteer Opportunities</PageTitle>
      <Container>
        <Box>
          {volunteerOpportunities.map((opportunity, idx) => {
            return (
              <AnimateUpOnce key={idx}>
                <Group key={opportunity.title} className={classes.opportunity}>
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    width={300}
                    className={classes.image}
                  />
                  <Box>
                    <Title order={3} my={10}>
                      {opportunity.title}
                    </Title>
                    <Text>{opportunity.description}</Text>
                    <GradientButton
                      rightIcon={<ChevronDown size={14} />}
                      component="a"
                      href="#sign-up-form"
                    >
                      {opportunity.cta}
                    </GradientButton>
                  </Box>
                </Group>
              </AnimateUpOnce>
            )
          })}
        </Box>
        <Divider />
        <VolunteerForm mt={50} />
      </Container>
    </Layout>
  )
}

export const Head = () => <SEO />
