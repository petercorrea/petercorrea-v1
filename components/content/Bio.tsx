import content from "../../constants/content.json"
import Headshot from "../../public/design/headshot.png"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Image from "../ui/Image"

const Wrapper = styled(Box, {
  height: "100vh",
  "scroll-snap-align": "start",
})

const ImageWrapper = styled(Box, {
  // border: "2px solid black",
  height: "600px",
  "min-width": "400px",
  position: "relative",
  display: "block",
  marginTop: "10px",
  marginRight: "40px",
  boxShadow: "$light",
})

const BioWrapper = styled(Box, {})

export default () => {
  return (
    <Padding id="bio" l>
      <Wrapper row center className="bio">
        <div>
          <h1>bio</h1>
          <Box row center>
            <ImageWrapper>
              <Image
                src={Headshot}
                alt="headshot of Peter"
                objectFit="cover"
                priority
              ></Image>
            </ImageWrapper>
            <BioWrapper center>
              <p>{content.biography["0"]}</p>
              <br></br>
              <br></br>
              <br></br>
              <p>{content.biography["1"]}</p>
            </BioWrapper>
          </Box>
        </div>
      </Wrapper>
    </Padding>
  )
}
