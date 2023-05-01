import React from "react";
import Seo from "../components/Customs/Seo";
import { Contact as ContactComponent } from "../components";

const Contact = () => {
  return (
    <Seo title="Contact Us" description="">
      <ContactComponent />
    </Seo>
  );
};

export default Contact;
