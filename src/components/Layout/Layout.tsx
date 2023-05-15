import {Box, MantineProvider} from "@mantine/core"
import "animate.css/animate.min.css"
import React, {FC, ReactNode} from "react"
import theme from "theme"
import FooterLinks from "./Footer"
import HeaderNav from "./Header"

const Layout: FC<{children: ReactNode}> = (props) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <Box
        p="xs"
        sx={(theme) => ({
          backgroundColor: theme.colors.blue[2],
          textAlign: "center"
        })}
      >
        <b>
          Information about HackUSU 2024 will be available this fall! &nbsp;
          &#127881;
        </b>
      </Box>
      <HeaderNav />
      {props.children}
      <FooterLinks />
    </MantineProvider>
  )
}

export default Layout
