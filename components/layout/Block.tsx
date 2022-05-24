import { styled } from "../../styles/stitches.config"

const Wrapper = styled("div", {
  height: "$xxxl",
  width: "$xxxl",
  minHeight: "$xxxl",
  minWidth: "$xxxl",
  backgroundColor: "$lightgray",
  border: "$border-dark",
})

export default (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}
