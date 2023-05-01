import React from "react";

import { Section, PageBanner } from "../";
import Intro from "./Intro";
import Skills from "./Skills";
import Qualification from "./Qualification";

const Index = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="About Us"
      />
      <Section>
        <Intro />
      </Section>
      <Section>
        <Qualification />
      </Section>
      <Section>
        <Skills />
      </Section>
    </>
  );
};

export default Index;
