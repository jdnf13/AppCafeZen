import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
//import Carro from '../components/Carro';
import '../css/App.css';
//import Tienda from '../components/Tienda';

const Card  =   (props)  =>  {
    let style={
        width: "18rem",
        background: "#000000",  /* fallback for old browsers */
        background: "-webkit-linear-gradient(to bottom, #434343, #000000)",  /* Chrome 10-25, Safari 5.1-6 */
        background: "linear-gradient(to bottom, #434343, #000000)", 
        border: "0px solid #131212",
        borderRadius: "15px",
        //webkitBorderRadius:"15px",
        padding: "-1px",
    }


            //Con esta funcion, damos formato de numero a los precios en el array
            let formato = props.pProducto
            function formatNumber(formato){
                return new Intl.NumberFormat().format(formato);
            }

            
    let precioMostrar   =   formatNumber(formato);
    let nProducto   =   props.nProducto;
    let pProducto   =   props.pProducto
    let imgProducto =   props.imgProducto;
    let id          =   props.id;
    let arrayItems  =   [];
    let arrayCarro  =   [];
    let cantidad=   0;
    /*let cantidadLocal   =   '0';
    let cantidad    =   localStorage.getItem('otrocampo');
    if(cantidad === 0 || cantidad === null || cantidad === '' || cantidad === ' '){
        cantidadLocal   =   0
        console.log('localStorage sin Cantidad', cantidad);
    }else{
        console.log('cantidad en localStorage', cantidad);
        cantidadLocal   =   cantidad;
    }*/

    
    
    const [cant, setCant]   =   useState(0);

    const onClickAñadir  =   (event)  =>{
        /*let recuperaCantidad    =   localStorage.getItem('otrocampo');
        console.log('LocalStorage ==>', recuperaCantidad);
        let nuevaCantidad = '1';
        localStorage.setItem('otrocampo',nuevaCantidad);*/
        
        event.preventDefault();        
        setCant(cant + 1);
        cantidad = cant + 1;
        arrayItems  =   [{
            id,
            nProducto,
            pProducto,
            cantidad,
         }          
        ]; 
        props.onClick(event,arrayItems);       
        arrayCarro.push(arrayItems);
        //let eventoClick = [<Tienda  clickEvento = {cant} /> ];    
         }
    
    const onClickQuitar  =   (event)  =>{
        if(cant >= 1){
            event.preventDefault();
            setCant(cant - 1);
            cantidad = cant - 1;
            arrayItems  =   {
                id,
                nProducto,
                pProducto,
                cantidad,
            };     
            props.onClickRest(event,arrayItems);             
            arrayCarro.push(arrayItems);
        }else{
            setCant(0);
        }

       
            
            }
    
return(
        <div className="container">
            <div className="card" style={style}>
                <img className="card-img-top d-block w-100" src={imgProducto} alt={imgProducto}></img>
                <div className="card-body">
                    <h5 className="card-title">
                        {nProducto}
                    </h5>
                    <h3 className="Precios">$ {precioMostrar}</h3>
                    <p className="Parrafos">Añadir al Carrito</p>
                    <a className="btn btn-dark" onClick={onClickAñadir}>Añadir</a>
                    <a className="btn btn-dark" onClick={onClickQuitar}>Quitar</a>
                    <div className="container">
                        <p className="cantidad">{cant}</p>
                    </div>
                    <div className="container">
                        <p className="cantidadItems">Unidades Añadidas</p>
                    </div>   
                    <div className="container">
                        <NavLink to="/Carro" className="btn btn-dark">Pagar</NavLink>
                    </div>                   
                </div>
            </div>    
        </div>
    );
}
export default Card;
