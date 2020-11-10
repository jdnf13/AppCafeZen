import React, {Fragment} from 'react';
import {Switch,  Route, NavLink} from 'react-router-dom';
import FormCompra from '../components/FormCompra';
import '../css/App.css';
import Footer from './Footer';

const Carro             =   (nextProps, nextState)  =>  {
    
    let Table           =   [];
    let Columna         =   [];
    let Columnas        =   [];
    let recuperarArray = localStorage.getItem('articulos');
    let transforArray   =   JSON.parse(recuperarArray);
    let arrayCarrito    =   [];
    arrayCarrito    =   transforArray;
    let sumatoria=  [];
    
    const eventoBotonQuitar = (event) =>{
        console.log(event.target.id,arrayCarrito);
        let arrayLocalStorage = localStorage.getItem('articulos');
        let arrayQuitar = JSON.parse(arrayLocalStorage);
        let arrayAux = [];
        console.log('arrayQuitar', arrayQuitar)
        arrayQuitar.forEach(item => {
            if(item.id !== parseInt(event.target.id)){
                arrayAux.push(item);
            }
        });
        console.log('se quito ', arrayAux);
        let arrayLimpio = [];
        localStorage.setItem('articulos',JSON.stringify(arrayLimpio)); 
        localStorage.setItem('articulos',JSON.stringify(arrayAux));
        window.location.reload(true);
    }

    function Tabla() {
        Columnas = [];
        Columna = [];
        Table =[];
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
            let key1 = parseInt(arrayCarrito[item].id) + 100
            let key2 = parseInt(arrayCarrito[item].id) + 200
            let key3 = parseInt(arrayCarrito[item].id) + 300
            let key4 = parseInt(arrayCarrito[item].id) + 400
            let key5 = parseInt(arrayCarrito[item].id) + 500
            let key6 = parseInt(arrayCarrito[item].id) + 600
            let key7 = parseInt(arrayCarrito[item].id) + 700
            let key8 = parseInt(arrayCarrito[item].id) + 800
            Columna     =       [
                <Fragment key={key8}>
                    <tr key={arrayCarrito[item].id.toString()}>
                        <th key={key1} id={arrayCarrito[item].id} scope="row">{arrayCarrito[item].id} </th>
                        <td key={key2} id={arrayCarrito[item].Producto}>{arrayCarrito[item].Producto}</td>
                        <td key={key3} id={arrayCarrito[item].Precio}>$ {formatNumberPrecio(formatoPrecio)}</td>
                        <td key={key4} id={arrayCarrito[item].Cantidad}>{arrayCarrito[item].Cantidad}</td>
                        <td key={key5}>$ {formatNumberSubtotal(SubtotalItem)}</td>
                        <td key={key6}><button key={key7} id={arrayCarrito[item].id} className="btn btn-secondary btnQuitar" onClick={eventoBotonQuitar}>-</button></td>
                    </tr>
                </Fragment>
                                ];
            Columnas.push(Columna);
            sumatoria.push(SubtotalItem);
        }

            Table =   [
                <Fragment key="tabla001">
                <table key="TablaP" className="table table-hover table-dark table-responsive-sm" id="Tabla">
                    <thead key="thead">
                        <tr key="tr1">
                        <th key="col1" scope="col">Ref</th>
                        <th key="col2" scope="col">Producto</th>
                        <th key="col3" scope="col">Precio</th>
                        <th key="col4" scope="col">Cantidad</th>
                        <th key="col5" scope="col">SubTotal</th>
                        <th key="col6" scope="col">Quitar</th>
                        </tr>
                    </thead>
                    <tbody key="tbody1">             
                        {Columnas}
                    </tbody>
                </table>                
            </Fragment>
                        ];       
    }else{
        Table   =   [
        <Fragment  key="tabla002">            
            <div key="Table2" className="container">
                <p>Tu Carrito de Compras esta Vacio</p>
            </div>
        </Fragment>]
    }
}
    Tabla();
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
            <Fragment key="total001">
                <hr key="space1"></hr>
                <p key="Total" className="TotalFinal" id = "Total">Total: $ {formatNumber(suma)}</p>
            </Fragment>
        ]
    }else{
        TablaTotal  =   [
            <Fragment key="total002">
                <hr key="space2"></hr>
                <p key="Total2" className="CarroVacio" id = "Total">¡Tu Carrito de Compras esta Vacío!</p>
            </Fragment>
        ];
        Table = [];
    }
    let Pagar = [];
    
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
            <div key="DivContenedor4" className="container">
            <hr key="080808"></hr>
            <NavLink key="090909" to="/Compra" className="btn btn-dark btnPagar" onClick={onClickPagar} >Pagar</NavLink>
        </div>
        ]
    }
    
    return(
        <div key="DivGeneral" >
            <div key="DivContenedor">
                <div key="DivContenedor2" className="container">
                <h3>Carrito de Compras</h3>  
                </div>
                <div key="DivTabla" className="container">

                    {
                    Table
                    }
               
                </div>              
            </div>
            <div key="DivTotal" className="container">
                    {
                        TablaTotal
                    }
            </div>
            <div key="DivPagar" className="container">
                    {
                        Pagar
                    }
            </div>
            <div key="DivAgregar" className="BotonAgregar">
            <p className="ContenedorAgregar"><NavLink to="/Tienda" className="btn btn-dark">Añadir+</NavLink></p>
            </div>
            <Switch key="switch2">
            <Route key="Route2" path="/Compra" component={FormCompra}/>
            </Switch>
            <Footer key="footer2"></Footer>
        </div>
    );
}
export default Carro;