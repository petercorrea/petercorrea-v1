import { styled } from "../../stitches.config"

let Wrapper = styled("div", {
  display: "flex",
  flex: "row",
  justifyContent: "left",
  flexWrap: "wrap",
})

let Item = styled("div", {
  border: "white solid 1px",
  borderRadius: "5px",
  color: "white",
  padding: "1px 10px",
  margin: "5px 5px 5px 0px",
  p: {
    fontWeight: "400",
    letterSpacing: "-1px",
  },
})

export default ({ list }) => {
  let html = list.map((item, idx) => {
    return (
      <Item key={idx}>
        <p>{item}</p>
      </Item>
    )
  })

  return <Wrapper>{html}</Wrapper>
}
