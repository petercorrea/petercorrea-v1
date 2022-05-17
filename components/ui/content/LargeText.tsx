import { styled } from "../../../stitches.config"

export default styled("h1", {
  // border: "blue solid 5px",
  zIndex: 9,
  // fontSize: "$l",
  letterSpacing: "-8px",
  lineHeight: "100%",

  "@bp1": {
    // fontSize: "$l",
    letterSpacing: "-5px",
    lineHeight: "100%",
  },
  "@bp2": {
    // fontSize: "$l",
    // letterSpacing: "-10px",
    lineHeight: "100%",
  },
  "@bp3": {
    // fontSize: "$l",
    // letterSpacing: "-10px",
    lineHeight: "100%",
  },
})
