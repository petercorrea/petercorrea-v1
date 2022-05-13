import { styled } from "../../stitches.config"

const Wrapper = styled("div", {
  width: "300px",
  height: "20px",
  margin: "0px 10px",

  ".slidecontainer": {
    width: "100%" /* Width of the outside container */,
  },

  ".slider": {
    "-webkit-appearance": "none" /* Override default CSS styles */,
    appearance: "none",
    width: "100%",
    height: "5px",
    background: "#008cff",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 2px #5c5c5c2d",
  },

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  ".slider::-webkit-slider-thumb": {
    "-webkit-appearance": "none",
    appearance: "none",
    width: "25px",
    height: "25px",
    background: "#ffffff",
    cursor: "pointer",
    borderRadius: "50%",
    border: "solid #0c0c0c26 1px",
    boxShadow: "0px 0px 15px 2px #5c5c5c2d",
  },

  ".slider::-moz-range-thumb": {
    width: "25px",
    height: "25px",
    background: "#04AA6D",
    cursor: "pointer",
    borderRadius: "50%",
  },
})

export default () => {
  const handleInput = () => {}

  return (
    <Wrapper className="slidecontainer">
      <input
        className="slider"
        steps={100}
        type="range"
        min="1"
        max="100"
        id="myRange"
        defaultValue={50}
      ></input>
    </Wrapper>
  )
}
