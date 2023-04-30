import {
  Box,
  BoxProps,
  Container,
  MantineNumberSize,
  MantineProvider,
  Sx
} from "@mantine/core"
import SectionHead from "components/SectionHead"
import React, {FC, ReactNode} from "react"

type BackgroundOption = "white" | "light" | "pattern"

export interface SectionProps extends BoxProps {
  title?: string
  subtitle?: string
  children: ReactNode
  background?: BackgroundOption
  fullWidth?: boolean
  width?: MantineNumberSize
}

const boxSX: Record<BackgroundOption, Sx> = {
  white: {},
  light: (theme) => ({
    backgroundColor: theme.colors.gray[1],
    border: `1px solid ${theme.colors.gray[3]}`
  }),
  pattern: {
    background: `url(${
      require("../../images/backgrounds/light-triangles-large.svg").default
    })`,
    backgroundSize: "cover"
  }
}

const Section: FC<SectionProps> = (props) => {
  const {
    title,
    subtitle,
    children,
    fullWidth,
    background = "white",
    width,
    ...rest
  } = props

  const contents = (
    <>
      {title && <SectionHead title={title}>{subtitle}</SectionHead>}
      {children}
    </>
  )

  return (
    <Box sx={boxSX[background]} py={75} {...rest}>
      <MantineProvider>
        {fullWidth ? contents : <Container size={width}>{contents}</Container>}
      </MantineProvider>
    </Box>
  )
}

export default Section
