import React from 'react'
import Header from '../../components/Header'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'

function about() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className="details">
            <h2 className='details-head'><u>About Us</u></h2>
        <p>
        Shopindeed is guided by four principles: customer obsession rather than competitor focus, passion for invention, 
        commitment to operational excellence, and long-term thinking. Shopindeed strives to be Earth’s most customer-centric 
        company, Earth’s best employer, and Earth’s safest place to work. Customer reviews, 1-Click shopping,
         personalized recommendations, Prime, Fulfillment by Shopindeed, AWS, Kindle Direct Publishing, Kindle, Career Choice, 
         Fire tablets, Fire TV, Shopindeed Echo, Alexa, Just Walk Out technology, Shopindeed Studios, and The Climate Pledge are some 
         of the things pioneered by Shopindeed.
        </p>
        </div>
        <Footer/>
    </div>
  )
}

export default about