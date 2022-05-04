import { Anchor, Box, Container, createStyles, Group, Text, Title } from '@mantine/core';
import { footerLinkGroups } from 'content/navigationContent';
import { Link } from 'gatsby';
import React from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colors.gray[1],
    borderTop: `1px solid ${theme.colors.gray[3]}`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      gap: theme.spacing.xl * 2,
      flexDirection: 'column-reverse',
      alignItems: 'center',
    },
  },

  groups: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      gap: theme.spacing.xl * 2,
    },
  },

  wrapper: {
    width: 160,

    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

export default function FooterLinks() {
  const { classes } = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Box mb={30}>
          <Text color="dimmed" size="sm">
            © {new Date().getFullYear()} HackUSU, Utah State University
          </Text>
        </Box>
        <Group align="start" className={classes.groups}>
          {footerLinkGroups.map((group) => (
            <div className={classes.wrapper} key={group.title}>
              <Title order={5} sx={{ fontWeight: 800, textTransform: 'uppercase' }}>
                {group.title}
              </Title>
              {group.links.map((link, index) =>
                link.external ? (
                  <Anchor
                    key={index}
                    href={link.href}
                    color="dimmed"
                    py={3}
                    sx={{ display: 'block', fontWeight: 'normal' }}
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
                    sx={{ display: 'block', fontWeight: 'normal' }}
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
  );
}
