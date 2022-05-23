import { createClient } from "urql"
import { LOCAL_CMS } from "../constants/constants"

export const client = createClient({
  url: `${LOCAL_CMS}/graphql`,
})
