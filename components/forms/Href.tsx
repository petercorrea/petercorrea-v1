import { styled } from "../../stitches.config"
import Image from "next/image"

const Wrapper = styled("a", {
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
  },
})

export default ({ download, href, width, height, children }) => {
  let downloadHTML

  if (download) {
    downloadHTML = (
      <Image
        src="/design/download resume.png"
        alt="download icon"
        width={width}
        height={height}
      ></Image>
    )
  }

  return (
    <Wrapper target="_blank" rel="noopener noreferrer" download href={href}>
      {children}
      {downloadHTML}
    </Wrapper>
  )
}
