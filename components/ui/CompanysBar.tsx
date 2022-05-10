import Box from "../layout/Box"
import { styled } from "../../stitches.config"
import Image from "next/image"
import AppleLogo from "../../public/logos/apple.png"
import CoinbaseLogo from "../../public/logos/coinbase.png"
import TargetLogo from "../../public/logos/target.png"
import ThinkfulLogo from "../../public/logos/thinkful.svg"
import FiuLogo from "../../public/logos/fiu.png"
import PaypalLogo from "../../public/logos/paypal.png"

const CompanysBar = styled("div", {
  display: "block",
  backgroundColor: "rgba(59, 59, 59, 0.94)",
  height: "100%",

  ul: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    li: {
      display: "block",
    },
  },

  img: {
    filter: "grayscale(100%) contrast(100%) invert(100%)",
  },
})

export default (props) => {
  return (
    <CompanysBar {...props}>
      <Box row>
        <ul>
          <li>
            <Image
              className="navbar-images"
              src={ThinkfulLogo}
              alt="company logo of thinkful"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="navbar-images"
              src={AppleLogo}
              alt="company logo of Apple"
              width={60}
              height={60}
            ></Image>
          </li>
          <li>
            <Image
              className="navbar-images"
              src={TargetLogo}
              alt="company logo of target"
              width={60}
              height={60}
            ></Image>
          </li>

          <li>
            <Image
              className="navbar-images"
              src={CoinbaseLogo}
              alt="company logo of  coinbase"
              width={100}
              height={100}
            ></Image>
          </li>
          <li>
            <Image
              className="navbar-images"
              src={PaypalLogo}
              alt="company logo of paypal"
              width={100}
              height={100}
            ></Image>
          </li>
        </ul>
      </Box>
    </CompanysBar>
  )
}
