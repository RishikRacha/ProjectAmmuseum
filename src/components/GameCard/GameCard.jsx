import React, { useState } from "react";
import "./Gamecard.css";
import { useNavigate } from "react-router-dom";

function GameCard(gameInfo) {
    const navigate = useNavigate();

    const clickHandler = (_id) => {
        navigate(`/game-details?id=${_id}`);
    }


    return (
        <div className="gameCardContainer" onClick={() => clickHandler(gameInfo._id)}>
            <div className="gameImgDiv">
                <img src={gameInfo.image[0]} alt={`image of ${gameInfo.name}`} className="gameImg" />
            </div>
            <div className="gameCardInfo">
                <h2>{gameInfo.name}</h2>
                <h4>Difficulty: {gameInfo.difficulty} ★</h4>
            </div>
        </div>
    );
}

export default GameCard;
