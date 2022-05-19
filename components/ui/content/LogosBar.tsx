import Image from "next/image"
import AppleLogo from "../../../public/logos/apple.png"
import CoinbaseLogo from "../../../public/logos/coinbase.svg"
import PaypalLogo from "../../../public/logos/paypal.png"
import TargetLogo from "../../../public/logos/target.png"
import ThinkfulLogo from "../../../public/logos/thinkful_t.svg"
import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"

const BlackBox = styled(Box, {
  backgroundColor: "black",
})

const LogosBar = styled(Box, {
  display: "block",
  backgroundColor: "$black",
  padding: "20px 0px",

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

  "#appleLogo, #targetLogo": {
    maxWidth: "50px",
  },

  "#thinkfulLogo": {
    maxWidth: "100px",
  },

  "@bp1": {
    ul: {
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      alignItems: "center",

      li: {
        display: "flex",
        width: "50%",
        height: "100px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexBasis: "50%",
        margin: "10px 20px",

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

export default (props) => {
  return (
    <BlackBox>
      <Padding l>
        <LogosBar {...props} column>
          <Box row center>
            <h1 style={{ color: "white" }}>TL;DR</h1>
          </Box>

          <Box>
            <ul>
              <li key="LogosBar_4">
                <Image
                  src={PaypalLogo}
                  alt="company logo of paypal"
                  width={250}
                  height={250}
                ></Image>
              </li>
              <li key="LogosBar_1" id="appleLogo">
                <Image
                  src={AppleLogo}
                  alt="company logo of Apple"
                  width={250}
                  height={250}
                ></Image>
              </li>
              <li key="LogosBar_3">
                <Image
                  src={CoinbaseLogo}
                  alt="company logo of  coinbase"
                  width={250}
                  height={250}
                ></Image>
              </li>
              <li key="LogosBar_2" id="targetLogo">
                <Image
                  src={TargetLogo}
                  alt="company logo of target"
                  width={250}
                  height={250}
                ></Image>
              </li>
              <li key="LogosBar_0" id="thinkfulLogo">
                <Image
                  src={ThinkfulLogo}
                  alt="company logo of thinkful"
                  width={250}
                  height={250}
                ></Image>
              </li>
            </ul>
          </Box>
        </LogosBar>
      </Padding>
    </BlackBox>
  )
}
