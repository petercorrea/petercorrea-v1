import { keyframes } from "@stitches/core"
import { useEffect, useState } from "react"
import { styled } from "../../../stitches.config"
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
  backgroundColor: "$lightgray",
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
  const { question, category, options } = content
  // Set state
  let [submitted, setSubmit] = useState(false)
  let [selection, setSelection] = useState(0)
  let [correct, setCorrect] = useState(false)

  // set correct answer
  let [answer, setAnswer] = useState(undefined)
  useEffect(() => {
    for (let option of options) {
      if (option.correct) {
        setAnswer(option.id)
      }
    }
    // eslint-disable-next-line
  }, [])

  // select handler
  const handleSelect = (id) => {
    setSelection(id)
    setSubmit(false)
  }

  // submit handler
  const handleSubmit = () => {
    if (selection == answer) {
      setSubmit(true)
      setCorrect(true)
      fireworks()
    } else {
      setSubmit(true)
      setCorrect(false)
    }
  }

  return (
    <Container>
      <QuizWrapper column>
        <Question question={question} category={category} />
        <Options
          options={options}
          handleSelect={handleSelect}
          selection={selection}
          correct={correct}
          submitted={submitted}
        />
        <SubmitButton onClick={handleSubmit} />
        <Explanation
          submitted={submitted}
          correct={correct}
          selection={selection}
          options={options}
        ></Explanation>
      </QuizWrapper>
    </Container>
  )
}
