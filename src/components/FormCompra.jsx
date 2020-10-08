import React,{Fragment, useState} from 'react';
import '../css/App.css';
import Footer from './Footer';


const FormCompra  = ()  => {
    
    let referenciaPago  =  parseInt(Math.random() * (1 - 999999999) + 999999999);//Metodo para crear referencias de pago de numeros aleatorios
    let infoPedido =    localStorage.getItem('pedidoCompleto');
    let pedido  =   JSON.parse(infoPedido);   
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
        /**
         *  <input name="shippingAddress" value={infoCliente.direccionCliente} type="hidden" className="form-control"></input>
            <input name="shippingCity"    type="hidden"  value={infoCliente.ciudadCliente}></input>
            <input name="shippingCountry"    type="hidden"  value="CO"></input>
         */
        //////////////// Metodo para obtener el texto del select a partir del id
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
            nombreCliente = document.getElementById("inputNombre").value,
            apellidoCliente =  document.getElementById("inputApellidos").value,
            direccionCliente = document.getElementById("inputDireccion").value,
            barrioCliente = document.getElementById("inputDireccionDetalle").value,
            telefonosCliente   =   document.getElementById("inputTelefono").value,
            correoCliente  =   document.getElementById("inputCorreo").value,
            departamentoCliente = selected,
            ciudadCliente  =   document.getElementById("inputCiudad").value,
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
            nombre = document.getElementById("inputNombre").placeholder,
            apellido =  document.getElementById("inputApellidos").placeholder,
            direccion = document.getElementById("inputDireccion").placeholder,
            barrio = document.getElementById("inputDireccionDetalle").placeholder,
            telefonos   =   document.getElementById("inputTelefono").placeholder,
            correo  =   document.getElementById("inputCorreo").placeholder,
            departamento =  document.getElementById("inputDepartamento").value,
            ciudad  =   document.getElementById("inputCiudad").value,
        ];

        let itemValidar =   0;
        let arrayLength = infoCliente.length;        
        for(itemValidar=0;itemValidar<arrayLength;itemValidar++){
            if(infoCliente[itemValidar] === '' || infoCliente[itemValidar] === 'Departamento' || infoCliente[itemValidar] === 'Ciudad'){
                validacion = false
                alert('El campo ' + infoClienteText[itemValidar] + ' esta vacio');
            }
        }
        if(validacion){
        localStorage.setItem('envioPedido', JSON.stringify(PedidoEnviar));
        alert('¡' + 'Hola ' +  nombreCliente +'!, '  + ' Gracias por tu pedido, ' + 'Tu referencia de Pago es ' + referenciaPago);
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
                    <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">  
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="input" for="inputNombre">Nombre</label>
                            <input type="text" className="form-control" id="inputNombre" placeholder="Nombres"></input>
                            </div>
                            <div className="form-group col-md-6">
                            <label className="input" for="inputApellidos">Apellidos</label>
                            <input type="text" className="form-control" id="inputApellidos" placeholder="Apellidos"></input>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="input" for="inputDireccion">Dirección</label>
                            <input type="text" className="form-control" id="inputDireccion" placeholder="Dirección"></input>
                        </div>
                        <div className="form-group">
                            <label className="input" for="inputDireccionDetalle">Barrio</label>
                            <input type="text" className="form-control" id="inputDireccionDetalle" placeholder="Barrio, Apartamento, Oficina, Piso, Torre, Casa"></input>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="input" for="inputTelefono">Teléfono/Celular</label>
                            <input type="text" className="form-control" id="inputTelefono" placeholder="Teléfono"></input>
                            </div>
                            <div className="form-group col-md-6">
                            <label className="input" for="inputCorreo">Corre Electrónico</label>
                            <input type="email" className="form-control" id="inputCorreo" placeholder="Correo electrónico"></input>
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
                            <label className="input" for="inputCiudad">Ciudad</label>
                            <select id="inputCiudad" className="form-control">
                                <option selected>Ciudad</option>   
                                {selectCiudadesCompose}                 
                            </select>
                            </div>   
                            <div className="form-group col-md-6">
                            <label className="input" for="inputPago">Medio de Pago</label>
                            <select id="inputPago" className="form-control">
                                <option selected>Referencia de Pago</option>
                            </select>
                            </div>  
                            <div className="form-row">
                                <input name="merchantId" value="508029" type="hidden" className="form-control"></input>
                                <input name="api_key" value= "4Vj8eK4rloUd272L48hsrarnUA" type="hidden" className="form-control"></input>
                                <input name="cuentaId" value="512326" type="hidden" className="form-control"></input>
                                <input name="refVenta" value={referenciaPago} type="hidden" className="form-control"></input>
                                <input name="usuarioId" value={referenciaPago} type="hidden" className="form-control"></input>
                                <input name="descripcion" value="Café 100% Colombiano" type="hidden" className="form-control"></input>
                                <input name="valor" value={pedido.totalPagar} type="hidden" className="form-control"></input>
                                <input name="currency" value="COP" type="hidden" className="form-control"></input>
                                <input name="responseUrl"    type="hidden"  value="http://192.168.0.22:3000/"></input>
                                <input name="confirmationUrl"    type="hidden"  value="http://192.168.0.22:3000"></input>
                               
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