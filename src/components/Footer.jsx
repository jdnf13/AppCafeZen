import React, {Fragment} from 'react';
import '../css/App.css'
import SlideFooter1 from '../images/CAFE_ZEN.jpg';
import SlideFooter2 from '../images/DSC_0333.jpg';
import SlideFooter3 from '../images/DSC_0319.jpg';
import SlideFooter4 from '../images/DSC_0305.jpg';
import SlideFooter5 from '../images/cafe1.jpg';
import SlideFooter6 from '../images/DSC_0308.jpg';

const Footer    =   ()  =>  {
    return(
        <Fragment>
            <footer className="page-footer font-small mdb-color lighten-3 pt-4">
                <div className="container">
                <div className="row row-filaFooter">                    
                    <div className="col-lg-2 col-md-12 mb-4">                    
                    <div className="view overlay z-depth-1-half">
                        <img src={SlideFooter1} className="img-fluid" alt=""></img>                     
                        <a>
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src={SlideFooter2} className="img-fluid"></img>                        
                        <a>
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src={SlideFooter3} className="img-fluid"></img>                        
                        <a>
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src={SlideFooter4} className="img-fluid"
                        alt=""></img>
                        <a>
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src={SlideFooter5} className="img-fluid"
                        alt=""></img>
                        <a>
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src={SlideFooter6} className="img-fluid"
                        alt=""></img>
                        <a>
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-copyright text-center py-3">
                    <p>© 2020 Copyright: Café Zen</p>
                    <p className="copy"><a className="credit" href='https://www.freepik.es/fotos/fondo'>Foto de Fondo creado por freepik - www.freepik.es</a></p>
                </div>
            </footer>
        </Fragment>
    );
}
export default Footer