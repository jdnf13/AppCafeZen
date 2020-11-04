import React, {Fragment} from 'react';
import '../css/App.css'

const FooterInicio    =   ()  =>  {
    return(
        <Fragment>
            <footer>
                <div className="footer-copyright text-center py-3">
                    <p>© 2020 Copyright: Café Zen</p>
                    <p className="copy"><a className="credit" href='https://www.freepik.es/fotos/fondo'>Foto de Fondo creado por freepik - www.freepik.es</a></p>
                </div>
            </footer>
        </Fragment>
    );
}
export default FooterInicio