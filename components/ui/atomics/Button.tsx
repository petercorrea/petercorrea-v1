import Box from "../../layout/Box"
import { styled } from "../../../stitches.config"

const Wrapper = styled(Box, {
  justifyContent: "center",
  alignItems: "center",

  a: {
    height: "min-content",
  },

  button: {
    // minWidth: "100px",
    padding: "0px 20px",
    height: "40px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#008cff",
    color: "white",
    fontSize: "1.1rem",
    transition: "transform 80ms ease-in",
    boxShadow: "0px 0px 10px 2px #008cff8f",
    fontWeight: "300",

    "&:hover": {
      backgroundColor: "#008cff",
      color: "white",
      transform: "translateY(-3px)",
    },
  },
})

export default ({ onClick, text, href, }) => {
  return (
    <Wrapper row>
      <a href={href}>
        <button onClick={onClick}>{text}</button>
      </a>
    </Wrapper>
  )
}
