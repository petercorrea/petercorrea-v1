import { styled } from "../../stitches.config"
import Image from "next/image"

const Wrapper = styled("div", {
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
    downloadHTML = (
      <Image
        src="/design/download resume.png"
        alt="download icon"
        width={20}
        height={20}
      ></Image>
    )
  }

  return (
    <Wrapper>
      {downloadHTML}
      <a {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </Wrapper>
  )
}
