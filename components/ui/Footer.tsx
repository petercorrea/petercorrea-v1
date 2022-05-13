import { styled } from "../../stitches.config"
import Box from "../layout/Box"

// Marketing
const Container = styled(Box, {
  width: "100%",
  height: "400px",
  backgroundColor: "#eeeeee48",

  "& > * ": {
    width: "100%",
    height: "400px",
    // backgroundColor: "pink",
    margin: "15px 15px",
  },
})

const ContactStyle = styled(Box, {
  //   border: "black solid 1 px",
  color: "red",
  textAlign: "center",
  verticalAlign: "center",
  height: "100%",
  backgroundColor: "black",
  color: "white",

  "& > * ": {
    color: "white",
  },
})

const ContactMe = () => {
  return (
    <a href="mailto:pmcorrea@me.com?subject=Hey! Came across your website...">
      <ContactStyle column full>
        <h2>Contact</h2>
        <h2>Contact me to explore opportunities</h2>
        <h2>Click Here</h2>
      </ContactStyle>
    </a>
  )
}

// Footer Links
const FooterLinkWrapper = styled(Box, {
  //   backgroundColor: "orange",
  height: "100px",
  textAlign: "center",
  border: "blue solid 1px",

  "& > a": {
    height: "50px",
    border: "solid red 1px",
    color: "black",
  },

  "a:hover": {
    color: "black",
    fontWeight: "900",
  },
})

const FooterLink = (props) => {
  return (
    <FooterLinkWrapper {...props} column>
      <a {...props}>{props.children}</a>
    </FooterLinkWrapper>
  )
}

export default () => {
  return (
    <Container row full>
      <Box>
        <ContactMe></ContactMe>
      </Box>
      <Box row>
        <Box column space-evenly full>
          <FooterLink href="https://www.google.com">Google</FooterLink>
          <FooterLink href="https://www.google.com">Google</FooterLink>
          <FooterLink href="https://www.google.com">Google</FooterLink>
        </Box>
        <Box column space-evenly full>
          <FooterLink href="https://www.google.com">Google</FooterLink>
          <FooterLink href="https://www.google.com">Google</FooterLink>
          <FooterLink href="https://www.google.com">Google</FooterLink>
        </Box>
      </Box>
    </Container>
  )
}
