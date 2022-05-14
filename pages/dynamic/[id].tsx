import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const DynamicRoute = () => {
  const [id, setId] = useState<string,>("10")
  const router = useRouter()

  useEffect((router) => {
    if (router.isReady) {
      setId(router.query.id)
    }
  }, [router.isReady])

  return <p>This is a dynamic route with id: {id}</p>
}

export default DynamicRoute
