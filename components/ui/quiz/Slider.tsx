import { styled } from "../../../stitches.config"

const Wrapper = styled("div", {
  width: "300px",
  height: "20px",
  margin: "0px 10px",

  ".slideContainer": {
    width: "100%" /* Width of the outside container */
  },

  ".slider": {
    "-webkit-appearance": "none" /* Override default CSS styles */,
    appearance: "none",
    width: "100%",
    height: "5px",
    background: "$blue",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "$light"
  },

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  ".slider::-webkit-slider-thumb": {
    "-webkit-appearance": "none",
    appearance: "none",
    width: "25px",
    height: "25px",
    background: "$white",
    cursor: "pointer",
    borderRadius: "50%",
    border: "$border-light",
    boxShadow: "$light"
  },

  ".slider::-moz-range-thumb": {
    width: "25px",
    height: "25px",
    background: "$green",
    cursor: "pointer",
    borderRadius: "50%"
  }
})

export default () => {
  return (
    <Wrapper className="slideContainer">
      <input
        className="slider"
        type="range"
        min="1"
        max="100"
        id="myRange"
        defaultValue={50}
      ></input>
    </Wrapper>
  )
}
