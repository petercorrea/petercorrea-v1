import { CaretDownIcon } from "@radix-ui/react-icons"
import { keyframes } from "@stitches/core"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const Wrapper = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  paddingTop: "80px",

  h3: {
    color: "$gray",
  },
  p: {},
  "#pointer": {
    maxWidth: "$xl",
    maxHeight: "$xl",
  },

  "@bp1": {
    "#hero-text": {
      fontSize: "70px",
      margin: "0 auto",
    },
  },

  "@bp2": {},

  "@bp3": {
    "#hero-text": {
      fontSize: "100px",
    },
  },
})

const scaleUp = keyframes({
  "0%": { transform: "translateY(0)" },
  "10%": { transform: "translateY(-10px)" },
  "40%": { transform: "translateY(0)" },
  "60%": { transform: "translateY(0)" },
  "80%": { transform: "translateY(0)" },
  "100%": { transform: "translateY(0)" },
})

const Pointer = styled(CaretDownIcon, {
  width: "3vh",
  height: "3vh",
  animation: `${scaleUp} 3s infinite`,
})

export default () => {
  return (
    <Padding l>
      <Box column>
        <h1 id="hero-text">I build digital experiences</h1>
        <Box row>
          <p>Read more about me below!</p>
          <Pointer id="pointer"></Pointer>
        </Box>
      </Box>
    </Padding>
  )
}
