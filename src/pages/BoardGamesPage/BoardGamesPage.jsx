import React, { useEffect, useState } from "react";
import GamesList from "../../pages/GamesList/GamesList";
import axios from "axios";
import Nav from "../../components/Nav/Nav";
import './BoardGamesPage.css'

function BoardGamesPage() {
    const [allGames, setAllGames] = useState();

    const getAllGames = () => {
        axios
            .get("http://localhost:6969/api/games/get-all-games")
            .then((res) => {
                console.log("Data fetched using get-all-games");
                setAllGames(res.data.result);
                console.log(allGames);
            });
    };

    useEffect(() => {
        getAllGames();
    }, []);

    return (
        <div className="BoardGamesPageContainer">
            <Nav />
            <hr /><br />filters<br /><br /><hr /> {/* need to add filter icons */}
            <div className="gamesListDiv">
                <h1>All Our Board Games</h1>
            </div>

            <GamesList gameInfo={allGames} />
        </div>
    );
}

export default BoardGamesPage;
