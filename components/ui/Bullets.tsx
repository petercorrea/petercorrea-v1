import { CaretRightIcon } from "@radix-ui/react-icons"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"

const Wrapper = styled(Box, {
  marginBottom: "$xs",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  "& > svg": {
    position: "relative",
    right: "-$xxs",
    top: "1px",
    color: "$active",
    minWidth: "$l",
    minHeight: "$l",
  },

  p: {
    // maxWidth: "800px",
    // fontSize: "$m",
    // fontWeight: "$m",
    lineHeight: "$xs",
  },
})

type BulletsProps = {
  items: string[]
}

export default ({ items }: BulletsProps) => {
  const html = items.map((item, idx) => {
    return (
      <Wrapper key={idx}>
        <CaretRightIcon></CaretRightIcon>
        <p>{item}</p>
      </Wrapper>
    )
  })

  return <Box>{html}</Box>
}
