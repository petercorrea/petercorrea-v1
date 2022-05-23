import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"

const Wrapper = styled(Box, {
  maxWidth: "150px",
  button: {
    width: "100%",
  },
})

export default ({ onClick, children }) => {
  return (
    <Wrapper row>
      <button onClick={onClick}>{children}</button>
    </Wrapper>
  )
}
