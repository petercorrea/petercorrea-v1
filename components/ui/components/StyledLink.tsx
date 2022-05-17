import Link from "next/link"
import { styled } from "../../../stitches.config"

const Wrapper = styled("div", {
  fontSize: "1.1rem",
  color: "$black",
  textDecoration: "none",
  maxWidth: "fit-content",

  ".link_underline": {
    border: "$active solid 1px",
    width: "0px",
    transition: "width ease 200ms, opacity ease 300ms",
    opacity: "0",
  },

  "&:hover": {
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
