import Box from "../layout/Box"
import Link from "next/link"
import { styled } from "../../stitches.config"

const NavBar = styled("div", {
  border: "solid red 1px",

  ul: {
    width: "100%",
    border: "solid white 1px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    li: {
      border: "solid black 1px",
      display: "block",
      padding: "5px",
      marginLeft: "5px",
      width: "100px",
      textAlign: "center",

      "&:hover": {
        fontWeight: "bold",
        cursor: "pointer"
      }
    }
  }
})

export default () => {
  return (
    <NavBar>
      <Box row>
        <ul>
          <li>
            <Link href="/">
              <p>home</p>
            </Link>
          </li>
          <li>
            <Link href="/#bio">
              <p>bio</p>
            </Link>
          </li>
          <li>
            <Link href="/#experience">
              <p>experience</p>
            </Link>
          </li>
          <li>
            <Link href="/afk">
              <p>afk</p>
            </Link>
          </li>
        </ul>
      </Box>
    </NavBar>
  )
}
