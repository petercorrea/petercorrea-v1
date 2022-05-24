import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import content from "../../constants/content.json"
import useScrollDirection from "../../hooks/useScrollDirection"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Button from "./Button"
import StyledLink from "./StyledLink"

const Wrapper = styled(Box, {
  position: "fixed",
  top: "-150px",
  right: "0px",
  left: "0px",
  width: "100%",
  zIndex: "10",
  backgroundColor: "#ffffffd5",
  backdropFilter: "blur(4px)",
  borderShadow: "$dark",
  transition: "top 200ms ease",

  variants: {
    show: {
      true: {
        top: "0px",
        transition: "top 200ms ease",
      },
    },
  },

  "@bp1": {
    display: "none",
  },
  "@bp2": {
    display: "flex",
  },
  "@bp3": {
    display: "flex",
  },
})

const Navbar = styled(Box, {
  alignItems: "center",
  justifyContent: "right",
  "&>*": { marginRight: "20px" },
  background: "transparent",
})

const Icon = styled(Box, {
  maxWidth: "fit-content",
  marginRight: "$l",
  svg: {
    width: "30px",
    height: "30px",
    color: "$black",
    margin: "0px",
    transform: "translateY(0px)",
    "&:hover": {
      color: "$blue",
      transform: "translateY(-5px)",
      transition: "transform 100ms ease-in",
    },
  },
})

export default () => {
  const scrollDirection = useScrollDirection({
    initialDirection: "up",
    thresholdPixels: 50,
    off: false,
  })

  return (
    <Wrapper right show={scrollDirection === "down" ? false : true}>
      <Padding l>
        <Navbar row>
          <Box row>
            <Icon>
              <a href={content.links.github}>
                <GitHubLogoIcon></GitHubLogoIcon>
              </a>
            </Icon>

            <Icon>
              <a href={content.links.in}>
                <LinkedInLogoIcon></LinkedInLogoIcon>
              </a>
            </Icon>
          </Box>

          <>
            <StyledLink href="/#bio">bio</StyledLink>
            <StyledLink href="/#experience">xp</StyledLink>
            <StyledLink href="/posts">posts</StyledLink>
            <StyledLink href="/afk">afk</StyledLink>
            <Button onClick={() => {}}>
              <a download href="./Peter Correa CV.pdf">
                resume.pdf
              </a>
            </Button>
          </>
        </Navbar>
      </Padding>
    </Wrapper>
  )
}