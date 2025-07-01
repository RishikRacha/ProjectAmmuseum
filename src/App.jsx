import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Carousel from "./components/Carousel/Carousel";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import GameDetails from "./pages/GameDetails/GameDetails";

function App() {
    const [count, setCount] = useState(0);

    return <div>
        <Routes>
            <Route path='*' element={<Home />} />
            <Route path='game-details' element={<GameDetails />}/>
        </Routes>
    </div>
}

export default App;
