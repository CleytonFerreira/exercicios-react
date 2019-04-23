import React from "react";

let funciona = false;

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h2>Funciona?: {funciona ? "sim" : "não"}</h2>
        <h3>{Math.sqrt(144)}</h3>
    </div>


/* export default function() {
    return <h1>Primeiro Componete baseado em função com export junto</h1>
} */



/* export default () =>  <h1>Primeiro Componete baseado em função arrow</h1> */



/* function primeiro(){
    return <h1>Primeiro Componete baseado em função</h1>
}

export default primeiro */

