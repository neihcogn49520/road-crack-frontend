import React from "react";

import { Section, PageBanner } from "../";
import UpSide from "./UpSide";
import DownSide from "./DownSide";

const FAQuestions = () => {
  return (
    <>
      <PageBanner
        title="FAQs"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="FAQs"
      />
      <Section>
        <UpSide />
        <DownSide />
      </Section>
    </>
  );
};

export default FAQuestions;
