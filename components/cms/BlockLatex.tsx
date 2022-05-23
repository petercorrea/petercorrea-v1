let Latex = require("react-latex")

export const generateBlockLatex = (comp, idx) => {
  let latex = comp.latex

  if (latex[0] !== "$" || latex[latex.length - 1] !== "$") {
    return ""
  }

  return (
    <Latex displayMode={true} key={idx}>
      {latex}
    </Latex>
  )
}
