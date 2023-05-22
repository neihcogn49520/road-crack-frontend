import React from "react"
import Seo from "../components/Customs/Seo"
import { News as NewsComponent } from "../components"

const News = () => {
  return (
    <Seo title="Tin tức" description="">
      <NewsComponent />
    </Seo>
  )
}

export default News
