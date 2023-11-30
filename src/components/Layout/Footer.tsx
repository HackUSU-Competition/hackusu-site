import {
  Anchor,
  Container,
  createStyles,
  Group,
  Stack,
  Text
} from "@mantine/core"
import {footerLinkGroups} from "utils/navigationContent"
import {Link} from "gatsby"
import React from "react"
import {Code, Mail} from "tabler-icons-react"
import {HACKUSU_EMAIL} from "utils/constants"

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: theme.colors.gray[1],
    background: `url(${
      require("../../images/backgrounds/light-triangles-large.svg").default
    })`,
    backgroundSize: "cover",
    borderTop: `1px solid ${theme.colors.gray[3]}`
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      gap: 50,
      flexDirection: "column-reverse",
      alignItems: "center"
    }
  },

  groups: {
    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      gap: 50
    }
  },

  wrapper: {
    width: 160,

    [theme.fn.smallerThan("xs")]: {
      width: "100%",
      textAlign: "center"
    }
  }
}))

export default function FooterLinks() {
  const {classes} = useStyles()

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Stack mb={30}>
          <Text color="dimmed" size="sm">
            © {new Date().getFullYear()} HackUSU, Utah State University
          </Text>
          <Text
            component="a"
            href={`mailto:${HACKUSU_EMAIL}`}
            color="dimmed"
            size="sm"
            sx={{":hover": {textDecoration: "underline"}}}
          >
            <Mail
              size={16}
              style={{position: "relative", top: 4, marginRight: 6}}
            />
            {HACKUSU_EMAIL}
          </Text>
          <Text
            component="a"
            href={`mailto:despaintroy@gmail.com`}
            color="dimmed"
            size="sm"
            sx={{":hover": {textDecoration: "underline"}}}
          >
            <Group noWrap spacing={0} align="flex-start">
              <Code
                size={16}
                style={{position: "relative", top: 4, marginRight: 6}}
              />
              Contact Troy DeSpain for website changes at despaintroy@gmail.com
            </Group>
          </Text>
        </Stack>

        <Group align="start" className={classes.groups}>
          {footerLinkGroups.map((group) => (
            <div className={classes.wrapper} key={group.title}>
              <Text sx={{fontWeight: 800, textTransform: "uppercase"}}>
                {group.title}
              </Text>
              {group.links.map((link, index) =>
                link.external ? (
                  <Anchor
                    key={index}
                    href={link.href}
                    color="dimmed"
                    target="_blank"
                    py={3}
                    sx={{display: "block", fontWeight: "normal"}}
                  >
                    {link.label}
                  </Anchor>
                ) : (
                  <Anchor
                    key={index}
                    component={Link}
                    to={link.href}
                    color="dimmed"
                    py={3}
                    sx={{display: "block", fontWeight: "normal"}}
                  >
                    {link.label}
                  </Anchor>
                )
              )}
            </div>
          ))}
        </Group>
      </Container>
    </footer>
  )
}
