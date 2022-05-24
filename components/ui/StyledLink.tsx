import Link from "next/link"
import { styled } from "../../styles/stitches.config"

const Wrapper = styled("div", {
  position: "relative",

  color: "$black",
  textDecoration: "none",
  maxWidth: "fit-content",

  a: {
    fontSize: "$l",
  },

  ".link_underline": {
    border: "$active solid $xxxs",
    width: "$z",
    transition: "width ease 200ms, opacity ease 200ms",
    opacity: "0",
  },

  "&:hover": {
    transform: "translateY(-2px)",
    transition: "transform 300ms ease",

    ".link_underline": {
      maxWidth: "100%",
      border: "$active solid 1px",
      transition: "width ease 200ms",
      width: "100%",
      opacity: "1",
    },
  },
})

export default (props) => {
  return (
    <div className="link">
      <Wrapper>
        <Link href={props.href}>{props.children}</Link>
        <div className="link_underline"></div>
      </Wrapper>
    </div>
  )
}
