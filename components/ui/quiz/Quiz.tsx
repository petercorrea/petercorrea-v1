import { keyframes } from "@stitches/core"
import { useEffect, useState } from "react"
import { styled } from "../../../styles/stitches.config"
import { shuffle } from "../../../utils/utils"
import Box from "../../layout/Box"
import Explanation from "./Explanation"
import fireworks from "./Fireworks"
import Options from "./Options"
import Question from "./Question"

const slideUp = keyframes({
  "0%": { transform: "translateY($l)", opacity: 0 },
  "100%": { transform: "translateY(0)", opacity: 1 },
})

const Container = styled(Box, {
  padding: "$s",
  animation: `${slideUp} 1000ms`,
  justifyContent: "flex-start",
})

const QuizWrapper = styled(Box, {
  maxWidth: "$400",
  border: "$border-light",
  borderRadius: "$s",
  margin: "auto",
  padding: "$l",
  boxShadow: "$lightOffset",
  backgroundColor: "$verylightgray",
})

const SubmitButtonWrapper = styled("div", {
  button: {
    display: "block",
    minWidth: "$200",
    height: "$xl",
    // marginBottom: "$l",
    borderRadius: "$s",
    border: "$border-black",
    backgroundColor: "$black",
    color: "$white",
    transition: "transform 80ms ease",
    boxShadow: "$dark",
    textAlign: "center",
    verticalAlign: "middle",

    "&:hover": {
      backgroundColor: "$black",
      color: "$white",
      transform: "translateY(-$xxxs)",
    },
  },
})

const SubmitButton = ({ onClick }) => {
  return (
    <SubmitButtonWrapper>
      <button onClick={onClick}>Submit</button>
    </SubmitButtonWrapper>
  )
}

export default ({ content }) => {
  // get props
  const { question, answer, choices, category } = content
  const [sortedChoices, setSortedChoices] = useState([])

  // set state
  const [submitted, setSubmit] = useState(false)
  const [selection, setSelection] = useState(undefined)

  useEffect(() => {
    // eslint-disable-next-line
    setSortedChoices(shuffle([answer, ...choices]))
  }, [])

  // select handler
  const handleSelect = (selection) => {
    setSelection(selection)
    setSubmit(false)
  }

  // submit handler
  const handleSubmit = () => {
    if (selection.correct) {
      setSubmit(true)
      fireworks()
    } else {
      setSubmit(true)
    }
  }

  // randomize sort

  return (
    <Container column>
      <QuizWrapper column>
        <Question question={question} category={category} />
        <Options
          choices={sortedChoices}
          handleSelect={handleSelect}
          selection={selection}
          submitted={submitted}
        />
        <SubmitButton onClick={handleSubmit} />
        <Explanation submitted={submitted} selection={selection}></Explanation>
      </QuizWrapper>
    </Container>
  )
}
