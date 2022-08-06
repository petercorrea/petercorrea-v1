import AppleLogo from "../../public/logos/apple.png"
import CoinbaseLogo from "../../public/logos/coinbase.svg"
import PaypalLogo from "../../public/logos/paypal.png"
import TargetLogo from "../../public/logos/target.png"
import ThinkfulLogo from "../../public/logos/thinkful_t.svg"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Image from "../ui/Image"

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
    <BlackBox row center>
      <LogosBar column>
        <Box row center>
          <h1
            style={{ color: "white", marginBottom: "0px", textAlign: "center" }}
          >
            PAST WORK
          </h1>
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
  )
}
