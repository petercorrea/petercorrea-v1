import { styled } from "../../styles/stitches.config"

const Wrapper = styled("div", {
  height: "100px",
  width: "100px",
  minHeight: "100px",
  minWidth: "100px",
  backgroundColor: "$lightgray",
  border: "$border-dark",
})

export default (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}
