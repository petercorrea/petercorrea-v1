import content from "../../../content.json"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"

const Wrapper = styled(Box, {})

export default () => {
  return (
    <Padding id="bio" l>
      <Wrapper column className="bio">
        <h1>bio</h1>
        <p>{content.biography["0"]}</p>
        <br></br>
        <p>{content.biography["1"]}</p>
      </Wrapper>
    </Padding>
  )
}
