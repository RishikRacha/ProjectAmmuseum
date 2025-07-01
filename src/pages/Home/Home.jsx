import React from 'react'
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import GamesList from '../GamesList/GamesList';

function Home() {
  return (
    <div>
        <Nav/>
        <Carousel />
        <GamesList />
    </div>
  )
}

export default Home