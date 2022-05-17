import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"

const CategoryLabel = styled("p", {
  minWidth: "fit-content",
  marginRight: "20px"
})

const QuestionLabel = styled("p", { fontSize: "1.1rem" })

export default ({ question, category }) => {
  return (
    <Box column>
      <CategoryLabel>{category}</CategoryLabel>
      <QuestionLabel>{question}</QuestionLabel>
    </Box>
  )
}
