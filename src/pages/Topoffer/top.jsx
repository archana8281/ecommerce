import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'
import { useEffect, useState } from "react";
import { useSearchParams ,useParams } from "react-router-dom";



function Collection
() {
  const [nav, setNav] = useState();
    let [searchParams, setSearchParams] = useSearchParams();
    let { category } = useParams();
    useEffect(() => {
      const navbarFetch = async () => {
        const response = await fetch(
          `https://firestore.googleapis.com/v1/projects/ecommerce-79a2b/databases/(default)/documents/products/product${searchParams.get(
          "id"
        )}`        
        );
        const data = await response.json();
        setNav(data.fields);
      };
      navbarFetch();
    },  [] );
    console.log({ nav });
  return (
    <div>
        <Header/>
        <Navbar/>
       
       
<Footer/>
    </div>
  )
}

export default Collection
