import React from 'react'
import "../Cart/Cart.css"
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate()

  return (
    <div className='cart-section'>
      <div className="container">
        <Table bordered>
          <thead>
            <tr>
              <th>items</th>
              <th>title</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th>remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="/food_13.png" alt="" /></td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Otto</td>
              <td className='remove'><RiDeleteBin6Line className='icon ' /></td>
            </tr>
            <tr>
              <td><img src="/food_13.png" alt="" /></td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Otto</td>
              <td className='remove'><RiDeleteBin6Line className='icon ' /></td>
            </tr>
            <tr>
              <td><img src="/food_13.png" alt="" /></td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Otto</td>
              <td>Otto</td>
              <td className='remove'><RiDeleteBin6Line className='icon ' /></td>
            </tr>
          </tbody>
        </Table>

        <div className="row">
          <div className="col-md-6">
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
              <button type="button" onClick={()=>navigate("/order")}>proceed to checkout</button>
            </div>
          </div>
          <div className="col-md-6">
              <div className="promo-code-section">
                  <p>If you have a promo code. Enter it here</p>
                  <div className="promo-input-btn">
                    <input type="text" placeholder='Promo code'/>
                    <button type="submit">Submit</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
