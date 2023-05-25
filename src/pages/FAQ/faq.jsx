import React from "react";
import Header from "../../components/Header";
import Navbar from "../../components/navbar";
import Footer from "../../components/Footer";

function faq() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="details">
        <h2 className="details-head">
          <u>About Us</u>
        </h2>
        <p>
          I already have an shopindeed.jobs account, so why do I need to reset my
          password? We're working hard to provide the best candidate experience
          possible, so we've made some improvements to the sign-in experience.
          We want to make sure you're able to access all of our new features.
          Resetting your password will allow you to see the new and ongoing
          changes coming to shopindeed.jobs to make your experience great! I have
          multiple email addresses associated with my applications. Can I merge
          my accounts? Currently, we're unable to merge applicants' accounts. If
          you have multiple accounts associated with several applications, you
          can continue to access your application using the corresponding
          account. I don't have an email address. Can I create an account using
          my phone number
         
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default faq;
