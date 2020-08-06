import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Testimonial() {
    const [testimoni, setTestimoni] = useState([])
    
    useEffect(() => {
        axios.get('https://wknd-take-home-challenge-api.herokuapp.com/testimonial')
        .then(res => setTestimoni(res.data))
        .catch(err => console.log({err}))
    },[])

    const testimony = ()=>{
        return testimoni.map (x => {
            return (
                <div class="jumbotron jumbotron-fluid bg-dark">
                    <div class="container">
                        <h1 class="display-4">{x.testimony}</h1>
                        <p class="lead">{x.by}</p>
                        <Link to={"/home"}>
                            <button class="btn btn-outline-primary">Back</button>
                        </Link>
                    </div>

                </div>
            )
        })
    }

    return (
        <div>
            {testimony()}
        </div>
    )
}