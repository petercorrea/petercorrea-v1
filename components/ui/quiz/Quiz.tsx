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
  "0%": { transform: "translateY(20px)", opacity: 0 },
  "100%": { transform: "translateY(0)", opacity: 1 },
})

const Container = styled(Box, {
  padding: " 80px",
  animation: `${slideUp} 1000ms`,
})

const QuizWrapper = styled(Box, {
  width: "500px",
  border: "$border-light",
  borderRadius: "10px",
  margin: "auto",
  padding: "20px",
  boxShadow: "$light",
  backgroundColor: "$verylightgray",
})

const SubmitButtonWrapper = styled("div", {
  button: {
    display: "block",
    minWidth: "200px",
    height: "40px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "$border-black",
    backgroundColor: "$black",
    color: "$white",
    transition: "transform 80ms ease-in",
    boxShadow: "$dark",
    textAlign: "center",
    verticalAlign: "middle",

    "&:hover": {
      backgroundColor: "$black",
      color: "$white",
      transform: "translateY(-3px)",
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
  let [sortedChoices, setSortedChoices] = useState([])

  // set state
  let [submitted, setSubmit] = useState(false)
  let [selection, setSelection] = useState(undefined)

  useEffect(() => {
    // eslint-disable-next-line
    sortedChoices = shuffle([answer, ...choices])
    setSortedChoices(sortedChoices)
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
    <Container>
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
