import content from "../../../content.json"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"
import Href from "../components/Href"
import Tags from "./Tags"

const Wrapper = styled(Box, {
  color: "$white",
  "& > *": {
    color: "$white",
    "& > *": {
      color: "$white",
    },
  },

  "@bp1": {},
  "@bp2": {},
  "@bp3": {
    ".tagsAndButton": {
      flexFlow: "row nowrap",
    },
  },
})

const BlackBox = styled(Box, {
  backgroundColor: "black",
})

export default () => {
  return (
    <BlackBox>
      <Padding l>
        <Wrapper column className="bio">
          <h1>contact</h1>
          <br></br>

          <Box>
            <Box>
              <p>{content.contactMe.text}</p>
            </Box>

            <Box row>
              <Tags
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
              <Box row right>
                <Href href="mailto:pmcorrea@.com?subject=Reaching out from your website...">
                  Contact Me
                </Href>
              </Box>
            </Box>
          </Box>
        </Wrapper>
      </Padding>
    </BlackBox>
  )
}
