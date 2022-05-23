import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import content from "../../constants/content.json"
import useScrollDirection from "../../hooks/useScrollDirection"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Button from "./Button"
import StyledLink from "./StyledLink"

const MobileNavbar = styled(Box, {
  flexDirection: "column",
  position: "sticky",
  top: "-150px",
  bottom: "0px",
  zIndex: 10,
  backgroundColor: "#ffffffd5",
  backdropFilter: "blur(4px)",
  overflow: "hidden",
  transition: "top 200ms ease",

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
    color: "$white",
  },

  a: {
    color: "$blue",
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
    a: { color: "$black" },
  },

  variants: {
    show: {
      true: {
        top: "0px",
        transition: "top 200ms ease",
      },
    },

    open: {
      true: {
        height: "100vh",
        bottom: "0px",
        top: "0px",
      },
    },
  },
})

const TopBar = styled(Box, {
  padding: "$m $l",
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
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center",
      },
    },
  },
})

export default () => {
  const [isVisible, setVisible] = useState(false)
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setVisible(!isVisible)
    setOpen(!isOpen)
  }

  const closeMenu = () => {
    setVisible(false)
    setOpen(false)
  }

  const scrollDirection = useScrollDirection({
    initialDirection: "down",
    thresholdPixels: 50,
    off: false,
  })

  return (
    <MobileNavbar
      show={scrollDirection === "down" ? false : true}
      open={isOpen}
    >
      <TopBar row>
        <Button onClick={() => {}}>
          <a download href="./Peter Correa CV.pdf" id="resume">
            resume.pdf
          </a>
        </Button>

        <HamburgerMenuIcon id="hamburger" onClick={toggleMenu} />
      </TopBar>

      <Links show={isVisible} right>
        <ul>
          <li onClick={closeMenu} key="bio">
            <StyledLink href="/#bio">bio</StyledLink>
          </li>
          <li onClick={closeMenu} key="experience">
            <StyledLink href="/#experience">xp</StyledLink>
          </li>
          <li onClick={closeMenu} key="posts">
            <StyledLink href="/posts">posts</StyledLink>
          </li>
          <li onClick={closeMenu} key="afk">
            <StyledLink href="/afk">afk</StyledLink>
          </li>
          <li onClick={closeMenu} key="github">
            <StyledLink href={content.links.github}>github</StyledLink>
          </li>
          <li onClick={closeMenu} key="linkedin">
            <StyledLink href={content.links.in}>linkedin</StyledLink>
          </li>
        </ul>
      </Links>
    </MobileNavbar>
  )
}
