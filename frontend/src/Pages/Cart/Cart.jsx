import React, { useEffect, useState } from 'react'
import "../Cart/Cart.css"
import Table from 'react-bootstrap/Table';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { BsArrowRightSquare } from "react-icons/bs";
import { BsArrowLeftSquare } from "react-icons/bs";
import axios from 'axios';
import { toast } from 'react-toastify';

const Cart = ({ cart, url, setCart, handleRemove }) => {

  const [price, setPrice] = useState("")
  const navigate = useNavigate()

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      const quantity = item.quantity || 1;
      const price = item.price || 0;
      ans += quantity * price;
  })
    setPrice(ans);
  }

  useEffect(() => {
    handlePrice()
  }, [cart])


  const incrementQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
    console.log(updatedCart);

  }

  const decrementQty = (id) => {
    const updatedCart = cart.map((item) =>
      item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(updatedCart);
  }

  // const removeItem = async(foodId)=>{
  //   console.log(foodId);
  //   const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
  //   if(response.data.success){
  //     toast.success(response.data.message)
  //   }else{
  //     toast.error("error")
  //   }
    
  // }
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
            {cart.map((item, index) => (
              <tr key={index}>
                <td><img src={`${url}/images/${item.image}`} alt="" /></td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <td><div className='quantity-btns'>
                  <div className="minus" onClick={() => decrementQty(item._id)}><BsArrowLeftSquare size={30}/></div>
                  <div className="quantity">{item.quantity || 1}</div>
                  <div className="plus" onClick={() => incrementQty(item._id)}><BsArrowRightSquare size={30} /></div>
                </div></td>
                <td>$ {item.price * (item.quantity || 1)}</td>
                <td className='remove' onClick={()=>handleRemove(item._id)}><RiDeleteBin6Line className='icon ' /></td>
              </tr>
            ))}
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
                    <li>Rs. {price}</li>
                  </ul>
                </div>
              </div>
              <button type="button" onClick={() => navigate("/order")}>proceed to checkout</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="promo-code-section">
              <p>If you have a promo code. Enter it here</p>
              <div className="promo-input-btn">
                <input type="text" placeholder='Promo code' />
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
