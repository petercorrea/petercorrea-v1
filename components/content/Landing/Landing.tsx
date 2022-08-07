import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"
import HeroText from "./HeroText"
import Logos from "./Logos"

const Wrapper = styled(Box, {
  "scroll-snap-align": "start",
  height: "100vh",
})

export default () => {
  return (
    <Wrapper column center space-between>
      <HeroText />
      <Logos />
    </Wrapper>
  )
}
