import { styled } from "@stitches/react"

const Box = styled("div", {
  backgroundColor: "lightblue",
  border: "solid black 1px",
  padding: "10px",
  display: "block",
  width: "auto",
  height: "100%",
  margin: "10px"
})

export default ({ children }) => {
  return <Box>{children}</Box>
}
