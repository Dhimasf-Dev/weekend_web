import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function HelpTips() {
    const [help, setHelp] = useState([])
    
    useEffect(() => {
        axios.get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
        .then(res => setHelp(res.data))
        .catch(err => console.log({err}))
    },[])

    const helpTips = ()=>{
        return help.map (x => {
            return (
                <div class="jumbotron jumbotron-fluid bg-dark">
                    <div class="container">
                        <img src={x.image} alt="img" />
                        <h1 class="display-4">{x.title}</h1>
                        <p class="lead">{x.slug}</p>
                        <Link to={"/home"}>
                            <button class="btn btn-outline-danger">Back</button>
                        </Link>
                    </div>

                </div>
            )
        })
    }

    return (
        <div>
            {helpTips()}
        </div>
    )
}