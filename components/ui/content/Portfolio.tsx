import { GitHubLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"

const Wrapper = styled(Box, {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  //   justifyContent: "flex-start",
  //   alignItems: "flex-start",
})

const Item = styled(Box, {
  marginRight: "40px",
  border: "black solid 4px",
  boxShadow: "15px 15px 0px 0px black",
  marginBottom: "$xl",
  padding: "$l",
  transition: "transform ease 200ms",

  "&:hover": {
    transform: "translateY(-20px)",
    cursor: "pointer",
  },

  p: {
    display: "block",
  },

  "#description": {
    color: "$black",
  },
  "#title": {
    color: "$blue",
    // fontSize: "$l",
  },
  "#url": {
    // color: "red",
  },

  video: {
    maxWidth: "100%",
  },

  "@bp1": {
    flexBasis: "80%",
    margin: "20px auto",

    h5: {
      fontSize: "$l",
      marginBottom: "$m",
    },

    p: {
      lineHeight: "20px",
    },
  },
  "@bp2": {
    margin: "20px auto",
    flexBasis: "40%",

    h5: {
      fontSize: "$l",
      marginBottom: "$m",
    },

    p: {
      lineHeight: "20px",
    },
  },
  "@bp3": {
    margin: "20px auto",
    flexBasis: "40%",

    h5: {
      fontSize: "$m",
      marginBottom: "$m",
    },

    p: {
      lineHeight: "20px",
    },
  },
})

const Icon = styled(Box, {
  svg: { width: "50px", height: "50px", color: "$gray" },
})

export default ({ items }) => {
  let html = items.map((item, idx) => {
    return (
      <Item key={idx}>
        <a href={item.url}>
          <Icon>
            {item.type == "presentation" ? (
              <VideoIcon></VideoIcon>
            ) : (
              <GitHubLogoIcon></GitHubLogoIcon>
            )}
          </Icon>

          <h5 id="title">{item.title}</h5>
          <p id="description">{item.description}</p>

          {item.type == "presentation" ? (
            <video id="video" src={item.url} controls></video>
          ) : (
            ""
          )}
        </a>
      </Item>
    )
  })

  return (
    <Padding>
      <h1>portfolio</h1>
      <Wrapper>{html}</Wrapper>
    </Padding>
  )
}
