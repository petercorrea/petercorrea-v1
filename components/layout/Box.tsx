import { styled } from "../../stitches.config"

const Box = styled("div", {
  position: "relative",
  display: "block",
  width: "auto",
  height: "100%",
  color: "black",
  border: "solid black 1px",

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
    },
    HStack: {
      true: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "left",
        alignItems: "center"
      }
    }
  }
})

export default (props) => {
  return <Box {...props}>{props.children}</Box>
}
