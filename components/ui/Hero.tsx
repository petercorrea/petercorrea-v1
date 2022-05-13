import Headshot from "../../public/design/headshot.png"
import Image from "next/image"
import { styled } from "../../stitches.config"

const Wrapper = styled("div", {
  position: "absolute",
  top: "150px",
  right: "0px",
  width: "600px",
  height: "600px",
  zIndex: "-100",
  img: {
    objectFit: "cover",
    // objectPosition: "50% 20px",
    // "clip-path": "circle(25% at 50% 50%)",
    // transform: "scale(.5)",
    filter: "grayscale(100%) contrast(100%) brightness(130%)",
  },
})

export default () => {
  return (
    <Wrapper>
      <Image
        src={Headshot}
        width={600}
        height={600}
        alt="photo of Peter"
        className="image-cropper"
      ></Image>
    </Wrapper>
  )
}
