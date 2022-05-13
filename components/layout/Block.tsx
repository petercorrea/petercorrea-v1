import { styled } from "../../stitches.config"

const Wrapper = styled("div", {
  height: "100px",
  width: "100px",
  minHeight: "100px",
  minWidth: "100px",
  backgroundColor: "lightgray",
})

export default (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}
