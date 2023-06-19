import React from 'react'
import { useEffect, useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { DETA } from '../../utils/offer';

function Index() {
    const [brandItem, setbrandItem] = useState();
    useEffect(() => {
        const brandFetch = async () => {
          const response = await fetch(
            `https://firestore.googleapis.com/v1/projects/ecommerce-79a2b/databases/(default)/documents/products/product10`
          );
          const data = await response.json();
          setbrandItem(data.documents);
        };
        brandFetch();
      }, []);
      console.log({ brandItem });
  return (
    <div>
        <Header/>
        <div className="container">
      <div className='detailpg-main'>
        <div className="detailpg-left">
          <img src="/images/watchm.png" alt="loading" /><div className="map-img">
          {
            DETA.map((item)=>(             
              <img src={item.image} alt="loading" />
            ))
          }</div>
        </div>
        <div className="detailpg-rig">
          <p>ID116 Smart Watch for Womens, Bluetooth Smartwatch Touch Screen Bluetooth Smart Watches for Android iOS Phones 
            Wrist Phone Watch with SIM Card Slot & Camera,Women Men
          </p>
          <div className="detail-am">
          <h4>₹1,4998</h4> ₹23,99.00 <span>40% off</span></div>
          color
          <h4>Brand	Fossil</h4>
          <p>
            Model Number FTW4068 Special
             Feature GPS, Heart Rate Monitor Water
            Resistance Level Water Resistant Band 
            Colour Multicolor
          </p>
          <h4>Product Details</h4>
          <ul>
            <li>Model Number FTW4068</li>
            <li>Smartwatches powered with Wear OS by Google work with iPhone and Android Phones</li>
            <li> Extend your battery life for multiple days with new, smart battery modes</li>
            <li>Case size: 44mm; Band size: 22mm; interchangeable with Fossil 22mm bands; Screen Size: 1.28" Color
            AMOLED / 416 x 416 / 326ppi
            </li>
            <li> resolution; touchscreen functionality; Warranty type:Manufacturer; 1 Year International Warranty </li>
          </ul>
          <p> Usually delivered in 7 days? Enter pincode for exact delivery dates/charges View Details</p>
        </div>
         </div> 
         </div>
        <Footer/>
    </div>
  )
}

export default Index