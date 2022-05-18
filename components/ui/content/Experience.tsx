import content from "../../../content.json"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import Padding from "../../layout/Padding"
import Bullets from "./Bullets"
import Tags from "./Tags"

const Wrapper = styled(Box, {
  marginBottom: "$xxl",
  display: "flex",
  "flex-direction": "row",
  "align-items": "flex-start",
  h6: {
    marginBottom: "$s",
  },

  "@bp1": {
    "flex-direction": "column",
  },
  "@bp2": { "flex-direction": "column" },
  "@bp3": { "flex-direction": "column" },
})

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexBasis: "80%",
})

export default () => {
  let items = content.experience
  let html = []

  // generate each row
  for (let idx in items) {
    html.push(
      <Wrapper>
        <Column>
          <h2>{items[idx].company}</h2>
          <h3>{items[idx].title}</h3>
          {/* <h6>{items[idx].years}</h6> */}
          <Tags list={items[idx].skills} blue />
        </Column>

        <Box column>
          <h6>{items[idx].team}</h6>
          <Bullets items={items[idx]["bullet-points"]}></Bullets>
        </Box>
      </Wrapper>
    )
  }

  return (
    <Padding id="experience" l>
      <Box column>
        <h1>work</h1>
        {html}
      </Box>
    </Padding>
  )
}
