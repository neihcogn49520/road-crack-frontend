import React from "react";

import { Section, PageBanner } from "../";
import DownLeftSide from "./DownLeftSide";
import DownRightSide from "./DownRightSide";
import UpSide from "./UpSide";

const Index = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="contact us"
      />
      <Section>
        <UpSide />
        <div className="flex flex-wrap py-6 md:pt-20 md:pb-10">
          <DownLeftSide />
          <DownRightSide />
        </div>
      </Section>
    </>
  );
};

export default Index;
