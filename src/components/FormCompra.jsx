import React,{Fragment, useState} from 'react';
import '../css/App.css';
import Footer from './Footer';


const FormCompra  = ()  => {
    
    let referenciaPago  =  parseInt(Math.random() * (1 - 999999999) + 999999999);//Metodo para crear referencias de pago de numeros aleatorios
    let infoPedido =    localStorage.getItem('pedidoCompleto');
    let pedido  =   JSON.parse(infoPedido);  
    let amount = pedido.totalPagar; 
    let signature = ["ME7cLWx8UCl5f7kZo592rk0Bug"+"~"+898269+"~"+referenciaPago+"~"+amount+"~"+"COP"];
    console.log('FIRMA----->>>', signature);
    let validacion = true;
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
                        <option id={item} value={item}>{Departamentos[item]}</option>
            ]
            Opciones.push(SelectItem);
        }     
        selectOpciones  =   [
            <Fragment>
             <option selected>Departamento</option>
                {Opciones}
            </Fragment>
        ]
        SelectCompose.push(selectOpciones);

    }else{
        selectOpciones  =   [
            <select id="inputDepartamento" className="form-control">
                <option selected>Departamento</option>
            </select>
        ]
        SelectCompose.push(selectOpciones);
    }
    
    const onClickFinalizarPedido = (event)  =>  {
       
        //////////////// Metodo para obtener el texto del select a partir del id
        let ObjetoEnviado = {
            merchantId: document.getElementById("merchantId").value,
            apiKey: document.getElementById("apiKey").value,
            accountId:document.getElementById("accountId").value,
            referenceCode:document.getElementById("referenceCode").value,
            usuarioId:document.getElementById("usuarioId").value,
            description:document.getElementById("description").value,
            amount:document.getElementById("amount").value,
            currency:document.getElementById("currency").value,
            tax:document.getElementById("tax").value,
            taxReturnBase:document.getElementById("taxReturnBase").value,
            responseUrl:document.getElementById("responseUrl").value,
            confirmationUrl:document.getElementById("confirmationUrl").value,
            shippingCountry:document.getElementById("shippingCountry").value,
            signature:document.getElementById("signature").value,
        }
        localStorage.setItem('DatosPayU', JSON.stringify(ObjetoEnviado));

        let combo    =   document.getElementById("inputDepartamento");
        let selected    =   combo.options[combo.selectedIndex].text;
        ////////////////////////////////////////////////////////////////////////        
        let nombre = '';
        let nombreCliente = ''
        let apellido= '';
        let direccion   =  '';
        let barrio      =   '';
        let telefonos   =   '';
        let correo  =   '';
        let departamento    =   '';
        let ciudad  =   '';
        let pago    =   '';
        let apellidoCliente = '';
        let direccionCliente   =  '';
        let barrioCliente      =   '';
        let telefonosCliente   =   '';
        let correoCliente  =   '';
        let departamentoCliente    =   '';
        let ciudadCliente  =   '';
        let pagoCliente    =   '';
        //Array para almacenar el valor de los campos y enviar al Pedido
        let infoCliente=    [
            nombreCliente = document.getElementById("buyerFullName").value,
            apellidoCliente =  document.getElementById("inputApellidos").value,
            direccionCliente = document.getElementById("shippingAddress").value,
            barrioCliente = document.getElementById("inputDireccionDetalle").value,
            telefonosCliente   =   document.getElementById("telephone").value,
            correoCliente  =   document.getElementById("buyerEmail").value,
            departamentoCliente = selected,
            ciudadCliente  =   document.getElementById("shippingCity").value,
            pago    =   document.getElementById("inputPago").value,
        ];
        //Array completo con el pedido y datos del usuario
        let PedidoEnviar  =  {
            Pedido: pedido,
            Cliente: infoCliente,
            Referencia: referenciaPago
        }
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

        let itemValidar =   0;
        let arrayLength = infoCliente.length;       
        for(itemValidar=0;itemValidar<arrayLength;itemValidar++){
            if(infoCliente[itemValidar] === ''/* || infoCliente[itemValidar] === 'Departamento' || infoCliente[itemValidar] === 'Ciudad'*/){
                validacion = false
                alert('El campo ' + infoClienteText[itemValidar] + ' esta vacio');
            }
        }
        if(validacion){
        localStorage.setItem('envioPedido', JSON.stringify(PedidoEnviar));
        console.log(ObjetoEnviado);
        alert('¡Información Importante!\n'+'¡' + 'Hola ' +  nombreCliente +'!, '  + ' Debes pagar el costo del envío al momento de recibir el paquete, teniendo en cuenta que este varia de acuerdo al lugar de recidencia, el envío se hara por medio de Servientrega, el numero de guia se te enviara por correo electronico o celular suministrados ' + '\nTu número de pedido es: ' + referenciaPago);
        //let cleanPedido =   '';
        //localStorage.setItem('pedidoCompleto',cleanPedido);
        //let CarroDeCompras  =   [];
        //localStorage.setItem('articulos',JSON.stringify(CarroDeCompras));
        }else{            
            alert('Por seguirdad del pedido,\nvuelve a llenar el formulario y verifica que no te falten datos');
            localStorage.setItem('pedidoCompleto',JSON.stringify(pedido));
            sessionStorage.setItem('articulos',JSON.stringify(pedido))
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
                    <option>{CiudadesDepartamento[itemsCiudades]}</option>
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
                <div className="container">
                    <h3>Datos de Facturación</h3>                
                </div>
                <div className="containerForm">
                    <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/">  
                    <div><p className="ParrafoForm">Los campos con el simbolo (*) son requeridos</p></div>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="input" for="buyerFullName">Nombre</label>
                            <input type="text" className="form-control" name="buyerFullName" id="buyerFullName" placeholder="(*) Nombres" required></input>
                            </div>
                            <div className="form-group col-md-6">
                            <label className="input" for="inputApellidos">Apellidos</label>
                            <input type="text" className="form-control" id="inputApellidos" placeholder="(*) Apellidos" required></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="input" for="shippingAddress">Dirección</label>
                            <input type="text" className="form-control" name="shippingAddress" id="shippingAddress" placeholder="(*) Dirección" required></input>
                        </div>
                        <div className="form-group">
                            <label className="input" for="inputDireccionDetalle">Barrio</label>
                            <input type="text" className="form-control" id="inputDireccionDetalle" placeholder="(*) Barrio, Apartamento, Oficina, Piso, Torre, Casa" required></input>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="input" for="telephone">Teléfono/Celular</label>
                            <input type="text" className="form-control" name="telephone" id="telephone" placeholder="(*) Teléfono" required></input>
                            </div>
                            <div className="form-group col-md-6">
                            <label className="input" for="buyerEmail">Corre Electrónico</label>
                            <input type="email" className="form-control" name="buyerEmail" id="buyerEmail" placeholder="(*) Correo electrónico" required></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label className="input" for="inputDepartamento">Departamento</label>
                            <select onChange={cambioCiudades}id="inputDepartamento" className="form-control">
                            {SelectCompose}
                            </select>                           
                            </div>
                            <div className="form-group col-md-6">
                            <label className="input" for="shippingCity">Ciudad</label>
                            <select name="shippingCity" id="shippingCity" className="form-control">
                                <option selected>Ciudad</option>   
                                {selectCiudadesCompose}                 
                            </select>
                            </div>  
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="Check" required></input>
                                <label class="form-check-label" for="Check"><p className="ParrafoForm">Aceptar terminos y condiciones de manejo de datos personales y envíos</p></label>
                            </div> 
                            <div className="form-group col-md-6">
                            <label className="input" for="inputPago">Medio de Pago</label>
                            <select id="inputPago" className="form-control">
                                <option selected>Referencia de Pago</option>
                                <option>Recoger en Tienda</option>
                            </select>
                            </div>  
                            <div className="form-row">
                                <input name="merchantId" value= {898269} type="hidden" className="form-control"></input>
                                <input name="apiKey" value= "ME7cLWx8UCl5f7kZo592rk0Bug" type="hidden" className="form-control"></input>
                                <input name="accountId" value={904887} type="hidden" className="form-control"></input>
                                <input name="referenceCode" value={referenciaPago} type="hidden" className="form-control"></input>
                                <input name="usuarioId" value={referenciaPago} type="hidden" className="form-control"></input>
                                <input name="description" value="Café 100% Colombiano" type="hidden" className="form-control"></input>
                                <input name="amount" value={pedido.totalPagar} type="hidden" className="form-control"></input>
                                <input name="currency" value="COP" type="hidden" className="form-control"></input>
                                <input name="tax" value={0} type="hidden" className="form-control"></input>
                                <input name="taxReturnBase" value = {0} type="hidden" className="form-control"></input>
                                <input name="responseUrl"    type="hidden"  value="https://www.facebook.com/CafeZenn"></input>
                                <input name="confirmationUrl"    type="hidden"  value="https://www.facebook.com/CafeZenn"></input>
                                <input name="shippingCountry" value="CO" type="hidden" className="form-control"></input>
                                <input name="signature" value={signature} type="hidden" className="form-control"></input>

                            </div> 
                            <div className="form-group col-md-6"> 
                                <div className="container">                        
                                <button onClick={onClickFinalizarPedido} className="btn2 btn btn-dark" type="submit" >¡Vamos!  Realizar Pedido</button>    
                                </div> 
                            </div>                        
                        </div>
                        <div className="form-group">                           
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