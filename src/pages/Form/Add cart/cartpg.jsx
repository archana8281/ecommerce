import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { CART } from "../../../utils/offer";
import Price from "../../../components/price";

function Cart() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="cart-content">
          <div className="cart-content-left">
            <h3>Shop Cart</h3>
            {CART.map((item) => (
              <div className="cart-content-left-box">
                <div className="left-box-img">
                  <img src={item.image} alt="loading" />
                </div>
                <div className="left-box-detail">
                  <p>{item.text}</p>
                  <h5>{item.head}</h5>
                  <p>{item.stock}</p>
                  <h5>{item.price}</h5>
                  <p>{item.deli}</p>
                  <select name="" id="">
                    <option value="0">{item.select}</option>
                    <option value="1">{item.opt1}</option>
                    <option value="2">{item.opt2}</option>
                    <option value="3">{item.opt3}</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-content-rig">
            <h3>Price Details</h3>
            <div className="cart-content-rig-box">
              <Price />
              <button>Place to Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
