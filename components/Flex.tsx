import { styled } from "../stitches.config"

const Flex = styled("div", {
  display: "block",
  width: "auto",
  height: "100%",
  padding: "10px",
  backgroundColor: "$green500",
  color: "black",

  variants: {
    row: {
      true: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-evenly",
        alignItems: "center"
      }
    },
    column: {
      true: {
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "space-evenly",
        alignItems: "center"
      }
    }
  }
})

export default (props) => {
  return <Flex {...props}>{props.children}</Flex>
}
