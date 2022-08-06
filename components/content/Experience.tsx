import content from "../../constants/content.json"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Bullets from "../ui/Bullets"
import Image from "../ui/Image"
import Tags from "../ui/Tags"

const Wrapper = styled(Box, {
  height: "100vh",
  marginBottom: "$xxxl",
  display: "flex",
  "flex-direction": "row",
  "align-items": "flex-start",
  "scroll-snap-align": "start",
  h3: {
    color: "$black",
  },
  h6: {
    marginBottom: "$s",
  },

  p: {
    color: "black",
    fontWeight: "300",
  },
  "#section-work": {
    // position: "absolute",
    // top: "-180px",
  },

  "@bp1": {
    "flex-direction": "column",
  },
  "@bp2": { "flex-direction": "column" },
  "@bp3": { "flex-direction": "column" },
})

const Column = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexBasis: "80%",
})

const ImageContainer = styled(Box, {
  position: "relative",
  width: "100px",
  height: "50px",
})

export default () => {
  const items = content.experience
  const html = []
  // generate each work experience
  for (const idx in items) {
    html.push(
      <Wrapper key={idx} center>
        <Box row>
          <Column>
            {idx === "0" ? <h1 id="section-work">work</h1> : ""}
            <h3>{items[idx].title}</h3>
            <h3>{items[idx].company}</h3>
            <p>{items[idx].years}</p>
            <Tags list={items[idx].skills} blue />
          </Column>

          {items[idx].logo ? (
            <ImageContainer>
              <Image
                src={items[idx].logo}
                objectFit="contain"
                // size="m"
                alt="logo"
                priority
              ></Image>
            </ImageContainer>
          ) : (
            ""
          )}
        </Box>
        <Box column>
          <Bullets items={items[idx]["bullet-points"]}></Bullets>
        </Box>
      </Wrapper>
    )
  }

  return (
    <Padding id="experience" l>
      {html}
    </Padding>
  )
}
