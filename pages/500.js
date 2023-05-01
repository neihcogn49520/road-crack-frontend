import React from "react";
import Seo from "../components/Customs/Seo";
import { InternalServerError as InternalServerErrorComponent } from "../components";

const InternalServerError = () => {
  return (
    <Seo title="500 : Internal Server Error" description="">
      <InternalServerErrorComponent />
    </Seo>
  );
};

export default InternalServerError;
