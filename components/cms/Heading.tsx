import { ComponentContentHeading } from "../../generated"
import { styled } from "../../styles/stitches.config"

const Heading = styled("h1", {
  // color: "red",
})

export const generateHeading = (comp: ComponentContentHeading, idx: number) => {
  return <Heading key={idx}>{comp.text}</Heading>
}
