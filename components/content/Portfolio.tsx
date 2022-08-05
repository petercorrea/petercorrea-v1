import { GitHubLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Image from "../ui/Image"

const OuterWrapper = styled(Box, {
  "scroll-snap-align": "start",
  marginTop: "80px",
})

const Wrapper = styled(Box, {
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between",
})

const Item = styled(Box, {
  boxShadow: "$light",
  marginBottom: "$xl",
  padding: "$l",
  transition: "transform ease 200ms",

  "&:hover": {
    transform: "translateY(-10px)",
    cursor: "pointer",
  },

  p: {
    display: "block",
  },

  "#description": {
    color: "$black",
    marginBottom: "$m",
    lineHeight: "$xs",
  },
  "#title": {
    color: "$blue",
    fontSize: "$m",
  },

  "@bp1": {
    flexBasis: "80%",
    margin: "$l auto",

    h5: {
      fontSize: "$l",
      marginBottom: "$m",
    },

    p: {
      lineHeight: "$s",
    },
  },
  "@bp2": {
    margin: "$l",
    flexBasis: "40%",

    h5: {
      fontSize: "$l",
      marginBottom: "$m",
    },
  },
  "@bp3": {
    h5: {
      fontSize: "$m",
      marginBottom: "$m",
    },
  },
})

const Icon = styled(Box, {
  display: "flex",
  marginBottom: "$s",
  svg: { width: "$xl", height: "$xl", color: "$gray" },
})

const ImageWrapper = styled(Box, {
  height: "150px",
})

export default ({ items }) => {
  const html = items.map((item, idx) => {
    return (
      <Item key={idx}>
        <a href={item.url}>
          <Icon right>
            {item.type == "presentation" ? (
              <VideoIcon></VideoIcon>
            ) : (
              <GitHubLogoIcon></GitHubLogoIcon>
            )}
          </Icon>

          <h5 id="title">{item.title}</h5>
          <p id="description">{item.description}</p>

          {item.type == "presentation" ? (
            <ImageWrapper>
              <Image
                src={item.image}
                alt="thumbnail of video"
                objectFit="cover"
                priority
              ></Image>
            </ImageWrapper>
          ) : (
            ""
          )}
        </a>
      </Item>
    )
  })

  return (
    <OuterWrapper>
      <Padding l>
        <h1>portfolio</h1>
        <Wrapper>{html}</Wrapper>
      </Padding>
    </OuterWrapper>
  )
}
