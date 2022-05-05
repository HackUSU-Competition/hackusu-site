import { Box, Container, createStyles, Title } from '@mantine/core';
import React, { FC, ReactNode } from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundImage: `url(${require('images/backgrounds/circuit-board.svg').default})`,
    backgroundColor: theme.colors.navy[8],
    // backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    //   theme.colors[theme.primaryColor][7]
    // } 100%)`,
  },
  text: {
    color: theme.white,
    paddingTop: theme.spacing.xl * 5,
    paddingBottom: theme.spacing.xl * 2,
    letterSpacing: '0.05em',
    fontSize: theme.fontSizes.xl * 2,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xl * 1.5,
    },
  },
}));

const PageTitle: FC<{ children: ReactNode }> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Title order={1} className={classes.text}>
          {children}
        </Title>
      </Container>
    </Box>
  );
};

export default PageTitle;
