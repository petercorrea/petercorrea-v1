import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useQuery } from "urql"
import generateCMSComponents from "../../components/cms/CMSComponents"
import Padding from "../../components/layout/Padding"
import { GetPageByIdDocument } from "../../generated"

const DynamicRoute = () => {
  const router = useRouter()
  const [content, setContent] = useState(null)

  const [result] = useQuery({
    query: GetPageByIdDocument,
    variables: {
      id: router.query.id,
    },
  })
  const { data, fetching, error } = result

  useEffect(() => {
    setContent(data?.page.data.attributes.content)
  }, [data])

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  return (
    <Padding>
      {content
        ? content.map((item, idx) => {
            return generateCMSComponents(item, idx)
          })
        : ""}
    </Padding>
  )
}

export default DynamicRoute
