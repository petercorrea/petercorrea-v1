import content from "../../content.json"
import { styled } from "../../stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const Wrapper = styled(Box, {
  margin: "40px 0px",
  display: "flex",
  "flex-direction": "row",
  "align-items": "flex-start",
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
          <h5>{items[idx].years}</h5>
          <p>{items[idx].skills}</p>
        </Column>

        <Box column>
          <h6>{items[idx].team}</h6>
          <p>{items[idx]["bullet-points"].join(". ") + "."}</p>
        </Box>
      </Wrapper>
    )
  }

  return (
    <Padding>
      <Box column>
        <h1>experience</h1>
        {html}
      </Box>
    </Padding>
  )
}
