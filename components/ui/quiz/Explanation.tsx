import { styled } from "@stitches/react"
import Image from "next/image"
import Check from "../../../public/design/check.png"
import Wrong from "../../../public/design/wrong.png"
import Box from "../../layout/Box"

const AttachedModal = styled(Box, {
  width: "100%",
  minHeight: "200px",
  borderRadius: "10px",
  padding: "20px",
  justifyContent: "center",
  alignItems: "center",

  "& > * ": {
    "& > * ": {
      margin: "0px 10px"
    }
  },

  ".explanation": {
    color: "$black",
    margin: "10px 0px"
  },

  variants: {
    hide: {
      true: {
        display: "none"
      }
    },
    show: {
      true: {
        display: "block"
      }
    },
    correct: {
      true: {
        "& > * ": {
          color: "$green"
        }
      }
    }
  }
})

export default ({ submitted, correct, selection, options }) => {
  let currentSelection = options.filter((option) => {
    return selection == option.id
  })[0]

  if (submitted && correct) {
    return (
      <AttachedModal show correct>
        <Box row>
          <Image
            src={Check}
            alt="image of a checkmark"
            width="20px"
            height="20px"
          ></Image>
          <p>Correct!</p>
        </Box>
        <p className="explanation">{currentSelection.explanation}</p>
      </AttachedModal>
    )
  } else if (submitted && !correct) {
    return (
      <AttachedModal show>
        <Box row>
          <Image
            src={Wrong}
            alt="image of a incorrect answer"
            width="20px"
            height="20px"
          ></Image>
          <p>That's not right...</p>
        </Box>
        <p className="explanation">{currentSelection.explanation}</p>
      </AttachedModal>
    )
  }
}
