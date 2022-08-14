import LeftArrow from "../../public/design/hand-drawn-arrows/back-drawn-arrow.png"
import RightArrow from "../../public/design/hand-drawn-arrows/right-arrow.png"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Href from "../ui/Href"
import Image from "../ui/Image"

const Wrapper = styled(Box, {
  width: "100%",
  margin: "80px 0px",

  "#left-arrow-col": {
    width: "min-content",
    "&:hover": {
      h2: {
        color: "$active",
      },

      "#left-arrow": {
        transform: "rotate(5deg)",
      },
    },
  },

  "#label": {
    fontSize: "40px",
    fontWeight: "600",
  },

  "#right-arrow-col": {
    width: "min-content",
    "&:hover": {
      h2: {
        color: "$active",
      },

      "#right-arrow": {
        transform: "rotate(-5deg)",
      },
    },
  },
})
const ImageWrapper = styled(Box, {
  "@bp1": {
    width: "100px",
    height: "70px",
  },
  "@bp2": {},
  "@bp3": {},
})

export const LeftOrRight = () => {
  return (
    <Wrapper row center>
      <Box column id="left-arrow-col">
        <Href href="/posts">
          <ImageWrapper id="left-arrow">
            <Image
              src={LeftArrow}
              alt="photo of left and right arrows"
              height="200"
              width="200"
              objectFit="cover"
            />
          </ImageWrapper>
          <p id="label">/posts</p>
        </Href>
      </Box>

      <Box column id="right-arrow-col">
        <Href href="/afk">
          <ImageWrapper id="right-arrow">
            <Image
              src={RightArrow}
              alt="photo of left and right arrows"
              height="200"
              width="200"
              objectFit="cover"
            />
          </ImageWrapper>
          <p id="label">/afk</p>
        </Href>
      </Box>
    </Wrapper>
  )
}
