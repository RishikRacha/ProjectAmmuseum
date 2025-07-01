import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav/Nav";
import Carousel from "./components/Carousel/Carousel";

function App() {
    const [count, setCount] = useState(0);

    return <div>
        <Nav/>
        <Carousel />

    </div>
}

export default App;
