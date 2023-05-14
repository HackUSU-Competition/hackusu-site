import {
  Anchor,
  Button,
  Container,
  createStyles,
  Group,
  Text,
  Title
} from "@mantine/core"
import Layout from "components/Layout/Layout"
import {paths} from "utils/navigationContent"
import {Link} from "gatsby"
import React from "react"
import {SEO} from "components/seo"

const useStyles = createStyles((theme) => ({
  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120
    }
  },

  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32
    }
  }
}))

export default function NotFoundTitle() {
  const {classes} = useStyles()

  return (
    <Layout>
      <Container py={80} size="sm">
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a hidden page.</Title>
        <Text color="dimmed" size="lg" align="center" mx="auto" my={20}>
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group position="center">
          <Anchor component={Link} to={paths.home}>
            <Button variant="subtle" size="md">
              Take me back to home page
            </Button>
          </Anchor>
        </Group>
      </Container>
    </Layout>
  )
}

export const Head = () => <SEO />
