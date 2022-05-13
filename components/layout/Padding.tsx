import { styled } from "../../stitches.config"

const Wrapper = styled("div", {
  width: "100%",
  maxWidth: "1300px",
  padding: "80px 80px",
  margin: "auto",

  variants: {
    small: {
      true: {
        padding: "10px 10px",
      },
    },
    medium: {
      true: {
        padding: "40px 40px",
      },
    },
    large: {
      true: {
        padding: "80px 80px",
      },
    },
  },
})

export default (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>
}
