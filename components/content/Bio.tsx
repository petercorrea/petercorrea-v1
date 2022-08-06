import content from "../../constants/content.json"
import Headshot from "../../public/design/headshot.png"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Image from "../ui/Image"

const Wrapper = styled(Box, {
  "scroll-snap-align": "start",

  "@bp1": {},

  "@bp2": {},

  "@bp3": {},
})

const InnerWrapper = styled(Box, {
  "@bp1": {
    flexDirection: "column",
  },

  "@bp2": {
    flexDirection: "column",
  },

  "@bp3": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
})

const ImageWrapper = styled(Box, {
  // border: "2px solid black",
  overflow: "hidden",
  // position: "relative",
  display: "block",
  margin: "20px auto",
  // marginRight: "40px",
  boxShadow: "$light",
  img: {
    filter: "grayscale(1)",
    img: {
      objectPosition: "50% 50%",
    },
  },

  "@bp1": {
    width: "90%",
    height: "300px",
    border: "0px solid black",
    img: {
      objectPosition: "50% 30%",
    },
  },

  "@bp2": {},

  "@bp3": {},
})

const BioWrapper = styled(Box, {
  "@bp1": {
    padding: "40px",
  },

  "@bp2": {
    padding: "40px",
  },

  "@bp3": {
    padding: "40px",
  },
})

export default () => {
  return (
    <Wrapper className="bio" viewport>
      <Padding id="bio" l>
        <h1>bio</h1>

        <InnerWrapper>
          <ImageWrapper>
            <Image
              src={Headshot}
              alt="headshot of Peter"
              objectFit="cover"
              priority
            ></Image>
          </ImageWrapper>

          <BioWrapper center>
            <p>{content.biography["0"]}</p>
          </BioWrapper>
        </InnerWrapper>
      </Padding>
    </Wrapper>
  )
}
