import React, { useEffect, useState } from 'react'
import './GameDetails.css'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import Nav from '../../components/Nav/Nav';

import gameImg1 from "../../assets/GameAssets/gameImg1.jpg";
import ammuseumLogo from "../../assets/General/ammuseumLogo.png"


function GameDetails() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [game, setGame] = useState({
        _id:'',
        name:'',
        image:'',
        difficulty:'',
        description:'',
        more:'',
    })
    const id = searchParams.get('id');
    
    const tempGame = {
        image: gameImg1,
        name: 'Carcasonne',
        difficulty: 2.7,
        _id: 69420,
        more: '/',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quia harum cum laboriosam inventore amet earum corrupti illo saepe architecto! Mollitia autem distinctio unde, consectetur tempora accusantium modi pariatur. Vitae autem architecto error sint ad dignissimos quis maiores repudiandae veniam? Saepe beatae maxime unde ex autem? Suscipit reiciendis blanditiis itaque magni vitae deserunt provident! Saepe excepturi harum libero, tempore nostrum, eligendi deserunt, voluptatibus magnam nobis natus dolores soluta? Cupiditate mollitia aliquid facilis perferendis iste quaerat, iusto officiis! Molestias enim expedita ducimus maxime sequi optio laborum eaque vero aut quia officiis, facere minima veritatis quas iure nihil excepturi officia, architecto incidunt."

    }
    let images = [gameImg1, ammuseumLogo, gameImg1]

    useEffect(() => {setGame(tempGame);}, []);


return (
    <div> <Nav />

        <div className='gameDetailsContainer'>
            {/* <img src={currGame.image} className='gameDetailsImage' /> */}

            <div className="carouselContainer">
                    {images.map((image, index) => (
                        <div key={index} className="carouselContainerIn">
                            <img src={image} className="carouselImg"/>
                        </div>
                    ))}
            </div>

            <div className='gameDetails'>
                <h2>{game.name}</h2>
                <p>Game id: {id}</p>
                <h3>Complexity: {game.difficulty} ★</h3>

                <p>{game.description}</p>
            </div>

        </div>
    </div>
  )
}

export default GameDetails