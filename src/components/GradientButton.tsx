import {Button, ButtonProps} from "@mantine/core"
import {PolymorphicComponentProps} from "@mantine/utils"
import React, {PropsWithChildren} from "react"

type GradientButtonProps<C> = PropsWithChildren<
  PolymorphicComponentProps<C, ButtonProps>
>

function GradientButton<C = "button">(props: GradientButtonProps<C>) {
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
