import { styled } from "../../../stitches.config"

let Wrapper = styled("div", {
  display: "flex",
  flex: "row",
  justifyContent: "left",
  flexWrap: "wrap",
  margin: "$m 0px",
})

let Item = styled("div", {
  border: "$white solid 2px",
  borderRadius: "5px",
  color: "$white",
  padding: "1px 10px",
  margin: "0px 5px 5px 0px",

  p: {
    fontSize: "$s",
    fontWeight: "600",
    color: "$white",
  },

  variants: {
    blue: {
      true: {
        border: "$blue solid 2px",
        p: {
          color: "$blue",
        },
      },
    },
  },
})

export default ({ list, blue }) => {
  if (list.length == 0) return

  let html = list.map((item, idx) => {
    return (
      <Item key={idx} blue={blue}>
        <p>{item}</p>
      </Item>
    )
  })

  return <Wrapper>{html}</Wrapper>
}
