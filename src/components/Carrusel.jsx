import React from 'react';
import Slider1 from '../images/Slide1.PNG';
import Slider2 from '../images/Slide2.PNG';
import Slider3 from '../images/Slide3.PNG';
import Slider4 from '../images/Slide4.PNG';
import Slider5 from '../images/Slide5.png';
import Slider6 from '../images/Slide6.PNG';
import '../css/App.css';
 
function Carrusel () {

        return (
            <div id="carrusel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carrusel" data-slide-to={Slider1} class="active"></li>
                    <li data-target="#carrusel" data-slide-to={Slider2}></li>
                    <li data-target="#carrusel" data-slide-to={Slider3}></li>
                    <li data-target="#carrusel" data-slide-to={Slider4}></li>                    
                    <li data-target="#carrusel" data-slide-to={Slider5}></li>                    
                    <li data-target="#carrusel" data-slide-to={Slider6}></li>                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={Slider1}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider2}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider3}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider4}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider5}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider6}></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carrusel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carrusel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
}

export default Carrusel;
 