import React from 'react'
import Banner from '../components/Home/Banner'
import Destination from '../components/Home/Destination'
import ThingsToDo from '../components/Home/ThingsToDo'
import Recommend from '../components/Home/Recommend'

const Home = () => {
  return (
    <>
      <Banner/>
      <Destination/>
      <ThingsToDo/>
      <Recommend/>
    </>
  )
}

export default Home