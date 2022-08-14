import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import content from "../../constants/content.json"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Button from "../ui/Button"
import Tags from "../ui/Tags"

const Wrapper = styled(Box, {
  "scroll-snap-align": "start",
  color: "$white",
  paddingBottom: "$xl",

  "& > *": {
    color: "$white",
    "& > *": {
      color: "$white",
    },
  },

  "#contactMeText": {
    marginBottom: "$s",
  },

  "@bp2": {
    maxWidth: "66%",
  },
})

const BlackBox = styled(Box, {
  backgroundColor: "black",
})

const Icon = styled(Box, {
  svg: {
    width: "$xl",
    height: "$xl",
    color: "$blue",
    marginRight: "$l",
    "&:hover": {
      transform: "translateY(-5px)",
      transition: "transform 200ms ease",
    },
  },
})

const IconGroup = styled(Box, {
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",

  "#iconPair": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
})

export default () => {
  return (
    <BlackBox>
      <Padding l>
        <Wrapper column>
          <h1>contact</h1>
          <br></br>

          <Box>
            <Box id="contactMeText">
              <p>{content.contactMe.text}</p>
            </Box>

            <Box column>
              <Tags
                list={[
                  "javascript",
                  "typescript",
                  "graphql",
                  "react",
                  "NextJs",
                  "SolidJs",
                  "Svelte",
                  "html",
                  "css",
                  "sass",
                  "styled-components",
                  "strapi",
                  "NodeJs",
                  "express",
                  "postgres",
                  "sql",
                  "sequalize",
                  "jest",
                  "webpack",
                  "babel",
                ]}
              />
              <Padding>
                <IconGroup>
                  <div id="iconPair">
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
                  </div>

                  <Button
                    onClick={() => {
                      return
                    }}
                  >
                    <a href={content.links.email}>Contact Me</a>
                  </Button>
                </IconGroup>
              </Padding>
            </Box>
          </Box>
        </Wrapper>
      </Padding>
    </BlackBox>
  )
}
