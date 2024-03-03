import {Box, MantineProvider, Text} from "@mantine/core"
import "animate.css/animate.min.css"
import React, {FC, ReactNode} from "react"
import theme from "theme"
import FooterLinks from "./Footer"
import HeaderNav from "./Header"
import LogRocket from "logrocket"
import setupLogRocketReact from "logrocket-react"

const ENABLE_LOGROCKET =
  process.env.NODE_ENV !== "development" && typeof window !== "undefined"

console.debug("LogRocket enabled:", ENABLE_LOGROCKET)

if (ENABLE_LOGROCKET) {
  LogRocket.init("hackusu-5gobn/hackusu-website")
  setupLogRocketReact(LogRocket)
}

const Layout: FC<{children: ReactNode}> = (props) => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
      <Box
        p="xs"
        sx={(theme) => ({
          backgroundColor: theme.colors.blue[2],
          color: theme.colors.navy[9],
          // backgroundColor: theme.colors.orange[2],
          // color: theme.colors.orange[9],
          textAlign: "center",
          zIndex: 1001,
          position: "relative"
          // cursor: "pointer"
        })}
        // onClick={() => {
        //   navigate("/register")
        // }}
      >
        <Text weight="bold">
          {/* {REGISTRATION_OPEN ? (
            <>Register in-person at check-in today</>
          ) : (
            <>
              Registration for HackUSU 2024 will open January 8<sup>th</sup>{" "}
              &nbsp; &#127881;
            </>
          )} */}
          Thanks for coming to HackUSU 2024!
          <br />
          We&apos;ll see you again next year! &#127881;
        </Text>
      </Box>
      <HeaderNav />
      {props.children}
      <FooterLinks />
    </MantineProvider>
  )
}

export default Layout
