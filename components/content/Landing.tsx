import { styled } from "../../styles/stitches.config"
import HeroText from "../content/HeroText"
import Logos from "../content/Logos"
import Box from "../layout/Box"

const Wrapper = styled(Box, {
  "scroll-snap-align": "start",
  minHeight: "100vh",
})

export default () => {
  return (
    <Wrapper column center space-between>
      <HeroText />
      <Logos />
    </Wrapper>
  )
}
