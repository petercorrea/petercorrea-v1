import { LOCAL_CMS } from "../../constants/constants"
import { ComponentContentImages } from "../../generated"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const Image = styled("img", {
  display: "block",
})

export const generateImages = (images: ComponentContentImages, idx) => {
  return images.images.data.map((image, idx2) => {
    return (
      <Padding l key={idx}>
        <Box row center key={idx2}>
          <Image
            src={`${LOCAL_CMS}${image.attributes.url}`}
            alt="some alt"
            key={idx}
            width={300}
            height={300}
          />
        </Box>
      </Padding>
    )
  })
}
