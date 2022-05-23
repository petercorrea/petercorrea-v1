import { ComponentContentParagraph } from "../../generated"
import { styled } from "../../styles/stitches.config"

let Latex = require("react-latex")

const Paragraph = styled("p", {
  // color: "red",
})

export const generateParagraph = (comp: ComponentContentParagraph, idx) => {
  return <Paragraph key={idx}>{comp.text}</Paragraph>
}

export const parseIntoLatexComponents = (comp, index) => {
  let inputText = comp.text
  let string = ""
  let template = []
  let latexString = ""
  let start = null
  let end = null

  for (let idx = 0; idx < inputText.length; idx++) {
    if (inputText[idx] === "$" && start === null) {
      start = idx
    } else if (inputText[idx] === "$" && start !== null) {
      end = idx
      string = inputText.slice(0, start)
      latexString = inputText.slice(start, end + 1)
      let remainderString = inputText.slice(end + 1)

      template.push(<p key={`${idx}-p`}>{string}</p>)
      template.push(<Latex key={`${idx}-l`}>{latexString}</Latex>)

      // reset variables
      inputText = remainderString
      idx = 0
      start = null
      end = null
    }
  }

  // push remainder text
  template.push(<p key={`f`}>{inputText}</p>)

  return <div key={index}>{template}</div>
}
