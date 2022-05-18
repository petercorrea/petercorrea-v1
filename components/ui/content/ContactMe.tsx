import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import content from "../../../content.json"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"
import Button from "../components/Button"
import Tags from "./Tags"

const Wrapper = styled(Box, {
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
    width: "30px",
    height: "30px",
    color: "$blue",
    marginRight: "$l",
    transform: "translateY(0px)",
    "&:hover": {
      transform: "translateY(-10px)",
      transition: "transform 100ms ease",
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
                blue="false"
                list={[
                  "javascript",
                  "typescript",
                  "graphql",
                  "react",
                  "strapi",
                  "express",
                  "postgres",
                  "sql",
                  "sequalize",
                  "ui design",
                  "html",
                  "css"
                ]}
              />
              <Padding>
                <IconGroup>
                  <div id="iconPair">
                    <Icon>
                      <a href="https://www.github.com/petercorrea">
                        <GitHubLogoIcon></GitHubLogoIcon>
                      </a>
                    </Icon>

                    <Icon>
                      <a href="https://www.linkedin.com/in/petercorrea">
                        <LinkedInLogoIcon></LinkedInLogoIcon>
                      </a>
                    </Icon>
                  </div>

                  <Button onClick={() => {}}>
                    <a href="mailto:pmcorrea@.com?subject=Reaching out from your website...">
                      Contact Me
                    </a>
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
