import {Button} from "@mantine/core"
import React, {FC, PropsWithChildren} from "react"

type ButtonProps = React.ComponentProps<typeof Button>

const GradientButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const {children, ...rest} = props

  return (
    <Button
      {...rest}
      variant="gradient"
      gradient={{from: "blue", to: "indigo", deg: 105}}
    >
      {children}
    </Button>
  )
}

export default GradientButton
