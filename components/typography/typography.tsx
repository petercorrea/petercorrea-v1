import { styled } from "../../stitches.config"
import Block from "../layout/Block"
import Box from "../layout/Box"
import Padding from "../layout/Padding"
import Button from "../ui/components/Button"
import Href from "../ui/components/Href"

const Wrapper = styled("div", {
  width: "100%",
  margin: "auto"
})

export default () => {
  return (
    <Padding l>
      <Wrapper>
        <h1>Header</h1>
        <h2>Subheader H2</h2>
        <h3>Subheader H3</h3>
        <h4>Subheader H4</h4>
        <h5>Subheader H5</h5>
        <h6>Subheader H6</h6>
        <p>This is a paragraph text. This is a paragraph text.</p>
        <br />
        <p className="hightlight">This is a highlight text.</p>
        <br />
        <p className="bold">This is a bold text.</p>
        <br />
        <p className="caption">This is a caption text.</p>
        <br />
        <p className="code">{`This is mono text const func = () => { 
          return >=
        }`}</p>
        <br />
        <br />

        <Href href="https://www.google.com">This is a Link</Href>
        <Href href="https://www.google.com">Link</Href>

        <Button>Submit</Button>
        <br />
        <br />
        <Box border row right>
          <Block>Text</Block>
          <Block>Text</Block>
          <Block>Text</Block>
        </Box>
      </Wrapper>
    </Padding>
  )
}
