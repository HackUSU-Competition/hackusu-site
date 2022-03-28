import {
  Anchor,
  Burger,
  Button,
  Container,
  createStyles,
  Group,
  Header,
  Title,
} from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { headerLinks, paths } from 'content/navigationContent';
import { Link } from 'gatsby';
import React, { FC } from 'react';

// import logo from './logo.png';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((t) => ({
  container: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [t.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  burger: {
    [t.fn.largerThan('md')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: t.radius.sm,
    fontSize: t.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: t.colorScheme === 'dark' ? t.colors.dark[6] : t.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

export interface NavLink {
  href: string;
  label: string;
}

export interface HeaderProps {
  links: NavLink[];
}

const HeaderNav: FC = () => {
  const { classes } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderColor: 'grey', boxShadow: '0 0 5 0 black' }} mb={50}>
      <Container className={classes.container} fluid>
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          {/* <Image src={logo} alt='Mantine Logo' width={120} /> */}
          <Anchor component={Link} to={paths.home}>
            <Title>HackUSU</Title>
          </Anchor>
        </Group>
        <Group spacing={5} className={classes.links}>
          {headerLinks.map((link) => (
            <Anchor component={Link} key={link.label} to={link.href} className={classes.link}>
              {link.label}
            </Anchor>
          ))}
        </Group>
        <Button sx={{ height: 30 }}>Register</Button>
      </Container>
    </Header>
  );
};

export default HeaderNav;
