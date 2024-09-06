import React, { useState } from 'react'
import "../Home/Home.css"
import Header from '../../Components/Header/Header'
import Question from '../../Components/Question/Question'
import PopularFood from '../../Components/PopularFood/PopularFood'
import Restaurant from '../../Components/Restaurant/Restaurant'
import Menu from '../../Components/Menu/Menu'


const Home = ({foodList, setFoodList, url, handleCart}) => {
    const [category, setCategory]= useState("All")
  return (
    <div>
      <Header/>
      <PopularFood/>
      <Question/>
      <Restaurant/>
      <Menu foodList={foodList} setFoodList={setFoodList} url={url} handleCart={handleCart}/>
    </div>
  )
}

export default Home
