import { styled } from "../../stitches.config"
import Box from "../layout/Box"
import Block from "../layout/Block"

const Wrapper = styled("div", {
  width: "800px",
  margin: "auto",
})

export default () => {
  return (
    <Wrapper>
      <h1>BIG Header</h1>
      <h2>This is a Subheader H2</h2>
      <h3>This is a Subheader H3</h3>
      <h4>This is a Subheader H4</h4>
      <h5>This is a Subheader H5</h5>
      <h6>This is a Subheader H6</h6>
      <p>This is a paragraph and owhef</p>
      <p className="hightlight"> somewordher </p>
      <p>
        This is a paragraph and junk jdhgfo aph and dsfh adfhadefrha aseghas
        frhg swerhg sdfbh erh aerh jdhgfo aoifn fweihf ouaoifn fweihf ouahouef
        oewfhowe owhef
      </p>
      <p className="strike">somewordher </p>
      <p>
        This is a paragraph and dsfh adfhadefrha aseghas frhg swerhg sdfbh erh
        aerh jdhgfo aoifn fweihf ouahou
      </p>
      <p className="bold">somewordher </p>
      <p>
        This is a paragraph and junph and dsfh adfhadefrha aseghas frhg swerhg
        sdfbh erh aerh jdhgfo aoifn fweihf ouak jdhgfo aoifn fweihf ouahouef
        oewfhowe owhef
      </p>
      <p className="code">{`function some = () => {}`}</p>
      <p>
        This is a paragraph and junk jdhgfo aoifn fweihf ouahouef oewfhowe owhef
      </p>
      <p>
        This is a paragraph and junk jdhgfo aoifn fweihf ouahouef oewfhowe owhef
        This is a paragraph and junk jdhgfo aoifn fweihf ouahouef oewfhowe owhef
        This is a paragraph and junk jdhgfo aoifn fweihf ouahouef oewfhowe owhef
        This is a paragraph and junk jdhgfo aoifn fweihf ouahouef oewfhowe owhef
        This is a paragraph and junk jdhgfo aoifn fweihf ouahouef oewfhowe owhef
        This is a paragraph and junk jdhgfo aoifn fweihf ouahouef oewfhowe owhef
      </p>
      <Box border child-border column>
        <Block>Text</Block>
        <Block>Text</Block>
        <Block>Text</Block>
      </Box>
    </Wrapper>
  )
}
