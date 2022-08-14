import Image, { StaticImageData } from "next/image"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"

const ImageWrapper = styled(Box, {
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",

  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  variants: {
    size: {
      xs: {
        width: "$xs",
        height: "$xs",
      },
      s: {
        width: "60px",
        height: "60px",
      },
      m: {
        width: "150px",
        height: "150px",
      },
      l: {
        width: "190px",
        height: "190px",
      },
      xl: {
        width: "$300",
        height: "$300",
      },
      xxl: {
        width: "$400",
        height: "$400",
      },
      xxxl: {
        width: "$400",
        height: "$400",
      },
      fill: {
        width: "100%",
        height: "100%",
      },
    },
  },
})

type ImageProps = {
  src: string | StaticImageData
  alt: string
  size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl"
  objectFit: "contain" | "cover"
  priority?: boolean
  height?: string
  width?: string
}

// for custom sizing, wrap this components within a Box and set it's dimensions
// as this Image component will conform to the size

export default ({
  src,
  alt,
  size,
  objectFit,
  priority,
  height,
  width,
}: ImageProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <ImageWrapper size={size} width={width} height={height}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={objectFit}
        priority={priority}
      ></Image>
    </ImageWrapper>
  )
}
