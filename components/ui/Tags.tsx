import { styled } from "../../styles/stitches.config"

const Wrapper = styled("div", {
  display: "flex",
  flex: "row",
  justifyContent: "left",
  flexWrap: "wrap",
  margin: "0px 0px 20px 0px",
})

const Item = styled("div", {
  border: "$white solid 2px",
  borderRadius: "5px",
  color: "$white",
  padding: "1px 10px",
  margin: "0px 5px 5px 0px",

  p: {
    fontSize: "$xs",
    fontWeight: "400",
    color: "$white",
  },

  variants: {
    blue: {
      true: {
        border: "$blue solid 1px",
        p: {
          color: "$blue",
        },
      },
    },
  },
})

interface TagsProps {
  list: string[]
  blue?: boolean
}

export default ({ list }: TagsProps) => {
  if (list.length == 0) return

  const html = list.map((item, idx) => {
    return (
      <Item key={idx} data-testid="tags-test">
        <p>{item}</p>
      </Item>
    )
  })

  return <Wrapper>{html}</Wrapper>
}
