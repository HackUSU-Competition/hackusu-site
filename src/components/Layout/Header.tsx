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
  Stack,
  Text
} from "@mantine/core"
import {useDisclosure} from "@mantine/hooks"
import {headerLinks, NavLink, paths} from "utils/navigationContent"
import {Link} from "gatsby"
import React, {FC} from "react"
import GradientButton from "components/GradientButton"
import {REGISTRATION_OPEN} from "utils/constants"
import {ChevronRight, Home} from "tabler-icons-react"

const HEADER_HEIGHT = 80

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.navy[9],
    border: 0,
    position: "sticky",
    boxShadow: theme.shadows.lg
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
  },

  drawerContent: {
    backgroundColor: theme.colors.navy[9],
    height: "unset",
    paddingTop: "45px"
  },

  drawerInner: {
    top: HEADER_HEIGHT,
    a: {
      color: theme.colors.navy[2],
      fontWeight: 500,
      fontSize: "1.3rem",
      padding: "1rem 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "+ a": {
        borderTop: `1px solid ${theme.colors.navy[8]}`
      }
    }
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
            onClick={handlers.toggle}
            className={classes.burger}
            size="sm"
            color="white"
            name="burger-menu"
            aria-label="Open navigation menu"
          />
          <Anchor component={Link} to={paths.home}>
            <Image
              src={require("images/logo-base.svg").default}
              alt="HackUSU Logo"
              fit="contain"
              height={HEADER_HEIGHT * 0.6}
              width="auto"
              style={{filter: "invert(1)"}}
            />
          </Anchor>
        </Group>
        <Group spacing={5} className={classes.links}>
          {headerLinks.map((link) => {
            const isHome = link.label === "Home"

            return (
              <Anchor
                component={Link}
                key={link.label}
                to={link.href}
                className={classes.link}
                lh={isHome ? 0 : undefined}
              >
                {isHome ? <Home key={link.label} size={20} /> : link.label}
              </Anchor>
            )
          })}
        </Group>

        {REGISTRATION_OPEN && (
          <GradientButton
            component={Link}
            to={paths.registration}
            sx={{height: 30}}
          >
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
          withCloseButton={false}
          zIndex={1000}
          position="top"
          variant="filled"
          classNames={{
            content: classes.drawerContent,
            inner: classes.drawerInner
          }}
        >
          <Stack spacing={0} onClick={handlers.close}>
            {headerLinks.map((link) => (
              <Text component={Link} key={link.label} to={link.href}>
                {link.label}
                <ChevronRight size={20} />
              </Text>
            ))}
          </Stack>
        </Drawer>
      </Portal>
    </Header>
  )
}

export default HeaderNav
