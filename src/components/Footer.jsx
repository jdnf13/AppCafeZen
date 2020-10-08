import React, {Fragment} from 'react';
import '../css/App.css'

const Footer    =   ()  =>  {
    return(
        <Fragment>
            <footer className="page-footer font-small mdb-color lighten-3 pt-4">
                <div className="container">
                <div className="row row-filaFooter">                    
                    <div className="col-lg-2 col-md-12 mb-4">                    
                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" className="img-fluid" alt=""></img>                     
                        <a href="">
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg" className="img-fluid"></img>                        
                        <a href="">
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg" className="img-fluid"></img>                        
                        <a href="">
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-12 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(81).jpg" className="img-fluid"
                        alt=""></img>
                        <a href="">
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(82).jpg" className="img-fluid"
                        alt=""></img>
                        <a href="">
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                    <div className="view overlay z-depth-1-half">
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(84).jpg" className="img-fluid"
                        alt=""></img>
                        <a href="">
                        <div className="mask rgba-white-light"></div>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-copyright text-center py-3"><p>© 2020 Copyright: Café Zen</p></div>
            </footer>
        </Fragment>
    );
}
export default Footer