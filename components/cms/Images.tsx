import { LOCAL_CMS } from "../../constants/constants"
import { ComponentContentImages } from "../../generated"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const Image = styled("img", {
  display: "block",
})

export const generateImages = (images: ComponentContentImages) => {
  return images.images.data.map((image, idx) => {
    return (
      <Padding l key={idx}>
        <Box row center>
          <Image
            src={`${LOCAL_CMS}${image.attributes.url}`}
            alt="some alt"
            width={300}
            height={300}
          />
        </Box>
      </Padding>
    )
  })
}
