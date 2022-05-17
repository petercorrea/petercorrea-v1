import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"

const Wrapper = styled(Box, {
  width: "fit-content",

  button: {
    borderRadius: "5px",
    // border: "$blue solid 2px",
    backgroundColor: "$white",
    color: "$blue",
    transition: "transform 80ms ease-in",
    boxShadow: "$lightblue",

    "&:hover": {
      backgroundColor: "$blue",
      color: "$white",
      transform: "translateY(-3px)",
      a: {
        color: "$white",
      },
    },
  },

  a: {
    padding: "10px",
    color: "$blue",
  },

  "a:hover": {
    color: "$white",
  },
})

export default ({ onClick, children }) => {
  return (
    <Wrapper row>
      <button onClick={onClick}>{children}</button>
    </Wrapper>
  )
}
