import {Box, Container, createStyles, Title} from "@mantine/core"
import React, {FC, ReactNode} from "react"

const useStyles = createStyles((theme) => ({
  container: {
    backgroundImage: `url(${
      require("images/backgrounds/circuit-board.svg").default
    })`,
    backgroundColor: theme.colors.navy[8]
    // backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    //   theme.colors[theme.primaryColor][7]
    // } 100%)`,
  },
  text: {
    color: theme.white,
    paddingTop: 120,
    paddingBottom: 47,
    letterSpacing: "0.05em",
    fontSize: 40,
    textAlign: "center",

    [theme.fn.smallerThan("sm")]: {
      fontSize: 30
    }
  }
}))

const PageTitle: FC<{children: ReactNode}> = ({children}) => {
  const {classes} = useStyles()

  return (
    <Box className={classes.container}>
      <Container>
        <Title order={1} className={classes.text}>
          {children}
        </Title>
      </Container>
    </Box>
  )
}

export default PageTitle
