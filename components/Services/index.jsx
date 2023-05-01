import React from "react";

import { Section, PageBanner } from "../";
import UpSide from "./UpSide";
import DownSide from "./DownSide";

const Index = () => {
  return (
    <div>
      <PageBanner
        title="Our Services"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="Services"
      />
      <Section>
        <UpSide />
        <DownSide />
      </Section>
    </div>
  );
};

export default Index;
