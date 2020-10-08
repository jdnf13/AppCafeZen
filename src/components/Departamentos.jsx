import React from 'react';

const ciudades  =   (props)  =>  {
let departamentosNull   =   []
localStorage.setItem('ListaDepartamentos', departamentosNull);
let departamentos = {
    1:'Antioquia',
    2:'Atlantico',
    3:'D. C. Santa Fe de Bogotá',
    4:'Bolivar',
    5:'Boyaca',
    6:'Caldas',
    7:'Caqueta',
    8:'Cauca',
    9:'Cesar',
    10:'Cordova',
    11:'Cundinamarca',
    12:'Choco',
    13:'Huila',
    14:'La Guajira',
    15:'Magdalena',
    16:'Meta',
    17:'Nariño',
    18:'Norte de Santander',
    19:'Quindio',
    20:'Risaralda',
    21:'Santander',
    22:'Sucre',
    23:'Tolima',
    24:'Valle',
    25:'Arauca',
    26:'Casanare',
    27:'Putumayo',
    28:'San Andres',
    29:'Amazonas',
    30:'Guainia',
    31:'Guaviare',
    32:'Vaupes',
    33:'Vichada'
}

localStorage.setItem('ListaDepartamentos', JSON.stringify(departamentos));
return (
    <div></div>
);
}
export default ciudades;