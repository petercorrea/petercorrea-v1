import { styled } from "../../stitches.config"

const Href = styled("div", {
  display: "flex",
  flexWrap: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  width: "max-content",
  "&:hover": {
    cursor: "pointer",
  },
  img: {
    height: "20px",
    margin: "5px",
  },
})

export default (props) => {
  let downloadHTML

  if (props.download) {
    downloadHTML = <img src="./design/download resume.png"></img>
  }

  return (
    <Href>
      {downloadHTML}
      <a {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </Href>
  )
}
