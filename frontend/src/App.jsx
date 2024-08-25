import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarMenu from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer/Footer';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoFastFood } from "react-icons/io5";

const App = () => {
  const url = "http://localhost:4000"
  const [token, setToken] = useState("")
  const [foodList, setFoodList] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
  }, [])

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list")
    setFoodList(response.data.data)
  }

  // cart

  const handleCart = async (menu) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((item) => item._id === menu._id);

    if (existingItem) {
      toast.success(`${menu.name} is already in the cart!`, {
        icon: <IoFastFood style={{ color: "orangered" }} />,
        hideProgressBar: true,
        style: {
          backgroundColor: "#eaf0f0",
          color: "#49557e",
          fontSize: "15px",
          borderRadius: "10px",
          padding: "10px",
          border: "1px solid #b5caca"
        }
      })
    } else {
      toast.success(`${menu.name} added to the cart!`, {
        icon: <IoFastFood style={{ color: "orangered" }} />,
        hideProgressBar: true,
        style: {
          backgroundColor: "#eaf0f0",
          color: "#49557e",
          fontSize: "15px",
          borderRadius: "10px",
          padding: "10px",
          border: "1px solid #b5caca"
        }
      })
      setCart([...cart, menu])
    }
    if (token) {
      await axios.post(url + "/api/cart/add", {menu}, {headers:{token}})
    }

  };

  const handleRemove = (id) => {
    const remove = cart.filter((item) => item._id !== id);
    setCart(remove);
    toast.success("Item removed from the cart");
  };


  return (
    <div className='app'>
      <Link to="/cart"><ToastContainer  /></Link>
      <NavbarMenu url={url} token={token} setToken={setToken} size={cart.length} />
      <Routes>
        <Route path='/' element={<Home foodList={foodList} url={url} handleCart={handleCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} url={url} handleRemove={handleRemove} />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
