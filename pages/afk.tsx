import Image from "next/image"
import Box from "../components/layout/Box"
import Padding from "../components/layout/Padding"
import MobileNavbar from "../components/ui/MobileNavbar"
import Navbar from "../components/ui/Navbar"
import { styled } from "../styles/stitches.config"

const Wrapper = styled(Box, {})

const Gallery = styled(Box, {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center",

  "@bp1": {
    "&>*": {
      margin: "0px",
      flexBasis: "100%",
    },
  },
  "@bp2": {
    "&>*": {
      margin: "0px",
      flexBasis: "100%",
    },
  },
  "@bp3": {
    "&>*": {
      margin: "5px",
      flexBasis: "40%",
    },
  },
})

const ImageContainer = styled(Box, {
  position: "relative",
  width: "300px",
  height: "300px",
  overflow: "hidden",

  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
})

export default function route() {
  const html = []

  for (let i = 0; i < 151; i++) {
    html.push(
      <ImageContainer key={i}>
        <Image
          src={`/afk/picture_${i}.png`}
          alt="personal photo"
          layout="fill"
        ></Image>
      </ImageContainer>
    )
  }

  return (
    <div>
      <MobileNavbar />
      <Navbar />
      <Padding>
        <Wrapper>
          <h1>afk</h1>
          <Gallery id="photos">{html}</Gallery>
        </Wrapper>
      </Padding>
    </div>
  )
}
