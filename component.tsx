import Box from "./components/layout/Box"
import Padding from "./components/layout/Padding"
import { styled } from "./stitches.config"

const Wrapper = styled(Box, {
  "@bp1": {},

  "@bp2": {},

  "@bp3": {},
})

export default ({ children }) => {
  return (
    <Wrapper>
      <Padding>
        <Box>{children}</Box>
      </Padding>
    </Wrapper>
  )
}
