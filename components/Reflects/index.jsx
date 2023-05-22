import React from "react"

import { Section, PageBanner } from "../"
import UpSide from "./UpSide"
import DownSide from "./DownSide"

const Index = () => {
  return (
    <div>
      <PageBanner
        title="Phản ánh"
        description="Nơi hiển thị tất cả phản ánh của mọi người tại đây, mọi người cũng có thể xem tất cả phản ánh của mình ."
        path="Reflect"
      />
      <Section>
        <UpSide />
        <DownSide />
      </Section>
    </div>
  )
}

export default Index
