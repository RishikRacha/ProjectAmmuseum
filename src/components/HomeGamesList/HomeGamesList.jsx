import React from "react";
import GamesList from "../../pages/GamesList/GamesList";
import gameImg1 from "../../assets/GameAssets/gameImg1.jpg";


function HomeGamesList() {
    const defaultGames = [{
            image: gameImg1,
            name: "Carcasonne",
            difficulty: 2.7,
            _id: 69420,
            more: "url",
        },
        {
            image: gameImg1,
            name: "Ticket to Ride",
            difficulty: 3.1,
            _id: 69421,
            more: "url",
        },
        {
            image: gameImg1,
            name: "Catan",
            difficulty: 2.9,
            _id: 69422,
            more: "url",
        },
        {
            image: gameImg1,
            name: "Monopoly",
            difficulty: 2.3,
            _id: 69423,
            more: "url",
        },
        {
            image: gameImg1,
            name: "Pandemic",
            difficulty: 3.0,
            _id: 69424,
            more: "url",
        },
    ];
    return (
        <div>
            <GamesList gameInfo = {defaultGames}/>
        </div>
    );
}

export default HomeGamesList;
