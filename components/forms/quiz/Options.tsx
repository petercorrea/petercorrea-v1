import { styled } from "@stitches/react"
import Box from "../../layout/Box"
import { keyframes } from "@stitches/react"
import { useRef } from "react"

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
    let char = abc[0]
    abc = abc.substring(1)
    return char
  }

  return abcIterate
}

const OptionsButton = styled(Box, {
  //   border: "solid red 2px",

  button: {
    width: "100%",
    minWidth: "200px",
    height: "40px",
    padding: "5px 20px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "solid #0c0c0c26 1px",
    backgroundColor: "#ffffff",
    fontSize: "1.1rem",
    textAlign: "left",
    fontWeight: "300",

    "&:hover ": {
      // backgroundColor: "#008cff65",
      color: "black",
      boxShadow: "0px 0px 15px 2px #008cff65",
    },
  },
  variants: {
    active: {
      true: {
        button: {
          border: "none",
          backgroundColor: "#008cff",
          color: "white",
          boxShadow: "0px 0px 15px 2px #008cff65",

          "&:hover": {
            color: "white",
            boxShadow: "0px 0px 15px 2px #008cff65",
          },
        },
      },
    },
    wrong: {
      true: {
        "& button": {
          backgroundColor: "#fa4646",
          color: "white",
          animation: `${shake} 500ms`,

          "&:hover": {
            color: "white",
          },
        },
      },
    },
  },
})

export default ({ options, selection, handleSelect, correct, submitted }) => {
  let choicesHtml = []
  let abcIterate = abcInterator()

  for (let idx in options) {
    if (options[idx].id == selection && correct === false && submitted) {
      choicesHtml.push(
        <OptionsButton wrong>
          <button
            onClick={() => handleSelect(options[idx].id)}
            value={options[idx].id}
          >
            {abcIterate() + ". " + options[idx].text}
          </button>
        </OptionsButton>
      )
    } else if (options[idx].id == selection) {
      choicesHtml.push(
        <OptionsButton active>
          <button
            onClick={() => handleSelect(options[idx].id)}
            value={options[idx].id}
          >
            {abcIterate() + ". " + options[idx].text}
          </button>
        </OptionsButton>
      )
    } else {
      choicesHtml.push(
        <OptionsButton>
          <button
            onClick={() => handleSelect(options[idx].id)}
            value={options[idx].id}
          >
            {abcIterate() + ". " + options[idx].text}
          </button>
        </OptionsButton>
      )
    }
  }

  return <div>{choicesHtml}</div>
}
