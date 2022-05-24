import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"

const Wrapper = styled(Box, {
  maxWidth: "1$xl",
  button: {
    width: "100%",
  },
})

type ButtonProps = {
  onClick: () => void
  children?: React.ReactNode
}

export default ({ onClick, children }: ButtonProps) => {
  return (
    <Wrapper row>
      <button onClick={onClick}>{children}</button>
    </Wrapper>
  )
}
