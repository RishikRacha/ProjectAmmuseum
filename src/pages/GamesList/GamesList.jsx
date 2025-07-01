import React from "react";
import "./GamesList.css";
import GameCard from "../../components/GameCard/GameCard";
import gameImg1 from "../../assets/GameAssets/gameImg1.jpg";

function GamesList() {
    let gameInfo = [{
        image: gameImg1,
        name: 'Carcasonne',
        difficulty: 2.7,
        _id: 69420,
        more: 'url',
    }]


    return (
        <div className="gamesListDiv">
            <h1>Our Fav Games</h1>
            <hr /><br /><br /><br /><hr /> {/* need to add filter icons */}
            <h2>Sub Title</h2>
            <div className="gamesDivContainer">
                <GameCard {...gameInfo[0]}/>
                <GameCard {...gameInfo[0]}/>
                <GameCard {...gameInfo[0]}/>
                <GameCard {...gameInfo[0]}/>
                <GameCard {...gameInfo[0]}/>
            </div>
        </div>
    );
}

export default GamesList;
