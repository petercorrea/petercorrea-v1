import { styled } from "../../../styles/stitches.config"
import Box from "../../layout/Box"

const Wrapper = styled(Box, {
  marginBottom: "$l",
})

const CategoryLabel = styled("p", {
  minWidth: "fit-content",
  marginRight: "$l",
  // marginBottom: "$l",
})

const QuestionLabel = styled("p", {
  fontWeight: "$m",
  fontSize: "$m",
  lineHeight: "$xs",
})

export default ({ question, category }) => {
  return (
    <Wrapper column>
      <CategoryLabel>{category}</CategoryLabel>
      <QuestionLabel>{question}</QuestionLabel>
    </Wrapper>
  )
}
