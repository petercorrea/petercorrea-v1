import Box from "../../components/layout/Box"
import { styled } from "../../stitches.config"
import Padding from "../layout/Padding"
import Button from "./atomics/Button"
import Tags from "./Tags"

const Wrapper = styled(Box, {
  color: "white",
  "& > *": {
    color: "white",
    "& > *": {
      color: "white",
      margin: "0px 20px",
    },
  },
})

const BlackBox = styled(Box, {
  backgroundColor: "black",
})

const Row = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  //   border: "solid red 1px",

  "& > *": {
    // border: "solid yellow 1px",
  },
})

export default () => {
  return (
    <BlackBox>
      <Padding>
        <Wrapper column className="bio">
          <h1>contact</h1>
          <br></br>
          <Row>
            <Box>
              <p>
                I build software. My work requires discussing the scope and goal
                of each solution, sharing tradeoffs between different
                implementations, establishing milestones, and deploying
                high-quality code. A typical day involves optimizing algorithmic
                and network performance, deploying servers, migrating databases,
                integrating APIs, building machine learning models, interviewing
                candidates, collaborating with designers, presenting to
              </p>
            </Box>
            <Box column>
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
              ></Tags>
              <Button
                text="Contact Me"
                href="mailto:pmcorrea@.com?subject=Reaching out from your website..."
                onClick={() => {}}
              />
            </Box>
          </Row>
        </Wrapper>
      </Padding>
    </BlackBox>
  )
}
