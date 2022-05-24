import Latex from "react-latex"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"

const LatexWrapper = styled(Box, {
  margin: "$xl auto",
})

export const generateBlockLatex = (comp, idx) => {
  const latex = comp.latex

  if (latex[0] !== "$" || latex[latex.length - 1] !== "$") {
    return ""
  }

  return (
    <LatexWrapper>
      <Latex displayMode={true} key={idx}>
        {latex}
      </Latex>
    </LatexWrapper>
  )
}
