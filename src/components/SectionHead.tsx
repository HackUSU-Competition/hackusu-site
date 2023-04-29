import {Box, Container, createStyles, Divider, Text, Title} from "@mantine/core"
import React, {FC} from "react"

const useStyles = createStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing.md,
    letterSpacing: "0.05em",
    fontSize: theme.fontSizes.xl * 2,
    textAlign: "center"
  },

  description: {
    fontSize: theme.fontSizes.xl * 1.2
  }
}))

export interface SectionHeadProps {
  title: string
  children?: React.ReactNode
}

const SectionHead: FC<SectionHeadProps> = ({title, children}) => {
  const {classes} = useStyles()

  return (
    <Box mb={40}>
      <Title order={2} className={classes.title}>
        {title}
      </Title>
      <Container size="sm">
        <Text align="center" weight="300" className={classes.description}>
          {children}
        </Text>
      </Container>
      <Divider mt={30} size="md" mx="auto" sx={{maxWidth: "200px"}} />
    </Box>
  )
}

export default SectionHead
