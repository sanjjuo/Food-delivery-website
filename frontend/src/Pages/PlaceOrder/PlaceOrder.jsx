import React from 'react'
import "../PlaceOrder/PlaceOrder.css"

const PlaceOrder = () => {
  return (
    <div>
      <div className="place-order-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="delivery-info">
                <h3>delivery information</h3>
                <form action="">
                  <div className="multi-fields">
                    <input type="text" placeholder='First name' />
                    <input type="text" placeholder='Last name' />
                  </div>
                  <input type="email" name="" id="" placeholder='Email address' />
                  <input type="text" name="" id="" placeholder='Street' />
                  <div className="multi-fields">
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                  </div>
                  <div className="multi-fields">
                    <input type="number" placeholder='Zip code' />
                    <input type="text" placeholder='Country' />
                  </div>
                  <input type="number" name="" id="" placeholder='Phone' />
                </form>
              </div>
            </div>

            <div className="col-md-5">
              <div className="cart-total-section">
                <h4>cart totals</h4>
                <div className="total-titles-price">
                  <div className="total-titles">
                    <ul>
                      <li>subtotal</li>
                      <li>delivery fee</li>
                      <li>total</li>
                    </ul>
                  </div>
                  <div className="total-prices">
                    <ul>
                      <li>Rs. 12</li>
                      <li>Rs. 12</li>
                      <li>Rs. 24</li>
                    </ul>
                  </div>
                </div>
                <button type="button">proceed to payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PlaceOrder
