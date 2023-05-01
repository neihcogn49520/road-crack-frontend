import React from "react";

import { Section, PageBanner } from "../";
import DownLeftSide from "./DownLeftSide";
import DownRightSide from "./DownRightSide";

const Index = () => {
  return (
    <div>
      <PageBanner
        title="Appointment"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="Appointment"
      />
      <Section>
        <div className="flex flex-wrap">
          <DownLeftSide />
          <DownRightSide />
        </div>
      </Section>
    </div>
  );
};

export default Index;
