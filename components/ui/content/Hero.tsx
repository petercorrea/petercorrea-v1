import { motion } from "framer-motion"
import Image from "next/image"
import Headshot from "../../../public/design/headshot.png"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"

const Wrapper = styled(Box, {
  position: "relative",
  display: "flex",

  "@bp1": {
    flexDirection: "column",
  },
  "@bp2": {
    flexDirection: "column",
  },
  "@bp3": {
    flexDirection: "row",
  },
})

const WrapperMotion = styled(motion.div, {
  opacity: 0,
})

export const Animate = ({ children }) => (
  <WrapperMotion
    animate={{ x: -100, opacity: 1 }}
    transition={{ ease: "easeOut", duration: 2 }}
  >
    {children}
  </WrapperMotion>
)

const ImageWrapper = styled(Image, {
  position: "absolute",
  zIndex: 8,
  width: "200px",
  height: "200px",
  objectFit: "cover",
  filter: "grayscale(100%) contrast(100%) brightness(130%)",
})

export default () => {
  return (
    <Padding l>
      <Wrapper>
        {/* <Animate> */}
        <Box>
          <h1>Peter</h1>
          <h1>Correa</h1>
        </Box>
        {/* </Animate> */}

        <ImageWrapper
          src={Headshot}
          width={600}
          height={600}
          alt="photo of Peter"
          className="image-cropper"
        ></ImageWrapper>
      </Wrapper>
    </Padding>
  )
}
