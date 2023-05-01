import React from "react";
import Seo from "../components/Customs/Seo";
import { About as AboutComponent } from "../components";

const About = () => {
  return (
    <Seo title="About" description="">
      <AboutComponent />
    </Seo>
  );
};

export default About;
