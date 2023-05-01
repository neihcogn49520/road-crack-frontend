import React from "react";

import { Section } from "../";
import Banner from "./Banner";
import About from "./About";
import Gallery from "./Gallery";
import Features from "./Features";
import CtaSection from "./CtaSection";
import Testimonial from "./Testimonial";

const Index = () => {
  return (
    <>
      <Banner />
      <Section id="features">
        <Features />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="cta">
        <CtaSection />
      </Section>
      <Section id="gallery">
        <Gallery />
      </Section>
      <Section id="testimonial">
        <Testimonial />
      </Section>
    </>
  );
};

export default Index;
