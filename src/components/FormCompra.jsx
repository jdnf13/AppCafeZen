import React,{Fragment, useState} from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {NavLink} from 'react-router-dom';
//import Carro from '../components/Carro';
import md5 from 'md5';
import '../css/App.css';
import Footer from './Footer';


const FormCompra  = ()  => {
    
    let recuperarArray = localStorage.getItem('articulos');
    let transforArray   =   [];
    let items = 0;
    if(recuperarArray !== null){
        transforArray   =   JSON.parse(recuperarArray);
        items = transforArray.length;
    }
    const [add, setAdd] =  useState(items);
        if(add === 0){
            setAdd(null);
        }
        

    let referenciaPago  =  parseInt(Math.random() * (1 - 999999999) + 999999999);//Metodo para crear referencias de pago de numeros aleatorios
    let infoPedido =    localStorage.getItem('pedidoCompleto');
    let pedido  =   JSON.parse(infoPedido);  
    let amount = pedido.totalPagar; 
    let signature = md5("ME7cLWx8UCl5f7kZo592rk0Bug"+"~"+898269+"~"+referenciaPago+"~"+amount+"~"+"COP");
    let pedidoLength = pedido.pedido.length;
    let itemPedido = 0;
    let descripcionPedido = [];
    for(itemPedido=0;itemPedido < pedidoLength; itemPedido++){
        let prod = pedido.pedido[itemPedido].Cantidad + pedido.pedido[itemPedido].Producto;
        descripcionPedido.push(prod);
    }
    let descipcionCompra =JSON.stringify(descripcionPedido);
    //let validacion = true;
    let RecuperaDepartamentos   =   localStorage.getItem('ListaDepartamentos');
    let Departamentos   =   JSON.parse(RecuperaDepartamentos);
    let SelectItem  =   [];
    let Opciones    =   [];
    let selectOpciones  =   [];
    let SelectCompose   =   [];
    let Dimensiones =   [];
    if(Departamentos !== null){
    Dimensiones = Object.keys(Departamentos);//Obtengo items del objeto Reordenados en array
    }
    if(Departamentos !== ''){
        let itemLength  =    Dimensiones.length;//Leo la propiedad length del array para conocer numero de departamentos en el Objeto original
        let item        =   0;
        for(item    =   1;  item    <=   itemLength; item++){
            SelectItem  =   [
                        <option key={item} id={item} value={item}>{Departamentos[item]}</option>
            ]
            Opciones.push(SelectItem);
        }     
        selectOpciones  =   [
            <Fragment key="depOpciones">
             <option key="inputDepar" defaultValue>Departamento</option>
                {Opciones}
            </Fragment>
        ]
        SelectCompose.push(selectOpciones);

    }else{
        selectOpciones  =   [
                <option key= "inputDepartamento" defaultValue>Departamento</option>
        ]
        SelectCompose.push(selectOpciones);
    }
    
    const onClickFinalizarPedido = (event)  =>  {
        event.preventDefault();
        //////////////// Metodo para obtener el texto del select a partir del id
        let combo    =   document.getElementById("inputDepartamento");
        let selected    =   combo.options[combo.selectedIndex].text;
        //////////////////Creamos las variables para enviar en el array data        
        let buyerFullName = ''
        let inputApellidos= '';
        let shippingAddress   =  '';
        let inputDireccionDetalle      =   '';
        let telephone   =   '';
        let buyerEmail  =   '';
        let inputDepartamento    =   '';
        let shippingCity  =   '';
        let description    =   '';
        let referencecode = 0;
         
        ////////////////////Creamos las variables para validar campos////////////
        let nombre = '';
        let apellido =  '';
        let direccion = '';
        let barrio = '';
        let telefonos   =  '';
        let correo  =   '';
        let departamento =  '';
        let ciudad  =  '';
        let infoCliente = [
            buyerFullName = document.getElementById("buyerFullName").value,
            inputApellidos =  document.getElementById("inputApellidos").value,
            shippingAddress = document.getElementById("shippingAddress").value,
            inputDireccionDetalle = document.getElementById("inputDireccionDetalle").value,
            telephone   =   document.getElementById("telephone").value,
            buyerEmail  =   document.getElementById("buyerEmail").value,
            inputDepartamento = selected,
            shippingCity  =   document.getElementById("shippingCity").value,
            description = document.getElementById("description").value,
            referencecode = document.getElementById("referenceCode").value,
        ]
        //array que se usara para mostrar mensaje de validacion de campos
        let infoClienteText=    [
            nombre = document.getElementById("buyerFullName").placeholder,
            apellido =  document.getElementById("inputApellidos").placeholder,
            direccion = document.getElementById("shippingAddress").placeholder,
            barrio = document.getElementById("inputDireccionDetalle").placeholder,
            telefonos   =   document.getElementById("telephone").placeholder,
            correo  =   document.getElementById("buyerEmail").placeholder,
            departamento =  document.getElementById("inputDepartamento").value,
            ciudad  =   document.getElementById("shippingCity").value,
        ];
        let validacion = true;
        let itemValidar =   0;
        let arrayLength = infoCliente.length;       
        for(itemValidar=0;itemValidar<arrayLength;itemValidar++){
            if(infoCliente[itemValidar] === '' || infoCliente[itemValidar] === 'Departamento' || infoCliente[itemValidar] === 'Ciudad'){
                validacion = false
                alert('El campo ' + infoClienteText[itemValidar] + ' esta vacio');
            }
        }
        if(validacion){
        alert('¡Información Importante!\n'+'¡' + 'Hola ' +  buyerFullName +'! '  + ' Debes pagar el costo del envío al momento de recibir el paquete, teniendo en cuenta que este varia de acuerdo al lugar de recidencia, el envío se hara por medio de Servientrega, el numero de guia se te enviara por correo electronico o celular suministrados ' + '\nTu número de pedido es: ' + referenciaPago);
        
        let data=    infoCliente;
        console.log('Datos Enviados al Correo = ',data);
        /////////////Metodo para enviar endpoint al API para enviar datos al correo
        fetch("https://tienda.micafezen.com/api/payu", {
            method: 'POST',   
            headers: {
              Accept: "application/json", "Content-Type": "application/json",
              Authorization: "token 900ff9a08db741d3a0da3782d3b47dd171b1b65d",
            },           
            body:   JSON.stringify(data)}).then(response => response.json()).then(data => {      
                    console.log('Datos Enviados al Correo = ',data); 
                    /////////////////Limpiamos el localStorage////////////////////////
                    let CarroDeCompras  =   [];
                    localStorage.setItem('articulos',JSON.stringify(CarroDeCompras));           
            });
        }
         
    }

    
    const [selectCiudadesCompose,setSelect]   =   useState([]);
     
    const cambioCiudades    =   (event) =>  {
        let seleccion = parseInt(document.getElementById('inputDepartamento').value);  
        let RecuperaCiudades    = localStorage.getItem('ListaCiudadesCol');
        let ListaCiudadesCol    =   JSON.parse(RecuperaCiudades);
        let itemsCiudades    = ListaCiudadesCol.length;

        if(itemsCiudades >= 1){
            let CiudadesDepartamento    =   []; 
            
            ListaCiudadesCol.forEach(item => {
                if(item.departamento_id === seleccion){
                    CiudadesDepartamento.push(item.ciudad);
                }
            });
            let selectCiudades  =   [];
            let selectCiudadesTodas =   [];
                let CiudadesLength  =   CiudadesDepartamento.length;
                let itemsCiudades   =   0;
                for(itemsCiudades = 0;itemsCiudades < CiudadesLength; itemsCiudades++){
                    selectCiudades=[
                    <option key={itemsCiudades} id={itemsCiudades}>{CiudadesDepartamento[itemsCiudades]}</option>
                    ];     
                selectCiudadesTodas.push(selectCiudades);                       
                }
                setSelect(
                    selectCiudadesTodas 
                );        
        }
       
    }
        return(
            <div>
                <div key="contenedorCarrito" className="carritoCompras">
                    <div key="contenedorNumeroCarrito" className="borderCarrito">
                    <NavLink key="link1" to="/Carro"><p className="addItems">{add}</p></NavLink>
                    <NavLink key="link2" to="/Carro"><ShoppingCartIcon style={{color: "white", textAling:"end", fontSize: "40"}} ></ShoppingCartIcon></NavLink>
                    </div>
                </div>
                <div key="contenedorTitulo" className="container">
                    <h3 key="TituloFac" >Datos de Facturación</h3>                
                </div>
                <div  className="containerForm">
                    <form  method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/">  
                    <div key="contenedorInfoParrafo" ><p key="ParrafoInfo" className="ParrafoForm">Los campos con el simbolo (*) son requeridos</p></div>
                        <div  className="form-row">
                        <div  className="form-group col-md-6">
                            <label  className="input">Nombre</label>
                            <input key="buyerFullName" type="text" className="form-control" name="buyerFullName" id="buyerFullName" placeholder="(*) Nombres" required></input>
                            </div>
                            <div key="columna2" className="form-group col-md-6">
                            <label key="indicador2" className="input" >Apellidos</label>
                            <input key="inputApellidos" type="text" className="form-control" id="inputApellidos" placeholder="(*) Apellidos" required></input>
                            </div>
                        </div>
                        <div key="fila2" className="form-group">
                            <label key="indicador3" className="input">Dirección</label>
                            <input key="shippingAddress" type="text" className="form-control" name="shippingAddress" id="shippingAddress" placeholder="(*) Dirección" required></input>
                        </div>
                        <div key="fila3" className="form-group">
                            <label key="indicador4" className="input">Barrio</label>
                            <input key="inputDireccionDetalle" type="text" className="form-control" id="inputDireccionDetalle" placeholder="(*) Barrio, Apartamento, Oficina, Piso, Torre, Casa" required></input>
                        </div>
                        <div key="fila4" className="form-row">
                        <div key="grupo2" className="form-group col-md-6">
                            <label key="indicador5" className="input">Teléfono/Celular</label>
                            <input key="telephone" type="text" className="form-control" name="telephone" id="telephone" placeholder="(*) Teléfono" required></input>
                            </div>
                            <div key="fila5" className="form-group col-md-6">
                            <label key="indicador6" className="input" >Corre Electrónico</label>
                            <input key="buyerEmail" type="email" className="form-control" name="buyerEmail" id="buyerEmail" placeholder="(*) Correo electrónico" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div key="grupo3" className="form-group col-md-6">
                            <label key="indicador7" className="input" >Departamento</label>
                            <select onChange={cambioCiudades} key="inputDepartamento" id="inputDepartamento" className="form-control">
                            {SelectCompose}
                            </select>                           
                            </div>
                            <div key="fila7" className="form-group col-md-6">
                            <label key="indicador8" className="input" >Ciudad</label>
                            <select name="shippingCity" key="shippingCity" id="shippingCity" className="form-control">
                                <option key="selectedCiudad" defaultValue>Ciudad</option>   
                                {selectCiudadesCompose}                 
                            </select>
                            </div>  
                            <div className="form-check">
                                <input key="indicador9" type="checkbox" className="form-check-input" id="Check" required></input>
                                <label className="form-check-label"><p className="ParrafoForm">Aceptar terminos y condiciones de manejo de datos personales y envíos</p></label>
                            </div> 
                            <div key="fila9" className="form-group col-md-6">
                            <label key="indicador11" className="input">Tipo de Envío</label>
                            <select key="select3" id="inputPago" className="form-control">
                                <option key="selected3" defaultValue>Contra entrega</option>
                            </select>
                            </div>  
                            <div key="fila10" className="form-row">
                                <input key="input1" name="merchantId" value= {898269} type="hidden" className="form-control"></input>
                                <input key="input2" name="apiKey" value= "ME7cLWx8UCl5f7kZo592rk0Bug" type="hidden" className="form-control"></input>
                                <input key="input3" name="accountId" value={904887} type="hidden" className="form-control"></input>
                                <input key="input4" id="referenceCode" name="referenceCode" value={referenciaPago} type="hidden" className="form-control"></input>
                                <input key="input5" name="usuarioId" value={referenciaPago} type="hidden" className="form-control"></input>
                                <input key="input6" id='description' name="description" value={descipcionCompra} type="hidden" className="form-control"></input>
                                <input key="input7" name="amount" value={pedido.totalPagar} type="hidden" className="form-control"></input>
                                <input key="input8" name="currency" value="COP" type="hidden" className="form-control"></input>
                                <input key="input9" name="tax" value={0} type="hidden" className="form-control"></input>
                                <input key="input10" name="taxReturnBase" value = {0} type="hidden" className="form-control"></input>
                                <input key="input11" name="responseUrl"    type="hidden"  value="https://www.micafezen.com"></input>
                                <input key="input12" name="confirmationUrl"    type="hidden"  value="https://www.micafezen.com"></input>
                                <input key="input13" name="shippingCountry" value="CO" type="hidden" className="form-control"></input>
                                <input key="input14" name="signature" value={signature} type="hidden" className="form-control"></input>

                            </div> 
                            <div key="ContenedorFinalizar" className="form-group col-md-6"> 
                                <div key="ContenedorBtnFinalizar" className="container">                        
                                <button key="btnFinalizar" onClick={onClickFinalizarPedido} className="btn2 btn btn-dark" type="submit" >¡Vamos!  Realizar Pedido</button>    
                                </div> 
                            </div>                        
                        </div>
                        <div key="divFinalizar" className="form-group">                           
                        </div>
                    </form>
                </div>
                <script>
                {/*alert('Asegurate de Suministrar Correctamente los Siguientes datos para Confirmar tu Pedido')*/}
                </script>
                <Footer/>
            </div>
        );
        
    }
export default FormCompra;