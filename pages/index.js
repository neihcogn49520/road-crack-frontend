import React from "react";
import Seo from "../components/Customs/Seo";
import { Home as HomeComponent } from "../components";

const Home = () => {
  return (
    <Seo title="Home" description="">
      <HomeComponent />
    </Seo>
  );
};

export default Home;
