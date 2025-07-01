import React, { useState } from 'react'
import './GameDetails.css'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

function GameDetails() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currGame, setCurrGame] = useState({
        _id:'',
        name:'',
        image:'',
        difficulty:'',
        description:'',
        more:'',
    })
    const id = searchParams.get('id');


  return (
    <div>
        GameDetails
        {id}
    </div>
  )
}

export default GameDetails