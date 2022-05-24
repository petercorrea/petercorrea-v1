import { LOCAL_CMS } from "../../constants/constants"
import { ComponentContentImages } from "../../generated"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Image from "../ui/Image"

export const generateImages = (images: ComponentContentImages) => {
  return images.images.data.map((image, idx) => {
    return (
      <Padding l key={idx}>
        <Box row center>
          <Image
            src={`${LOCAL_CMS}${image.attributes.url}`}
            alt="some alt"
            size="xl"
            objectFit="contain"
          />
        </Box>
      </Padding>
    )
  })
}
