import React from "react";
import { useEffect, useState } from "react";
import { Offer } from "../../utils/offer";
import { useNavigate } from "react-router-dom";

function Brand() {
  const navigate = useNavigate();
  const [brandItem, setbrandItem] = useState();
  const [view, setView] = useState(false);
  const show = brandItem?.slice(0, 8);
  const show1 = brandItem?.slice(8);
  const detailView = JSON.parse(localStorage.getItem("recentlyview"));
  useEffect(() => {
    const brandFetch = async () => {
      
      const response = await fetch(
        `https://firestore.googleapis.com/v1/projects/ecommerce-79a2b/databases/(default)/documents/products`
      );
      const data = await response.json();
      setbrandItem(data.documents);
      // console.log({brandItem});
    };
    brandFetch();
  }, []);
  
  const toggleView = () => {
    setView(!view);
  };
  // console.log({ show1 });
  console.log({ brandItem });
  
  //  console.log({ detailView });
  return (
    <>
      <div>
        <div className="container" id="topoffer_section">
          <h3>Top Offer</h3>
          <hr className="top-line" />
          <div className="top-list">
            {Offer.map((item)=>(
              <div className="item">
                <img src={item.image} alt="loading" />
                <div className="item-content">
                  {item.title}
                  <h6>{item.off}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="brand">
        <div className="container">
          <div className="recently-view">
            <h3>Recently Viewed Brand</h3>
            <hr className="deal-line" />
            <div className="deal-row">
              {detailView.map((item1)=>(
                <div
                  className="deal-item"
                  onClick={()=>{
                    navigate(
                      `/detailpg/${item1?.text?.stringValue}?id=${item1?.id?.integerValue}`
                    );
                  }}
                >
                  <img
                    src={item1?.image?.arrayValue?.values[0]?.stringValue}
                    alt="loading"
                  />
                  <div className="deal-item-content">
                    <div>{item1?.text?.stringValue}</div>
                    <h4>{item1?.offer?.stringValue}</h4>
                    <div>{item1?.description?.stringValue}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h3>Deals on Top Brand</h3>
          <hr className="deal-line" />
          <div className="deal-row">
            {show &&
              show?.length !== 0 &&
              show.map((item)=>(
                <div
                  className="deal-item"
                  onClick={() => {
                    navigate(
                      `/detailpg/${item?.fields?.text?.stringValue}?id=${item?.fields?.id?.integerValue}`
                    );
                  }}
                >
                  <img
                    src={
                      item?.fields?.image?.arrayValue?.values[0]?.stringValue
                    }
                    alt="loading"
                  />
                  <div className="deal-item-content">
                    <div>{item?.fields?.text?.stringValue}</div>
                    <h4>{item?.fields?.offer?.stringValue}</h4>
                    <div>{item?.fields?.description?.stringValue}</div>
                  </div>
                </div>
              ))}

            {view &&
              show1.map((item)=>(
                <div
                  className="deal-item"
                  onClick={() => {
                    navigate(
                      `/detailpg/${item?.fields?.text?.stringValue}?id=${item?.fields?.id?.integerValue}`
                    );
                  }}
                >
                 
                  <img
                    src={
                      item?.fields?.image?.arrayValue?.values[0]?.stringValue
                    }
                    alt="loading"
                  />
                  <div className="deal-item-content">
                    <div>{item?.fields?.text?.stringValue}</div>
                    <h4>{item?.fields?.offer?.stringValue}</h4>
                    <div>{item?.fields?.description?.stringValue}</div>
                  </div>
                </div>
              ))}
          </div>
          <a className="view" onClick={toggleView}>
            { view ? "Close" : "View All" }
          </a>
        </div>
      </div>
    </>
  );
}
export default Brand;
