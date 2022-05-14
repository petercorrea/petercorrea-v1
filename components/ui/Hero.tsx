import { motion } from "framer-motion"
import Image from "next/image"
import Headshot from "../../public/design/headshot.png"
import { styled } from "../../stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const WrapperMotion = styled(motion.div, {
  opacity: 0,
})

export const MyComponent = ({ isVisible, children, }) => (
  <WrapperMotion
    animate={{ x: -100, opacity: 1, }}
    transition={{ ease: "easeOut", duration: 2, }}
    // initial={false}
  >
    {children}
  </WrapperMotion>
)

const LargeText = styled(Box, {
  position: "absolute",
  zIndex: "9",
})

const Wrapper = styled(Box, {
  minHeight: "600px",
  position: "relative",
})

const ImageWrapper = styled(Box, {
  width: "30rem",
  maxWidth: "600px",
  top: "50px",
  right: "-100px",
  position: "absolute",
  img: {
    display: "block",
    width: "200px",
    height: "200px",
    objectFit: "cover",
    // objectPosition: "50% 20px",
    // "clip-path": "circle(25% at 50% 50%)",
    // transform: "scale(.5)",
    filter: "grayscale(100%) contrast(100%) brightness(130%)",
  },
})

export default () => {
  return (
    <Padding>
      <Wrapper>
        <MyComponent isVisible={true}>
          <LargeText column>
            <h1>Peter Correa</h1>
          </LargeText>
        </MyComponent>

        <ImageWrapper>
          <Image
            src={Headshot}
            width={600}
            height={600}
            alt="photo of Peter"
            className="image-cropper"
          ></Image>
        </ImageWrapper>
      </Wrapper>
    </Padding>
  )
}
