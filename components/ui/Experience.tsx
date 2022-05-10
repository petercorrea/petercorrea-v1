import content from "../../content.json"
import { styled } from "../../stitches.config"
import Box from "../layout/Box"

const Row = styled(Box, {
  width: "100%",
  height: "min-content",
  justifyContent: "space-between",
})

const Item = styled(Box, {
  width: "auto",
  maxWidth: "400px",
  flexBasis: "25%",
})

const LongItem = styled(Box, {
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "auto",
  maxWidth: "500px",
  flexBasis: "50%",
})

const RenderBulletPoints = (content) => {
  let items = content.experience
  let points = []

  // generate each item in row
  for (let item of items) {
    points = []
    for (let idx in item["bullet-points"]) {
      points.push(<Box>{item["bullet-points"][idx]}</Box>)
    }
  }
  return points
}

export default () => {
  let items = content.experience
  let html = []

  // generate each row
  for (let item of items) {
    html.push(
      <Row row>
        <Item column>
          <Box>{item.years}</Box>
          <Box>{item.skills}</Box>
        </Item>
        <Item column>
          <Box>{item.company}</Box>
          <Box>{item.title}</Box>
        </Item>
        <LongItem>{RenderBulletPoints(content)}</LongItem>
      </Row>
    )
  }

  return <Box>{html}</Box>
}
