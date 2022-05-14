import Link from "next/link"
import { styled } from "../../stitches.config"
import Box from "../layout/Box"
import Button from "./atomics/Button"

const Navbar = styled(Box, {
  padding: "20px 20px",
  position: "sticky",
  top: "0px",
  left: "0",
  right: "0",
  backgroundColor: "white",
  zIndex: "10",
  borderBottom: "solid #2d2d2d34 1px",

  ul: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    // border: "solid red 1px",

    li: {
      display: "block",
      minWidth: "100px",
      textAlign: "center",

      p: {},

      "a:hover": {},

      "p:hover": {
        cursor: "pointer",
        color: "#008cff",
        textDecoration: "underline",
      },
    },
  },
})

export default () => {
  return (
    <Navbar>
      <ul>
        <li key="SubnavBar_0">
          <Link href="/">
            <p>home</p>
          </Link>
        </li>

        <li key="SubnavBar_1">
          <Link href="/#bio">
            <p>bio</p>
          </Link>
        </li>

        <li key="SubnavBar_2">
          <Link href="/#experience">
            <p>experience</p>
          </Link>
        </li>

        <li key="SubnavBar_3">
          <Link href="/afk">
            <p>afk</p>
          </Link>
        </li>

        <li key="ContactBar_0">
          <a href="https://www.github.com/petercorrea">
            <p>github</p>
          </a>
        </li>

        <li key="ContactBar_1">
          <a href="https://www.linkedin.com/in/petercorrea">
            <p>linkedin</p>
          </a>
        </li>

        <li key="ContactBar_2">
          <a href="mailto:pmcorrea@me.com?subject=PeterCorrea.com: reaching out...">
            <p>email</p>
          </a>
        </li>

        <li key="ContactBar_3">
          <Button href="./Peter Correa CV.pdf" text="resume"></Button>
        </li>

        {/* <li key="SubnavBar_4">
          <DrawerButton></DrawerButton>
        </li> */}
      </ul>
    </Navbar>
  )
}
