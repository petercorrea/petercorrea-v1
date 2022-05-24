import Box from "../components/layout/Box"
import Padding from "../components/layout/Padding"
import Image from "../components/ui/Image"
import MobileNavbar from "../components/ui/MobileNavbar"
import Navbar from "../components/ui/Navbar"
import { styled } from "../styles/stitches.config"

const Wrapper = styled(Box, {
  // paddingTop: "80px",
})

const Gallery = styled(Box, {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "center",
  alignItems: "center",

  "@bp1": {
    "&>*": {
      margin: "$z",
      flexBasis: "100%",
    },
  },
  "@bp2": {
    "&>*": {
      margin: "$z",
      flexBasis: "100%",
    },
  },
  "@bp3": {
    "&>*": {
      margin: "$s",
      flexBasis: "40%",
    },
  },
})

export default function route() {
  const html = []

  for (let i = 0; i < 151; i++) {
    html.push(
      <Image
        src={`/afk/picture_${i}.png`}
        alt="personal photo"
        key={i}
        size="xxl"
        objectFit="cover"
      ></Image>
    )
  }

  return (
    <div>
      <MobileNavbar />
      <Navbar />
      <Padding top>
        <Wrapper>
          <h1>afk</h1>
          <Gallery id="photos">{html}</Gallery>
        </Wrapper>
      </Padding>
    </div>
  )
}
