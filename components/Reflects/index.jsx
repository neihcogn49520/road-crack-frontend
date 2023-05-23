import React from "react"

import { Section, PageBanner } from "../"
import UpSide from "./UpSide"
import DownSide from "./DownSide"
import ListReflects from "./ListReflects"

const Index = () => {
  return (
    <div>
      <PageBanner
        title="Phản ánh"
        description="Nơi hiển thị tất cả phản ánh của mọi người tại đây, mọi người cũng có thể xem tất cả phản ánh của mình ."
        path="Phản ánh"
      />
      <Section>
        <UpSide />
        <DownSide />
      </Section>
      <Section>
        <ListReflects />
      </Section>
    </div>
  )
}

export default Index
