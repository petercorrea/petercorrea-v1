import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"
import { useState, useEffect } from "react"
import Question from "./Question"
import Options from "./Options"
import Explanation from "./Explanation"
import { keyframes } from "@stitches/core"
import fireworks from "./Fireworks"

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
  border: "#0c0c0c26 solid 1px",
  borderRadius: "10px",
  margin: "auto",
  padding: "20px",
  boxShadow: "10px 10px 10px 1px #0c0c0c26",
  backgroundColor: "#f0f0f04d",
})

const SubmitButtonWrapper = styled("div", {
  button: {
    display: "block",
    minWidth: "200px",
    height: "40px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "solid black 1px",
    backgroundColor: "#000000",
    color: "white",
    fontSize: "1.1rem",
    transition: "transform 80ms ease-in",
    boxShadow: "0px 0px 15px 2px #5c5c5ca6",
    textAlign: "center",
    verticalAlign: "middle",
    fontWeight: "300",

    "&:hover": {
      backgroundColor: "#000000",
      color: "white",
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
  let [selection, setSelection] = useState(false)
  let [correct, setCorrect] = useState()

  // set correct answer
  let [answer, setAnswer] = useState(undefined)
  useEffect(() => {
    for (let option of options) {
      if (option.correct) {
        setAnswer(option.text)
      }
    }
  }, [])

  // select handler
  const handleSelect = (ref) => {
    setSelection(ref)
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
        ></Explanation>
      </QuizWrapper>
    </Container>
  )
}
