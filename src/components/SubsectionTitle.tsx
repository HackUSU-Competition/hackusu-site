import {
  Box,
  Container,
  createStyles,
  Divider,
  Text,
  Title,
  TitleProps
} from "@mantine/core"
import React, {FC, ReactNode} from "react"

const useStyles = createStyles((theme) => ({
  title: {
    letterSpacing: "0.05em",
    fontSize: theme.fontSizes.xl
  }
}))

export interface SectionHeadProps extends TitleProps {
  children?: ReactNode
}

const SubSectionTitle: FC<SectionHeadProps> = ({
  children,
  className,
  ...rest
}) => {
  const {classes} = useStyles()

  return (
    <Title order={3} className={`${classes.title} ${className}`} {...rest}>
      {children}
    </Title>
  )
}

export default SubSectionTitle
