import { Provider } from "urql"
import { client } from "../clients/gql"
import { globalStyles } from "../styles/stitches.config"
import { AppContextWrapper } from "./AppContext"

export default (props) => {
  globalStyles()
  return (
    <Provider value={client}>
      <AppContextWrapper {...props}>{props.children}</AppContextWrapper>
    </Provider>
  )
}
