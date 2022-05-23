import { generateBlockLatex } from "./BlockLatex"
import { generateCode } from "./CodeBlock"
import { generateHeading } from "./Heading"
import { generateImages } from "./Images"
import { parseIntoLatexComponents } from "./Paragraph"
import { generateQuiz } from "./Quiz"
import { generateSubheading } from "./Subheading"
import { generateVideo } from "./Video"

export default (component, idx) => {
  switch (component.__typename) {
    case "ComponentContentHeading":
      return generateHeading(component, idx)

    case "ComponentContentSubheading":
      return generateSubheading(component, idx)

    case "ComponentContentParagraph":
      return parseIntoLatexComponents(component, idx)

    case "ComponentContentImages":
      return generateImages(component)

    case "ComponentContentVideo":
      return generateVideo(component, idx)

    case "ComponentContentCode":
      return generateCode(component, idx)

    case "ComponentContentQuestion":
      return generateQuiz(component, idx)

    case "ComponentContentLatex":
      return generateBlockLatex(component, idx)
  }
}
