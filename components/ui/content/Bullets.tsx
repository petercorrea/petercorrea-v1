import { CaretRightIcon } from "@radix-ui/react-icons"
import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"

const Wrapper = styled(Box, {
  marginBottom: "0px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  "& > svg": {
    position: "relative",
    right: "-2px",
    top: "-6px",
    color: "$active",
    minWidth: "30px",
    minHeight: "30px",
  },

  p: {
    lineHeight: "$xs",
    marginBottom: "$s",
  },
})

export default ({ items }) => {
  let html = items.map((item, idx) => {
    return (
      <Wrapper key={idx}>
        <CaretRightIcon></CaretRightIcon>
        <p>{item}</p>
      </Wrapper>
    )
  })

  return <Box>{html}</Box>
}
