import { a11yLight, CopyBlock } from "react-code-blocks"
import { ComponentContentCode } from "../../generated"
import { styled } from "../../styles/stitches.config"
import Box from "../layout/Box"
import Padding from "../layout/Padding"

const CodeWrapper = styled(Box, {
  "&>*": {
    width: "80%",
    maxWidth: "$max",
    border: "$border-light",
    boxShadow: "$light",
    fontFamily: "Fira Code",
  },
})

export const generateCode = (comp: ComponentContentCode, idx) => {
  return (
    <Padding key={idx}>
      <CodeWrapper row center>
        <CopyBlock
          language={"javascript"}
          text={comp.code}
          showLineNumbers={true}
          theme={a11yLight}
          wrapLines={true}
          codeBlock
        />
      </CodeWrapper>
    </Padding>
  )
}
