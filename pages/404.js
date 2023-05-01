import React from "react";
import Seo from "../components/Customs/Seo";
import { NotFound as NotFoundComponent } from "../components";

const NotFound = () => {
  return (
    <Seo title="404 : Not Found" description="">
      <NotFoundComponent />
    </Seo>
  );
};

export default NotFound;
