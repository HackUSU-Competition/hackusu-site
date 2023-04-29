import {MantineThemeOverride} from "@mantine/core"
import "./fonts/roboto-slab.ttf"

const theme: MantineThemeOverride = {
  colors: {
    navy: [
      "#EBF2FA",
      "#C6DBF0",
      "#A2C4E7",
      "#7EADDD",
      "#5996D3",
      "#357FCA",
      "#2A66A2",
      "#204C79",
      "#153351",
      "#0B1928"
    ]
  },
  primaryColor: "navy",
  components: {
    Anchor: {defaultProps: {root: {fontWeight: "bold"}}}
  }
}

export default theme
