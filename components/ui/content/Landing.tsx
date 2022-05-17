import { CaretDownIcon } from "@radix-ui/react-icons"
import { keyframes } from "@stitches/core"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"

const Wrapper = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  // height: "70vh",

  h1: {
    // lineHeight: "200px",
  },
  h3: {
    color: "$gray",
  },

  p: {},

  "#pointer": {
    maxWidth: "50px",
    maxHeight: "50px",
  },
})

const scaleUp = keyframes({
  "0%": { transform: "translateY(0px)" },
  "10%": { transform: "translateY(-20px)" },
  "40%": { transform: "translateY(0px)" },
  "60%": { transform: "translateY(0px)" },
  "80%": { transform: "translateY(0px)" },
  "100%": { transform: "translateY(0px)" },
})

const Pointer = styled(CaretDownIcon, {
  // border: "red solid 2px",
  width: "5vh",
  height: "5vh",
  animation: `${scaleUp} 3s infinite`,
})

export default () => {
  return (
    <Box column center viewport>
      <Padding l>
        <Wrapper>
          <h3> I'm Peter.</h3>
          <h1>I build web apps.</h1>
          <p>
            As a software engineer, I architect accessible digital experiences
            for businesses. Currently I'm building internal solutions at PayPal.
          </p>

          <br></br>
          <Box row>
            <p>Read more about me below.</p>
            <Pointer id="pointer"></Pointer>
          </Box>
        </Wrapper>
      </Padding>
    </Box>
  )
}
