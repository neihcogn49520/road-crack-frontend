import React from "react";
import Seo from "../components/Customs/Seo";
import { PrivacyPolicy as PrivacyPolicyComponent } from "../components";

const PrivacyPolicy = () => {
  return (
    <Seo title="Privacy Policy" description="">
      <PrivacyPolicyComponent />
    </Seo>
  );
};

export default PrivacyPolicy;
