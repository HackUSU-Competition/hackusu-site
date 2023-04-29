import React, {FC, ReactNode} from "react"
import {AnimationOnScroll} from "react-animation-on-scroll"

export interface AnimateUpOnceProps {
  children: ReactNode
}
const AnimateUpOnce: FC<AnimateUpOnceProps> = ({children, ...rest}) => (
  <AnimationOnScroll duration={0.5} animateIn="animate__fadeInUp" animateOnce>
    {children}
  </AnimationOnScroll>
)

export default AnimateUpOnce
