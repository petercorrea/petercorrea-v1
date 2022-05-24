import { styled } from "@stitches/react"
import Check from "../../../public/design/check.png"
import Wrong from "../../../public/design/wrong.png"
import Box from "../../layout/Box"
import Image from "../Image"

const AttachedModal = styled(Box, {
  width: "100%",
  minHeight: "$200",
  borderRadius: "$s",
  padding: "$l",
  justifyContent: "center",
  alignItems: "center",

  "& > * ": {
    "& > * ": {
      margin: "$z $s",
    },
  },

  ".explanation": {
    color: "$black",
    margin: "$s $z",
    fontWeight: "$m",
    fontSize: "$m",
    lineHeight: "$xs",
  },

  variants: {
    hide: {
      true: {
        display: "none",
      },
    },
    show: {
      true: {
        display: "block",
      },
    },
    correct: {
      true: {
        "& > * ": {
          color: "$green",
        },
      },
    },
  },
})

export default ({ submitted, selection }) => {
  if (submitted && selection.correct) {
    return (
      <AttachedModal show correct>
        <Box row>
          <Image
            size="xs"
            src={Check}
            alt="image of a checkmark"
            objectFit="contain"
          ></Image>
          <p>Correct!</p>
        </Box>
        <p className="explanation">{selection.explanation}</p>
      </AttachedModal>
    )
  } else if (submitted && !selection.correct) {
    return (
      <AttachedModal show>
        <Box row>
          <Image
            size="xs"
            src={Wrong}
            alt="image of a incorrect answer"
            objectFit="contain"
          ></Image>
          <p>That's not right...</p>
        </Box>
        <p className="explanation">{selection.explanation}</p>
      </AttachedModal>
    )
  }
}
