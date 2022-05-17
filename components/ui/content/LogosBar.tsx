import Image from "next/image"
import AppleLogo from "../../../public/logos/apple.png"
import CoinbaseLogo from "../../../public/logos/coinbase.png"
import PaypalLogo from "../../../public/logos/paypal.png"
import TargetLogo from "../../../public/logos/target.png"
import ThinkfulLogo from "../../../public/logos/thinkful.jpg"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"

const BlackBox = styled(Box, {
  backgroundColor: "black"
})

const LogosBar = styled(Box, {
  display: "block",
  backgroundColor: "$black",
  padding: "20px 0px",

  h3: {
    color: "$white",
    textAlign: "center",
    margin: "$s",
    marginBottom: "$xl"
  },
  ul: {
    display: "flex"
  },

  "@bp1": {
    ul: {
      // border: "blue solid 2px",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      alignItems: "center",

      li: {
        display: "flex",
        // border: "red dotted 2px",
        width: "50%",
        height: "100px",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexBasis: "50%"
      },

      img: {
        display: "block",
        filter: "grayscale(100%) contrast(100%) invert(100%) brightness(120%)",
        maxHeight: "50px",
        maxWidth: "50px",
        width: "100px"
      }
    }
  },

  "@bp2": {
    ul: {
      // border: "yellow solid 2px",
      flexFlow: "row",
      justifyContent: "space-evenly",
      alignItems: "center",

      li: {
        width: "100px"
        // flexBasis: "100%",
      }
    },

    img: {
      filter: "grayscale(100%) contrast(100%) invert(100%) brightness(120%)",
      width: "200px",
      height: "200px",
      maxHeight: "100px"
    }
  },

  "@bp3": {
    ul: {
      display: "flex",
      // border: "red solid 2px",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  }
})

export default (props) => {
  return (
    <BlackBox>
      <Padding l>
        <LogosBar {...props} column>
          <Box row full>
            <h3 style={{ color: "white" }}>I've Worked At</h3>
          </Box>

          <Box>
            <ul>
              <li key="LogosBar_4">
                <Image
                  src={PaypalLogo}
                  alt="company logo of paypal"
                  // width={150}
                  // height={50}
                ></Image>
              </li>
              <li key="LogosBar_1">
                <Image
                  src={AppleLogo}
                  alt="company logo of Apple"
                  // width={60}
                  // height={60}
                ></Image>
              </li>
              <li key="LogosBar_3">
                <Image
                  src={CoinbaseLogo}
                  alt="company logo of  coinbase"
                  // width={100}
                  // height={100}
                ></Image>
              </li>
              <li key="LogosBar_2">
                <Image
                  src={TargetLogo}
                  alt="company logo of target"
                  // width={60}
                  // height={60}
                ></Image>
              </li>
              <li key="LogosBar_0">
                <Image
                  src={ThinkfulLogo}
                  alt="company logo of thinkful"
                  // width={150}
                  // height={50}
                ></Image>
              </li>
            </ul>
          </Box>
        </LogosBar>
      </Padding>
    </BlackBox>
  )
}
