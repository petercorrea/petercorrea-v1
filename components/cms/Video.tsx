import { LOCAL_CMS } from "../../constants/constants"
import { ComponentContentVideo } from "../../generated"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const VideoWrapper = styled("video", {
  maxWidth: "$max",
})

export const generateVideo = (comp: ComponentContentVideo, idx) => {
  return (
    <Padding l key={idx}>
      <Box row center>
        <VideoWrapper
          controls
          src={`${LOCAL_CMS}${comp.video.data.attributes.url}`}
          width={"100%"}
        />
      </Box>
    </Padding>
  )
}
