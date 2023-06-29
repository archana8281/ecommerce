import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";
import Price from "../../../components/price";

function Cart() {
  const navigate = useNavigate();
  const [cartView, setCartview] = useState();

  useEffect(() => {
    setCartview(JSON.parse(localStorage.getItem("cartview")));
  }, [cartView]);

  // const cartView = JSON.parse(localStorage.c));
  // console.log({ cartView });
  const cartOut = (index) => {
    alert(index);
    console.log(cartView);
    if (index > -1) {
      let cartcut = cartView.splice(index, 1);
      setCartview(cartcut);
      localStorage.setItem("cartview", JSON.stringify(cartcut));
    }
    console.log(cartView);
  };

  return (
    <div>
      <Header />
      {console.log({ cartView })}
      <div className="container">
        <div className="cart-content">
          <div className="cart-content-left">
            <h3>Shop Cart</h3>
            {cartView?.map((item, index) => (
              <div className="cart-content-left-box">
                {" "}
                <button className="cart-close" onClick={() => cartOut(index)}>
                  &#x2715;
                </button>
                <div
                  className="cart-content-left-box-detail"
                  onClick={() => {
                    navigate(
                      `/detailpg/${item?.text?.stringValue}?id=${item?.id?.integerValue}`
                    );
                  }}
                >
                  <div className="left-box-img">
                    <img
                      src={item.image.arrayValue.values[0].stringValue}
                      alt="loading"
                    />
                  </div>
                  <div className="left-box-detail">
                    <p>Price (1 item)</p>
                    <h4>{item.text.stringValue}</h4>
                    <p>In stock</p>
                    <h4>{item.price.stringValue}</h4>
                    <p>Delivery by Wed Aug 10 | Free₹40</p>
                    <select name="" id="">
                      <option value="0">Qty</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-content-rig">
            <h3>Price Details</h3>
            <div className="cart-content-rig-box">
              <Price />
              <a href="/add">
                <button>Place to Order</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
