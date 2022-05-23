import { LOCAL_CMS } from "../../constants/constants"
import { ComponentContentVideo } from "../../generated"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

export const generateVideo = (comp: ComponentContentVideo, idx) => {
  return (
    <Padding l key={idx}>
      <Box row center>
        <video
          controls
          src={`${LOCAL_CMS}${comp.video.data.attributes.url}`}
          width={500}
        />
      </Box>
    </Padding>
  )
}
