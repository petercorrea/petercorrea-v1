import { Provider } from "urql"
import { client } from "../clients/gql"
import { AppContextWrapper } from "../contexts/AppContext"
import { globalStyles } from "../styles/stitches.config"

export default (props) => {
  globalStyles()
  return (
    <Provider value={client}>
      <AppContextWrapper {...props}>{props.children}</AppContextWrapper>
    </Provider>
  )
}
