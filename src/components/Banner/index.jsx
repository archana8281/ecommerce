import React from "react";
import { Carousel } from "responsive-carousel-react";


function Banner() {
  return (
    <section class="regular slider">
      <Carousel   autoPlay={true}>
        <div className="banner">
          <img src="images/banner.png" alt="" className="ban" />
          <div className="ban-con">
            <div className="bans">Starting 99</div>
            customer most loved home range
          </div>
        </div>
        <div className="banner">
          <img src="images/banner.png" alt="" className="ban" />
          <div className="ban-con">
            <div className="bans">Starting 99</div>
            customer most loved home range
          </div>
        </div>
        <div className="banner">
          <img src="images/banner.png" alt="" className="ban" />
          <div className="ban-con">
            <div className="bans">Starting 99</div>
            customer most loved home range
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default Banner;
