import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { DETA, COLOR, RVIEW } from "../../utils/offer";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const [brandItem, setbrandItem] = useState();

  let [searchParams, setSearchParams] = useSearchParams();
  let { id } = useParams();
  const addCart = () => {
    navigate("/cartpg");
    let array = JSON.parse(localStorage.getItem("cartview"))?? [];
    array.unshift(brandItem);
    localStorage.setItem("cartview", JSON.stringify(array));console.log({array})

  };
  
  useEffect(() => {
    const brandFetch = async () => {
      const response = await fetch(
        `https://firestore.googleapis.com/v1/projects/ecommerce-79a2b/databases/(default)/documents/products/product${searchParams.get(
          "id"
        )}`
      );
      const current = await response.json();
      setbrandItem(current.fields);
      // console.log(current.fields);

      let recent = JSON.parse(localStorage.getItem("recentlyview")) ?? [];
      const check = recent.some(
        (item) => item.id.integerValue === current.fields.id.integerValue
      );
      // console.log({ brandItem });
      // console.log({ recent });
      if (check == false) {
        recent.unshift(current.fields);
        localStorage.setItem(
          "recentlyview",
          JSON.stringify(recent.slice(0, 4))
        );
      }

      // console.log({ local: localStorage.getItem("recentlyview") });
    };
    brandFetch();
  }, []);

  // console.log({ id, searchParams: searchParams.get("id") });
  return (
    <div>
      <Header />
      <div className="container">
        <div className="detailpg-main">
          <div className="detailpg-left">
            <img
              src={brandItem?.image?.arrayValue?.values[0]?.stringValue}
              alt="loading"
              className="main-img"
            />

            <div className="map-img">
              {DETA.map((item) => (
                <img src={item.image} alt="loading" />
              ))}
            </div>
            <h4>Product Ratings & Reviews</h4>
            <div className="star-box">
              <div>
                {" "}
                <h2> 3.9 </h2>
              </div>
              <div>
                <img src="/images/detailitems/Star 2.png" alt="loading" />
              </div>
              <div class="bar-text">
                <p>Excellent </p>
                <p>Very Good</p>
                <p>Average</p>
                <p>Poor</p>
              </div>
              <div class="bar">
                <div class="bar-stick-1"></div>
                <div class="bar-stick-2"></div>
                <div class="bar-stick-3"></div>
                <div class="bar-stick-4"></div>
                <div class="bar-stick-5"></div>
              </div>
            </div>
          </div>

          <div className="detailpg-rig">
            <p>
              {brandItem?.text?.stringValue}
              {brandItem?.description?.stringValue}
              {brandItem?.offer?.stringValue}
            </p>
            <div className="detail-am">
              <h3> {brandItem?.price?.stringValue}</h3>{" "}
              <div className="amt"> ₹23,99.00 </div>
              <span>40% off</span>
            </div>
            <b> color</b>
            <div className="colors">
              {COLOR.map((item) => (
                <img src={item.image} alt="loading" />
              ))}
            </div>
            <h4>Brand Fossil</h4>
            <p>
              Model Number FTW4068 Special Feature GPS, Heart Rate Monitor Water
              Resistance Level Water Resistant Band Colour Multicolor
            </p>
            <h4>Product Details</h4>
            <ul>
              <li>Model Number FTW4068</li>
              <li>
                Smartwatches powered with Wear OS by Google work with iPhone and
                Android Phones
              </li>
              <li>
                {" "}
                Extend your battery life for multiple days with new, smart
                battery modes
              </li>
              <li>
                Case size: 44mm; Band size: 22mm; interchangeable with Fossil
                22mm bands; Screen Size: 1.28" Color AMOLED / 416 x 416 / 326ppi
              </li>
              <li>
                {" "}
                resolution; touchscreen functionality; Warranty
                type:Manufacturer; 1 Year International Warranty{" "}
              </li>
            </ul>
            <p>
              {" "}
              Usually delivered in 7 days? Enter pincode for exact delivery
              dates/charges View Details
            </p>

            <button className="btn" onClick={addCart}>
              Add to Cart
            </button>
            <a href="/add">
            <button className="btn2">Buy Now</button>
            </a>
          </div>
        </div>
      </div>

      <div className="brand">
        <div className="container">
          <div className="recently-view">
            <h3>SIMILAR PRODUCTS</h3>
            <hr className="deal-line" />
            <div className="deal-row">
              {RVIEW.map((item1) => (
                <div
                  className="deal-item"
                  onClick={() => {
                    navigate(
                      `/detailpg/${item1?.text?.stringValue}?id=${item1?.id?.integerValue}`
                    );
                  }}
                >
                  <img src={item1.image} alt="loading" />
                  <div className="deal-item-content">
                    <div>{item1.title}</div>
                    <h4>{item1.off}</h4>
                    <div>{item1.adout}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
