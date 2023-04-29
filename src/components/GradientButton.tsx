import {Button, ButtonProps} from "@mantine/core"
import React, {FC} from "react"

const GradientButton: FC<ButtonProps<any>> = (props) => {
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
