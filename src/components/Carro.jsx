import React, {Fragment} from 'react';
import {Switch,  Route, NavLink} from 'react-router-dom';
import FormCompra from '../components/FormCompra';
import Footer from './Footer';

const Carro             =   (props)  =>  {
    let Table           =   [];
    let Columna         =   [];
    let Columnas        =   [];
    let recuperarArray = localStorage.getItem('articulos');
    let transforArray   =   JSON.parse(recuperarArray);
    let arrayCarrito    =   [];
    arrayCarrito    =   transforArray;
    let sumatoria=  [];
    console.log('carrito array', arrayCarrito)
    if(arrayCarrito !== null){
        let i       =   arrayCarrito.length;
        let item    =   0;

        for(item    =   0; item < i; item++){

            let formatoPrecio = arrayCarrito[item].Precio
            function formatNumberPrecio(formatoPrecio){
                return new Intl.NumberFormat().format(formatoPrecio);
            }
            

            let CantidadItem    =   arrayCarrito[item].Cantidad;
            let PrecioItem      =   arrayCarrito[item].Precio;
            let SubtotalItem    =   CantidadItem * PrecioItem
            function formatNumberSubtotal(SubtotalItem){
                return new Intl.NumberFormat().format(SubtotalItem);
            }
            Columna     =       [
                <Fragment>
                    <tr key={arrayCarrito[item].id.toString()}>
                        <th scope="row">{arrayCarrito[item].id} </th>
                        <td>{arrayCarrito[item].Producto}</td>
                        <td>$ {formatNumberPrecio(formatoPrecio)}</td>
                        <td>{arrayCarrito[item].Cantidad}</td>
                        <td>$ {formatNumberSubtotal(SubtotalItem)}</td>
                    </tr>
                </Fragment>
                                ];
            Columnas.push(Columna);
            sumatoria.push(SubtotalItem);
        }

            Table =   [
                <Fragment>
                <table className="table table-hover table-dark table-responsive-sm">
                    <thead>
                        <tr>
                        <th scope="col">Ref</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>             
                        {Columnas}
                    </tbody>
                </table>                
            </Fragment>
                        ];       
    }else{
        Table   =   [
        <Fragment>            
            <div className="container">
                <p>Tu Carrito de Compras esta Vacio</p>
            </div>
        </Fragment>]
    }
    /**Calculando el Total */
    let suma = 0;
    sumatoria.forEach(function(sumaSubtoales){
        suma += sumaSubtoales;
    });
    
    let TablaTotal  =   [];
    /**Si se recibe un Total, se renderiza el Total con formato de Moneda */
    if(suma > 0){
        function formatNumber(suma){
            return new Intl.NumberFormat("co-CO",{
                style:"currency",
                currency:"COP",
                maximumSignificantDigits:4
            }).format(suma);
        }
        TablaTotal = [
            <Fragment>
                <hr></hr>
                <p className="TotalFinal" id = "Total">Total: $ {formatNumber(suma)}</p>
            </Fragment>
        ]
    }else{
        TablaTotal  =   [
            <Fragment>
                <hr></hr>
                <p className="CarroVacio" id = "Total">¡Tu Carrito de Compras esta Vacío!</p>
            </Fragment>
        ];
        Table = [];
    }
    let Pagar = [];
    let style = {
        marginTop: "-28%",
        marginRight: "0%",
        width: "15%"

    }

    const onClickPagar = (event)    =>  {
       let OrdenCompra = {
           pedido:arrayCarrito,
           totalPagar:suma
       }
       localStorage.setItem('pedidoCompleto',JSON.stringify(OrdenCompra));   
    } 

    /**Si el Total a Pagar es Mayor a 0, se renderiza el Boton para Pagar */
    if(suma > 0){
        Pagar   =   [
            <Fragment>
            <hr></hr>
            <NavLink to="/Compra" className="btn btn-dark" style={style} onClick={onClickPagar} >Pagar</NavLink>
        </Fragment>
        ]
    }
    
    return(
        <div>
            <div>
                <div className="container">
                <h3>Carrito de Compras</h3>  
                </div>
                <div className="container">

                    {
                    Table
                    }
               
                </div>              
            </div>
            <div className="container">
                    {
                        TablaTotal
                    }
            </div>
            <div className="container">
                    {
                        Pagar
                    }
            </div>
            <Switch>
            <Route path="/Compra" component={FormCompra}/>
            </Switch>
            <Footer></Footer>
        </div>
    );
}
export default Carro;