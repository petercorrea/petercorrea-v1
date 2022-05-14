import { styled } from "../../../stitches.config"

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

export default ({ download, href, width, height, children, }) => {
  return (
    <Wrapper target="_blank" rel="noopener noreferrer" download href={href}>
      {children}
    </Wrapper>
  )
}
