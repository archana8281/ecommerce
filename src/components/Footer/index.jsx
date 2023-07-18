import React from "react";
import { useEffect, useState } from "react";
import { FOOTER, HELP, SOCIAL } from "../../utils/foot-list";

function Footer() {
  // const [footItem, setfootItem] = useState();
  // useEffect(() => {
  //   const footFetch = async () => {
  //     const response = await fetch(
  //       `https://firestore.googleapis.com/v1/projects/ecommerce-79a2b/databases/(default)/documents/about`
  //     );
  //     const data = await response.json();
  //     setfootItem(data.documents);
  //   };
  //   footFetch();
  // }, []);
  // console.log({footItem})
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="foot-content">
            <div className="foot-content-part">
              <h4>ABOUT</h4>

              {/* {FOOTER.map((item) => (
                <ul>
                  <li>
                    <a href={item.link}>{item.pg}</a>
                  </li>
                </ul>
              ))} */}
               {FOOTER.map((item) => (
                <ul>
                  <li>
                    <a href={item.link}>{item.pg}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="foot-content-part">
              <h4>HELP</h4>

              {HELP.map((item) => (
                <ul>
                  <li>
                    <a href={item.link}>{item.pg}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="foot-content-part">
              <h4>SOCIAL</h4>

              {SOCIAL.map((item) => (
                <ul>
                  <li>
                    <a href={item.link}>{item.pg}</a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="foot-content-part">
              <h4>Mail Us :</h4>
              <p>
              Shopindeed Internet Private Limited,
                Buildings Alyssa, Begonia &
                Clove Bathery Village,
                Outer Ring Road Village,
                Kochy, 560103, Banglure, India
              </p>
            </div>
         </div>
          <hr />
          <div style={{textAlign:"center",color:"white"}}>© 2007-2022 shopindeed.com </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
