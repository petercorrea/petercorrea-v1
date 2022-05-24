import { styled } from "../../styles/stitches.config"

const Wrapper = styled("div", {
  display: "flex",
  flex: "row",
  justifyContent: "left",
  flexWrap: "wrap",
  margin: "$z $z $l $z",
})

const Item = styled("div", {
  border: "$border-white",
  borderRadius: "$s",
  color: "$white",
  padding: "0px $xs ",
  margin: "$z $s $s $z",

  p: {
    // fontFamily: "monospace",
    fontSize: "$xs",
    fontWeight: "$l",
    color: "$white",
  },

  variants: {
    blue: {
      true: {
        border: "$border-black",
        borderRadius: "$s",
        p: {
          color: "$black",
        },
      },
    },
  },
})

interface TagsProps {
  list: string[]
  blue?: boolean
}

export default ({ list, blue }: TagsProps) => {
  if (list.length == 0) return

  const html = list.map((item, idx) => {
    return (
      <Item key={idx} blue={blue}>
        <p>{item}</p>
      </Item>
    )
  })

  return <Wrapper>{html}</Wrapper>
}
