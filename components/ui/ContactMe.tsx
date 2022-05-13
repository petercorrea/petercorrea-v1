import Box from "../../components/layout/Box"
import Padding from "../layout/Padding"
import { styled } from "../../stitches.config"

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

const SubmitButtonWrapper = styled(Box, {
  justifyContent: "center",
  alignItems: "center",

  a: {
    height: "min-content",
  },

  button: {
    minWidth: "200px",
    height: "40px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#008cff",
    color: "white",
    fontSize: "1.1rem",
    transition: "transform 80ms ease-in",
    boxShadow: "0px 0px 15px 2px #008cff",
    fontWeight: "300",

    "&:hover": {
      backgroundColor: "#008cff",
      color: "white",
      transform: "translateY(-3px)",
    },
  },
})

const ContactMeButton = ({ onClick }) => {
  return (
    <SubmitButtonWrapper row>
      <a href="mailto:pmcorrea@me.com?subject=Reaching out from your website...">
        <button onClick={onClick}>Contact Me</button>
      </a>
    </SubmitButtonWrapper>
  )
}

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
            <Box column space-between full>
              <p>
                I build software. My work requires discussing the scope and goal
                of each solution, sharing tradeoffs between different
                implementations, establishing milestones, and deploying
              </p>
              <ContactMeButton />
            </Box>
          </Row>
        </Wrapper>
      </Padding>
    </BlackBox>
  )
}
