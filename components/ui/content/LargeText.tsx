import { styled } from "../../../styles/stitches.config"

export default styled("h1", {
  zIndex: 9,
  letterSpacing: "-8px",
  lineHeight: "100%",

  "@bp1": {
    letterSpacing: "-5px",
    lineHeight: "100%",
  },
  "@bp2": {
    lineHeight: "100%",
  },
  "@bp3": {
    lineHeight: "100%",
  },
})
