import {
  Anchor,
  Burger,
  Container,
  createStyles,
  Drawer,
  Group,
  Header,
  Image,
  Portal,
  Stack
} from "@mantine/core"
import {useDisclosure} from "@mantine/hooks"
import GradientButton from "components/GradientButton"
import {headerLinks, NavLink, paths} from "utils/navigationContent"
import {Link} from "gatsby"
import React, {FC} from "react"
import {REGISTRATION_OPEN} from "utils/constants"

const HEADER_HEIGHT = 80

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.navy[9],
    border: 0
  },

  container: {
    height: HEADER_HEIGHT,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none"
    }
  },

  link: {
    color: theme.colors.gray[4],
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    textDecoration: "none !important",

    "&:hover": {
      backgroundColor: theme.colors.navy[8]
    }
  },

  linkLabel: {
    marginRight: 5
  }
}))

export interface HeaderProps {
  links: NavLink[]
}

const HeaderNav: FC = () => {
  const {classes} = useStyles()
  const [opened, handlers] = useDisclosure(false)

  return (
    <Header height={HEADER_HEIGHT} className={classes.header}>
      <Container className={classes.container}>
        <Group grow={false}>
          <Burger
            opened={opened}
            onClick={handlers.open}
            className={classes.burger}
            size="sm"
            color="white"
          />
          <Anchor component={Link} to={paths.home}>
            <Image
              src={require("images/logo-white.svg").default}
              alt="HackUSU Logo"
              fit="contain"
              height={HEADER_HEIGHT * 0.6}
              width="auto"
            />
          </Anchor>
        </Group>
        <Group spacing={5} className={classes.links}>
          {headerLinks.map((link) => (
            <Anchor
              component={Link}
              key={link.label}
              to={link.href}
              className={classes.link}
            >
              {link.label}
            </Anchor>
          ))}
        </Group>

        {REGISTRATION_OPEN && (
          <GradientButton component={Link} to="/registration" sx={{height: 30}}>
            Register
          </GradientButton>
        )}
      </Container>
      <Portal>
        <Drawer
          opened={opened}
          onClose={handlers.close}
          padding="xl"
          size="sm"
          closeButtonProps={{iconSize: "xl"}}
        >
          <Stack>
            {headerLinks.map((link) => (
              <Anchor
                component={Link}
                key={link.label}
                to={link.href}
                sx={{textDecoration: "none !important"}}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>
        </Drawer>
      </Portal>
    </Header>
  )
}

export default HeaderNav
