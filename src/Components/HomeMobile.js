import React, {useState, useEffect} from 'react'
import indexMobile from '../indexMobile.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [help, setHelp] = useState([])
    
    useEffect(() => {
        axios.get('https://wknd-take-home-challenge-api.herokuapp.com/help-tips')
        .then(res => setHelp(res.data))
        .catch(err => console.log({err}))
    },[])

    const helpTips = ()=>{
        return help.map (x => {
            return (
                <div class="helpTips">
                    <img src={x.image} alt="image" /> 
                    <div class="card-img-overlay">
                        <p class="caption">{x.title}</p>
                        <Link to={"/helpTips"}>
                            <img src="next.png" alt="next" />
                        </Link>
                    </div>
                </div>
            )
        })
    }

    return (
        <div class="main_container">
            {/* PART 1 */}
            <div class="container_1 ">
                <h1 class="title_1 " >WEEKEND FROM HOME</h1>
                <h4 class="title_2" >Stay active with a little workout.</h4>
                <div class="lego">
                    <img src="lego.png" alt="lego" /> <br/>
                    <Link to={"/testimonial"}>
                        <button type="button" class="button" >Let's Go</button>
                     </Link>
               </div>
            </div>

            {/* PART 2 */}
            <div class="container_2">
                <img src="lego_right.png" alt="lego_right" />
                <h5 class="definition"><b>Deffinition;</b> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</h5>
                <h4 class="name">-weekend team</h4>
                <img class="oval" src="oval.png" alt="oval" />
                <div class="testimonial">
                    <h1 class="title_3">Testimonial</h1>
                </div>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">
                                <div class="col-sm-5">
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="title_3">Blu Kicks</h5>
                                        <p class="card-text">Places where you can leverage tools and software to free up time to focus on growing the business.</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-5">
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="title_3">Angelus</h5>
                                        <p class="card-text">All those apps took me months to get running. Now the site practically runs itself!</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="card">
                                    <div class="card-body">
                                        <h5 class="title_3">SoYoung</h5>
                                        <p class="card-text">Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="carousel-item">
                                <div class="row">
                                        <div class="col-sm-5">
                                            <div class="card">
                                            <div class="card-body">
                                                <h5 class="title_3">SoYoung</h5>
                                                <p class="card-text">Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-5">
                                            <div class="card">
                                            <div class="card-body">
                                                <h5 class="title_3">Angelus</h5>
                                                <p class="card-text">All those apps took me months to get running. Now the site practically runs itself!</p>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-2">
                                            <div class="card">
                                            <div class="card-body">
                                                <h5 class="title_3">SoYoung</h5>
                                                <p class="card-text">Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction</p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <img src="prev.png" alt="prev" />
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <img src="next.png" alt="next" />
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
            </div>

            {/* PART 3 */}
            <div class="container_3">
                <div class="box_1">
                    <h1 class="title_4">POV</h1>
                    <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
                <div class="box_2">
                    <h1 class="title_4">Resource</h1>
                    <p class="content">These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best</p>
                </div>
                <div class="box_3">
                    <img class="peanut" src="peanut.png" alt="peanut" />
                    <h1 class="title_4">Help & Tips</h1>
                    {helpTips()}
                </div>
                <div class="box_4">
                    <h1 class="title_4">You’re all set.</h1>
                    <p class="content">The wise man therefore always holds in these matters to this principle of selection.</p>
                </div>
                <div class="box_5">
                    <img class="lego_left" src="lego_left.png" alt="path-3" />
                </div>
            </div>

            {/* FOOTER */}
            <div class="container_4">
                <p class="wknd">wknd@<p class="numb">2020</p></p>
                <div class="version">
                    <p>alpha version 0.1</p>
                </div>
                
            </div>
        </div>
    )
}
