import LeftArrow from "../../public/design/hand-drawn-arrows/back-drawn-arrow.png"
import RightArrow from "../../public/design/hand-drawn-arrows/right-arrow-outline.png"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Href from "../ui/Href"
import Image from "../ui/Image"

const Wrapper = styled(Box, {
  width: "100%",
  height: "300px",
  margin: "80px 0px",

  "#left-arrow-col": {
    margin: "0px 80px",
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

  "#right-arrow-col": {
    margin: "0px 80px",
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

  h2: {
    display: "block",
    position: "relative",
    color: "$black",
    "font-size": "50px",
    textAlign: "center",
    minWidth: "100%",
    fontWeight: "900",
  },
})
const ImageWrapper = styled(Box, {
  //   position: "absolute",
  width: "100px",
  height: "100px",
  //   left: "40%",
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
          <h2>/posts</h2>
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
          <h2>/afk</h2>
        </Href>
      </Box>
    </Wrapper>
  )
}
