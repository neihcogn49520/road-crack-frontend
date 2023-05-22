import React from "react"

import { Section } from "../"
import Banner from "./Banner"
import News from "./News"
import Gallery from "./Gallery"
import Features from "./Features"
import CtaSection from "./CtaSection"
import Reflect from "./Reflect"

const Index = () => {
  return (
    <>
      <Banner />
      <Section id="features">
        <Features />
      </Section>
      <Section id="news">
        <News />
      </Section>
      <Section id="cta">
        <CtaSection />
      </Section>
      <Section id="reflect">
        <Reflect />
      </Section>
    </>
  )
}

export default Index
