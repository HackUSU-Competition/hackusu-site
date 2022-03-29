import { Box, Container, createStyles, Title } from '@mantine/core';
import React, { FC } from 'react';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.navy[7],
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

    [theme.fn.smallerThan('sm')]: {
      fontSize: theme.fontSizes.xl * 1.5,
    },
  },
}));

const PageTitle: FC = ({ children }) => {
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