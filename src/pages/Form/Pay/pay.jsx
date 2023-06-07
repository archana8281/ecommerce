import React from 'react'
import Price from '../../../components/price'
import Footer from '../../../components/Footer'
import Card from './method1/method1'
import { useState } from 'react'
import UPI from './method2/UPI'
import Cash from './method3/cash'

function PAY() {
    const [pay, setPay] = useState('card')

  const handleClick = (type) => {
    setPay(type)
  }
  return (
    <div>
    <div className="container">
      <a href="/">
        <img src="/images/shop.png" alt="loading" />
      </a>
      <hr />
    </div>
    <div className="container2">
      <h3>Selected Payement Method</h3>
      <div className="container2-content">
          <div className="container2-content-one">
            <div className="content-one-head">
            <a className='pay-btn' onClick={ () => handleClick('card')}>Credit Card</a> 
            <a className='pay-btn'  onClick={ () => handleClick('upi')}>UPI</a >
            <a className='pay-btn' onClick={ () => handleClick('cash')}>Cash on Delivery</a >
             <a className='pay-btn' onClick={ () => handleClick('upi')}>Net Banking</a >
             </div>

             {(() => {
        switch (pay) {
          case 'card':
            return <Card handleClick={handleClick} />
          case 'upi':
            return <UPI handleClick={handleClick} />
          case 'cash':
            return <Cash handleClick={handleClick} />
        //   case 'lost':
        //     return <Lost handleClick={handleClick} />
          default:
            return null
        }
      })()}
          </div>
         <div className="container2-content-two">
          <div className="container2-content-two-box">
              <Price />
              </div>
              </div>
          </div>
      </div>
      <Footer/>
      </div>
  )
}

export default PAY;