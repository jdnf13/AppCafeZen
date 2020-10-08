import React, {useState} from 'react';
import '../css/App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Switch,  Route, NavLink} from 'react-router-dom';
import Carro from '../components/Carro';
import Carrusel from '../components/Carrusel'
import Card from '../components/Card'
import Slider1 from '../images/imagen2.jpg';
import Slider2 from '../images/imagen3.jpg';
import Slider3 from '../images/Banner1.jpg';
import Slider4 from '../images/imagen2.jpg';
import Footer from '../components/FooterInicio';
let CarroDeCompras  =   [];
localStorage.setItem('articulos',JSON.stringify(CarroDeCompras));


const Tienda    =   ()  =>  {
    /////////////////////////////////////////////////////////////////////////////////////////////
    //Se usa el State del componente add, para importar el evento desde Card,
    //De esta forma, se muestra el numero de items en el carrito
    let recuperarArray = localStorage.getItem('articulos');
    let transforArray   =   JSON.parse(recuperarArray);
    let items = transforArray.length;
    const [add, setAdd] =  useState(items);
    if(add === 0){
        setAdd(null);
    }

    const añadirItem  =   (event, arrayItems) => {
        let recuperarArray = localStorage.getItem('articulos');
        let transforArray   =   JSON.parse(recuperarArray);    
        let nuevoArray  =   [];
        transforArray.forEach(item => {
            if(item.id !== arrayItems[0].id){
                nuevoArray.push(item);
            }
        });
        localStorage.setItem('articulos',JSON.stringify(nuevoArray)); 

        let arrayFinal = localStorage.getItem('articulos');
        let arrayCarro = JSON.parse(arrayFinal);
        let recibirArrayCard  =
        {
            Cantidad:arrayItems[0].cantidad,
            Precio: arrayItems[0].pProducto,
            Producto: arrayItems[0].nProducto,
            id: arrayItems[0].id
        }
    arrayCarro.push(recibirArrayCard);
    localStorage.setItem('articulos',JSON.stringify(arrayCarro));  
    setAdd(arrayCarro.length);
    }

    const quitarItem    =   (event,arrayItems) =>  {
       
        let recuperarArray = localStorage.getItem('articulos');
        let transforArray   =   JSON.parse(recuperarArray);
        let nuevoArray  =   [];
        transforArray.forEach(item => {
            if(item.id !== arrayItems.id){
                nuevoArray.push(item);
            }
        });
        localStorage.setItem('articulos',JSON.stringify(nuevoArray)); 
        if(arrayItems.cantidad >= 1){
            let arrayFinal = localStorage.getItem('articulos');
            let arrayCarro = JSON.parse(arrayFinal);
            let recibirArrayCard  =
            {
                Cantidad:arrayItems.cantidad,
                Precio: arrayItems.pProducto,
                Producto: arrayItems.nProducto,
                id: arrayItems.id
            }
        arrayCarro.push(recibirArrayCard);
        localStorage.setItem('articulos',JSON.stringify(arrayCarro));  
        setAdd(arrayCarro.length);
        }else{
        setAdd(nuevoArray.length);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    ///////Array que contiene la informacion de los items en venta///////////////////////////////
    let arrayArticulos  =   [
        {
            idArticulo : 1,
            nProducto:'Blend Premium 500g',
            pProducto:20800,
            imgProducto:Slider1
        },
        {
            idArticulo : 6,
            nProducto:'Tradicional 2500g',
            pProducto:70800,
            imgProducto:Slider1
        },
        {
            idArticulo : 2,
            nProducto:'Blend Premium 250g',
            pProducto:16800,
            imgProducto:Slider1
        },
        {
            idArticulo : 3,
            nProducto:'Blend Premium 125g',
            pProducto:6800.0,
            imgProducto:Slider3
        },
        {
            idArticulo : 4,
            nProducto:'Blend Premium 2500g',
            pProducto:99800,
            imgProducto:Slider3
        },
        {
            idArticulo : 5,
            nProducto:'Tradicional 125g',
            pProducto:5800.0,
            imgProducto:Slider3
        },
        {
            idArticulo : 7,
            nProducto:'Albania 125g',
            pProducto:6800.0,
            imgProducto:Slider1
        },
        {
            idArticulo : 8,
            nProducto:'Albania 2500g',
            pProducto:99800,
            imgProducto:Slider1
        }
    ];
    /////////////////////////////////////////////////////////////////////////////////////////////
    ///Se crean los array donde se renderizaran las Card de cada articulo en el arrayArticulos///
    let CardItem    =   [];
    let CardCompose =   [];    
    if(arrayArticulos.length >= 1){/**Si el arrayArticulos tiene items, lo recorremos con un for
         y dibujamos una tarjeta por item, con los datos de cada item */
        
        let item = 0;
        let lengtArray  =   arrayArticulos.length

        for(item = 0; item < lengtArray; item++){
        
            CardItem = [
                <div class="col-lg" id={item}>
                    <Card
                        id={arrayArticulos[item].idArticulo}
                        nProducto={arrayArticulos[item].nProducto}
                        pProducto={arrayArticulos[item].pProducto}
                        imgProducto={arrayArticulos[item].imgProducto}
                        onClick={añadirItem}
                        onClickRest={quitarItem}
                    />                       
                </div>
            ];

        CardCompose.push(CardItem);

        }
    }else{
        CardCompose=[];
    }
    ////////////////////////////////////////////////////////////////////////////////////////////
    return(
        <div>
            <div className="container">
                <h3>Tienda Virtual{ /*Café Zen*/}</h3>
            </div>           
            <div className="carritoCompras">
                <div className="borderCarrito">
                <NavLink to="/Carro"><p className="addItems">{add}</p></NavLink>
                <NavLink to="/Carro"><ShoppingCartIcon style={{color: "white", textAling:"end", fontSize: "40"}} ></ShoppingCartIcon></NavLink>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    {CardCompose}
                </div>
            </div> 
          
             <div className="containerCarrusel">
                <Carrusel></Carrusel>
            </div>
            
            <Footer></Footer>  
            <Switch>
                <Route path="/Carro" component={Carro}/>
            </Switch>                    
        </div>
    )
}
export default Tienda;