import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import generateCMSComponents from "../../components/cms/CMSComponents"
import Padding from "../../components/layout/Padding"
import MobileNavbar from "../../components/ui/MobileNavbar"
import Navbar from "../../components/ui/Navbar"
import { useGetPageByIdQuery } from "../../generated"

const DynamicRoute = () => {
  const router = useRouter()
  const [content, setContent] = useState(null)

  const [result] = useGetPageByIdQuery({
    variables: { id: `${router.query.id}` },
  })
  const { data, fetching, error } = result

  useEffect(() => {
    // console.log("fired")

    setContent(data?.page?.data?.attributes?.content)
  }, [data, router.query.id])

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  return (
    <>
      <Navbar></Navbar>
      <MobileNavbar></MobileNavbar>
      <Padding border top l>
        {content
          ? content.map((item, idx) => {
              return generateCMSComponents(item, idx)
            })
          : ""}
      </Padding>
    </>
  )
}

export default DynamicRoute
