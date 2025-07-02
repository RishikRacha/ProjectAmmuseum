import React from "react";
import "./GamesList.css";
import GameCard from "../../components/GameCard/GameCard";
import gameImg1 from "../../assets/GameAssets/gameImg1.jpg";

function GamesList({gameInfo = []}) {
    let gameInfos = [{
        image: gameImg1,
        name: 'Carcasonne',
        difficulty: 2.7,
        _id: 69420,
        more: 'url',
    },{
        image: gameImg1,
        name: 'Carcasonne',
        difficulty: 2.7,
        _id: 69420,
        more: 'url',
    },{
        image: gameImg1,
        name: 'Carcasonne',
        difficulty: 2.7,
        _id: 69420,
        more: 'url',
    },{
        image: gameImg1,
        name: 'Carcasonne',
        difficulty: 2.7,
        _id: 69420,
        more: 'url',
    },{
        image: gameImg1,
        name: 'Carcasonne',
        difficulty: 2.7,
        _id: 69420,
        more: 'url',
    },
    ]


    return (
            <div className="gamesDivContainer">
                {gameInfo.map((game, index) => (
                    <GameCard {...game} key={index}/>
                ))}

            </div>
    );
}

export default GamesList;
