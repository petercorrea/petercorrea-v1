import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import useScrollDirection from "../../../hooks/useScrollDirection"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Button from "./Button"
import StyledLink from "./StyledLink"

const MobileNavbar = styled(Box, {
  flexDirection: "column",
  // border: "red solid 1px",
  position: "fixed",
  top: "-150px",
  zIndex: 10,
  backgroundColor: "#ffffffd5",
  backdropFilter: "blur(4px)",

  "@bp1": {
    display: "flex",
  },
  "@bp2": {
    display: "none",
  },
  "@bp3": {
    display: "none",
  },

  "#hamburger": {
    width: "40px",
    height: "40px",

    "&:hover": {
      cursor: "pointer",
    },
  },

  "#resume": {
    fontSize: "$m",
  },

  a: {
    color: "$black",
    fontSize: "$xxl",
  },

  ul: {
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-end",
    padding: "$m",
  },

  li: {
    width: "fit-content",
  },

  variants: {
    show: {
      true: {
        top: "0px",
        transition: "top 200ms ease",
      },
    },
  },
})

const TopBar = styled(Box, {
  padding: "$m $l",
  // border: "red solid 2px",
  justifyContent: "flex-end",

  "&>*": {
    marginLeft: "$l",
  },
})

const Links = styled(Box, {
  display: "none",
  height: "calc(100vh - 50px)",

  variants: {
    show: {
      true: {
        display: "flex",
      },
    },
  },
})

export default () => {
  const [isVisible, setVisible] = useState(false)
  const toggleMenu = () => {
    setVisible(!isVisible)
  }

  const closeMenu = () => {
    setVisible(false)
  }

  const scrollDirection = useScrollDirection({
    initialDirection: "down",
    thresholdPixels: 50,
    off: false,
  })

  return (
    <MobileNavbar show={scrollDirection === "down" ? false : true}>
      <TopBar row>
        <Button onClick={() => {}}>
          <a download href="./Peter Correa CV.pdf" id="resume">
            resume
          </a>
        </Button>

        <HamburgerMenuIcon id="hamburger" onClick={toggleMenu} />
      </TopBar>

      <Links show={isVisible} right border>
        <ul>
          <li onClick={closeMenu}>
            <StyledLink href="/#bio">bio</StyledLink>
          </li>
          <li onClick={closeMenu}>
            <StyledLink href="/#experience">xp</StyledLink>
          </li>
          <li onClick={closeMenu}>
            <StyledLink href="https://www.google.com">github</StyledLink>
          </li>
          <li onClick={closeMenu}>
            <StyledLink href="https://www.google.com">linkedin</StyledLink>
          </li>
        </ul>
      </Links>
    </MobileNavbar>
  )
}
