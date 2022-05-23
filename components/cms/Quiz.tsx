import { ComponentContentQuestion } from "../../generated"
import Quiz from "../ui/quiz/Quiz"

export const generateQuiz = (comp: ComponentContentQuestion, idx) => {
  return <div key={idx}>{<Quiz content={comp}></Quiz>}</div>
}
