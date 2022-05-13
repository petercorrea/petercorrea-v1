import Box from "../layout/Box"
import Link from "next/link"
import { styled } from "../../stitches.config"
import { Drawer, DrawerButton } from "../layout/Drawer"

const SubnavBar = styled(Box, {
  width: "min-content",

  ul: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",

    li: {
      display: "block",
      width: "80px",
      textAlign: "center",

      "& > p:hover": {
        fontSize: "1.2rem",
        fontWeight: "500",
        cursor: "pointer",
        color: "#008cff",
      },
      "& > p": {
        marginBottom: "0px",
      },
    },
  },
})

export default () => {
  return (
    <SubnavBar row>
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
        <li key="SubnavBar_4">
          <DrawerButton></DrawerButton>
        </li>
      </ul>
    </SubnavBar>
  )
}
