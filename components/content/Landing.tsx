import { CaretDownIcon } from "@radix-ui/react-icons"
import { keyframes } from "@stitches/core"
import AppleLogo from "../../public/logos/apple.png"
import CoinbaseLogo from "../../public/logos/coinbase.svg"
import PaypalLogo from "../../public/logos/paypal.png"
import TargetLogo from "../../public/logos/target.png"
import ThinkfulLogo from "../../public/logos/thinkful_t.svg"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Image from "../ui/Image"

const OuterWrapper = styled(Box, {
  "scroll-snap-align": "start",
})

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
  "0%": { transform: "translateY(0)" },
  "10%": { transform: "translateY(-10px)" },
  "40%": { transform: "translateY(0)" },
  "60%": { transform: "translateY(0)" },
  "80%": { transform: "translateY(0)" },
  "100%": { transform: "translateY(0)" },
})

const Pointer = styled(CaretDownIcon, {
  width: "5vh",
  height: "5vh",
  animation: `${scaleUp} 3s infinite`,
})

const BlackBox = styled(Box, {
  backgroundColor: "black",
})

const LogosBar = styled(Box, {
  display: "block",
  backgroundColor: "$black",
  padding: "$l $z",
  maxWidth: "1000px",
  margin: "0 auto",

  h3: {
    color: "$white",
    textAlign: "center",
    margin: "$s",
    marginBottom: "$xl",
  },
  ul: {
    display: "flex",
  },

  img: {
    filter: "grayscale(100%) contrast(100%) invert(100%) brightness(120%)",
    maxHeight: "100%",
  },

  "@bp1": {
    ul: {
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      alignItems: "center",

      li: {
        display: "flex",
        width: "50%",
        height: "$xxxl",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexBasis: "50%",
        margin: "$s $l",

        span: {
          maxHeight: "100%",
        },
      },
    },
  },

  "@bp2": {
    ul: {
      flexFlow: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
})

export default () => {
  return (
    <OuterWrapper column center viewport>
      <Padding l>
        <Wrapper>
          <h1> 👋 </h1>
          <h1>I build accessible digital experiences for a global audience</h1>
          <br></br>
          <Box row>
            <p>Read more about me below!</p>
            <Pointer id="pointer"></Pointer>
          </Box>
        </Wrapper>
      </Padding>

      {/* TLDR */}

      <BlackBox row center>
        <LogosBar column>
          <Box row center>
            <h1 style={{ color: "white", marginBottom: "60px" }}>TLDR</h1>
          </Box>

          <Box>
            <ul>
              <li key="LogosBar_4">
                <Image
                  src={PaypalLogo}
                  alt="company logo of paypal"
                  objectFit="contain"
                  size="l"
                  priority
                ></Image>
              </li>
              <li key="LogosBar_1" id="appleLogo">
                <Image
                  src={AppleLogo}
                  alt="company logo of Apple"
                  objectFit="contain"
                  size="s"
                  priority
                ></Image>
              </li>

              <li key="LogosBar_2" id="targetLogo">
                <Image
                  src={TargetLogo}
                  alt="company logo of target"
                  objectFit="contain"
                  size="s"
                  priority
                ></Image>
              </li>
              <li key="LogosBar_0" id="thinkfulLogo">
                <Image
                  src={ThinkfulLogo}
                  alt="company logo of thinkful"
                  objectFit="contain"
                  size="s"
                  priority
                ></Image>
              </li>
              <li key="LogosBar_3">
                <Image
                  src={CoinbaseLogo}
                  alt="company logo of  coinbase"
                  objectFit="contain"
                  size="l"
                  priority
                ></Image>
              </li>
            </ul>
          </Box>
        </LogosBar>
      </BlackBox>
    </OuterWrapper>
  )
}
