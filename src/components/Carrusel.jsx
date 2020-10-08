import React from 'react';
import Slider4 from '../images/imagen2.jpg';
import Slider5 from '../images/imagen3.jpg';
import Slider6 from '../images/Banner1.jpg';
import Slider7 from '../images/bannerP2.jpg';
import Slider3 from '../images/Banner1.jpg';
import '../css/App.css';
 
function Carrusel () {

        return (
            <div id="carrusel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carrusel" data-slide-to={Slider4} class="active"></li>
                    <li data-target="#carrusel" data-slide-to={Slider5}></li>
                    <li data-target="#carrusel" data-slide-to={Slider6}></li>
                    <li data-target="#carrusel" data-slide-to={Slider7}></li>                    
                    <li data-target="#carrusel" data-slide-to={Slider3}></li>                    
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src={Slider4}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider5}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider6}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider7}></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src={Slider3}></img>
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
 