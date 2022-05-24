import { keyframes, styled } from "@stitches/react"
import Box from "../../layout/Box"

const shake = keyframes({
  "0%": { transform: "translateX(10px)" },
  "20%": { transform: "translateX(-10px)" },
  "40%": { transform: "translateX(10px)" },
  "60%": { transform: "translateX(-10px)" },
  "80%": { transform: "translateX(10px)" },
  "100%": { transform: "translateX(0px)" },
})

const abcInterator = () => {
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const abcIterate = () => {
    if (abc.length == 0) {
      abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    const char = abc[0]
    abc = abc.substring(1)
    return char
  }

  return abcIterate
}

const OptionsButton = styled(Box, {
  button: {
    width: "100%",
    minWidth: "200px",
    height: "40px",
    padding: "5px 20px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "$border-light",
    backgroundColor: "$white",
    textAlign: "left",
    color: "$black",

    "&:hover ": {
      color: "$black",
      boxShadow: "$lightblue",
    },
  },
  variants: {
    active: {
      true: {
        button: {
          border: "none",
          backgroundColor: "$blue",
          color: "$white",
          boxShadow: "$lightblue",

          "&:hover": {
            color: "$white",
            boxShadow: "$lightblue",
          },
        },
      },
    },
    wrong: {
      true: {
        "& button": {
          backgroundColor: "$red",
          color: "$white",
          animation: `${shake} 500ms`,

          "&:hover": {
            color: "$white",
          },
        },
      },
    },
  },
})

export default ({ choices, selection, handleSelect, submitted }) => {
  const choicesHtml = []
  const abcIterate = abcInterator()

  // render different button states
  for (const idx in choices) {
    if (choices[idx] == selection && !choices[idx].correct && submitted) {
      choicesHtml.push(
        <OptionsButton wrong key={idx}>
          <button onClick={() => handleSelect(choices[idx])}>
            {abcIterate() + ". " + choices[idx].text}
          </button>
        </OptionsButton>
      )
    } else if (choices[idx] == selection) {
      choicesHtml.push(
        <OptionsButton active key={idx}>
          <button onClick={() => handleSelect(choices[idx])}>
            {abcIterate() + ". " + choices[idx].text}
          </button>
        </OptionsButton>
      )
    } else {
      choicesHtml.push(
        <OptionsButton key={idx}>
          <button onClick={() => handleSelect(choices[idx])}>
            {abcIterate() + ". " + choices[idx].text}
          </button>
        </OptionsButton>
      )
    }
  }

  return <div>{choicesHtml}</div>
}
