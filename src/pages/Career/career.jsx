import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

function career() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="details">
        <h2 className="details-head">
          <u>Careers</u>
        </h2>
        <p>
          Our mission is to be Earth's most customer-centric company. This is
          what unites Amazonians across teams and geographies as we are all
          striving to delight our customers and make their lives easier, one
          innovative product, service, and idea at a time.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default career;
