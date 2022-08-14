import { CaretDownIcon } from "@radix-ui/react-icons"
import { keyframes } from "@stitches/core"
import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"

const Wrapper = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  paddingTop: "100px",
  paddingLeft: "20px",

  h3: {
    color: "$gray",
  },
  p: {},
  "#pointer": {
    maxWidth: "$xl",
    maxHeight: "$xl",
  },

  "@bp1": {},

  "@bp2": {
    paddingTop: "200px",
    paddingLeft: "20px",
  },

  "@bp3": {
    paddingTop: "200px",
    paddingLeft: "20px",
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
    <Wrapper>
      <Box>
        <h1 id="hero-text">I build digital experiences</h1>
      </Box>

      <Box row>
        <p>Read more about me below!</p>
        <Pointer id="pointer"></Pointer>
      </Box>
    </Wrapper>
  )
}
