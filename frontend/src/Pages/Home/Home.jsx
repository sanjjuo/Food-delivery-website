import React, { useState } from 'react'
import "../Home/Home.css"
import Header from '../../Components/Header/Header'
import Question from '../../Components/Question/Question'
import PopularFood from '../../Components/PopularFood/PopularFood'
import Restaurant from '../../Components/Restaurant/Restaurant'
import Menu from '../../Components/Menu/Menu'
import Special from '../../Components/Special/Special'


const Home = () => {
    const [category, setCategory]= useState("All")
  return (
    <div>
      <Header/>
      <Question/>
      <PopularFood/>
      <Restaurant/>
      <Menu/>
      <Special/>
    </div>
  )
}

export default Home
