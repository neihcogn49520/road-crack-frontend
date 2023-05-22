import React from "react"

import { Section, PageBanner } from ".."
import Intro from "./SliderNews"
import Skills from "./Skills"
import Information from "./Information"

const Index = () => {
  return (
    <>
      <PageBanner
        title="Tin tức"
        description="Tổng hợp các tin tức phản ánh về sự cố hạ tầng giao thông đô thị ở TPHCM."
        path="Tin tức"
      />
      <Section>
        <Intro />
      </Section>
      <Section>
        <Information />
      </Section>
    </>
  )
}

export default Index
