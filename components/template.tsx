import { styled } from "../stitches.config"
import Box from "./layout/Box"
import Padding from "./layout/Padding"

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
