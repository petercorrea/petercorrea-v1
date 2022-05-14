import Box from "../../components/layout/Box"
import { styled } from "../../stitches.config"
import Padding from "../layout/Padding"

const Column = styled(Box, {
  // border: "solid red 1px",
  "min-height": "100%",
  // justifyContent: "flex-start",
})

const Row = styled(Box, {
  // border: "solid red 1px",
})

const Item = styled(Box, {
  // border: "solid blue 1px",
  alignSelf: "stretch",
  marginBottom: "60px",
})

export default () => {
  let date = new Date()
  return (
    <Padding>
      <Row row>
        <Item column>
          <h2>role</h2>
          <h4>software engineer</h4>
        </Item>
        <Item column>
          <h2>loction</h2>
          <h4>Miami, FLorida</h4>
        </Item>
      </Row>
      <Row row>
        <Item column>
          <h2>languages</h2>
          <h4>typescript, javascript, python, rust</h4>
        </Item>
        <Item column>
          <h2>skills</h2>
          <h4>react, graphql, postgres, nodejs, jest, </h4>
          <h4>fullstack, data structures and algorithms</h4>
        </Item>
      </Row>
    </Padding>
  )
}
