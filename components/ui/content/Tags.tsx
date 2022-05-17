import { styled } from "../../../stitches.config"

let Wrapper = styled("div", {
  display: "flex",
  flex: "row",
  justifyContent: "left",
  flexWrap: "wrap",
  margin: "$m 0px",
})

let Item = styled("div", {
  border: "$black solid 1px",
  borderRadius: "5px",
  color: "$white",
  padding: "1px 10px",
  margin: "5px 5px 5px 0px",
  p: {
    fontSize: "$x",
    color: "$black",
  },
})

export default ({ list }) => {
  if (list.length == 0) return

  let html = list.map((item, idx) => {
    return (
      <Item key={idx}>
        <p>{item}</p>
      </Item>
    )
  })

  return <Wrapper>{html}</Wrapper>
}
