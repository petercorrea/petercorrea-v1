import { CaretDownIcon } from "@radix-ui/react-icons"
import { keyframes } from "@stitches/core"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const Wrapper = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",

  h1: {},
  h3: {
    color: "$gray",
  },

  p: {},

  "#pointer": {
    maxWidth: "$xl",
    maxHeight: "$xl",
  },
})

const scaleUp = keyframes({
  "0%": { transform: "translateY($z)" },
  "10%": { transform: "translateY(-$l)" },
  "40%": { transform: "translateY($z)" },
  "60%": { transform: "translateY($z)" },
  "80%": { transform: "translateY($z)" },
  "100%": { transform: "translateY($z)" },
})

const Pointer = styled(CaretDownIcon, {
  width: "5vh",
  height: "5vh",
  animation: `${scaleUp} 3s infinite`,
})

export default () => {
  return (
    <Box column center viewport>
      <Padding l>
        <Wrapper>
          <h3> I'm Peter</h3>
          <h1>I build web apps</h1>
          <p>
            As a software engineer I architect accessible digital experiences
            for businesses. Currently, I'm building internal solutions at
            PayPal.
          </p>

          <br></br>
          <Box row>
            <p>Read more about me below!</p>
            <Pointer id="pointer"></Pointer>
          </Box>
        </Wrapper>
      </Padding>
    </Box>
  )
}
