import AppleLogo from "../../../public/logos/apple.png"
import CoinbaseLogo from "../../../public/logos/coinbase.svg"
import PaypalLogo from "../../../public/logos/paypal.png"
import TargetLogo from "../../../public/logos/target.png"
import ThinkfulLogo from "../../../public/logos/thinkful_t.svg"
import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"
import Image from "../../ui/Image"

const BlackBox = styled(Box, {
  backgroundColor: "black",
})

const ImageWrapper = styled(Box, {
  "@bp1": {
    width: "40vw",
    height: "50px",
  },
  "@bp2": {
    width: "18vw",
    height: "60px",
  },
  "@bp3": {
    width: "18vw",
    maxWidth: "200px",
    height: "60px",
  },
})

const LogosBar = styled(Box, {
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

  img: {
    filter: "grayscale(100%) contrast(100%) invert(100%) brightness(120%)",
    // maxHeight: "100%",
  },

  "@bp1": {
    ul: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  },
  "@bp2": {},
  "@bp3": {},
})

export default () => {
  return (
    <BlackBox row center>
      <LogosBar column>
        <Box row center>
          <h1
            style={{ color: "white", marginBottom: "0px", textAlign: "center" }}
          >
            Past Work
          </h1>
        </Box>

        <Box>
          <ul>
            <li key="LogosBar_4">
              <ImageWrapper>
                <Image
                  src={PaypalLogo}
                  alt="company logo of paypal"
                  objectFit="contain"
                  priority
                ></Image>
              </ImageWrapper>
            </li>
            <li key="LogosBar_1" id="appleLogo">
              <ImageWrapper>
                <Image
                  src={AppleLogo}
                  alt="company logo of Apple"
                  objectFit="contain"
                  priority
                ></Image>
              </ImageWrapper>
            </li>
            <li key="LogosBar_2" id="targetLogo">
              <ImageWrapper>
                <Image
                  src={TargetLogo}
                  alt="company logo of target"
                  objectFit="contain"
                  priority
                ></Image>
              </ImageWrapper>
            </li>
            <li key="LogosBar_0" id="thinkfulLogo">
              <ImageWrapper>
                <Image
                  src={ThinkfulLogo}
                  alt="company logo of thinkful"
                  objectFit="contain"
                  priority
                ></Image>
              </ImageWrapper>
            </li>
            <li key="LogosBar_3">
              <ImageWrapper>
                <Image
                  src={CoinbaseLogo}
                  alt="company logo of  coinbase"
                  objectFit="contain"
                  priority
                ></Image>
              </ImageWrapper>
            </li>
          </ul>
        </Box>
      </LogosBar>
    </BlackBox>
  )
}
