import React from "react"

//no import no index.js o CompC pode ser importado fora de chaves 
//e com qualquer nome por sua exportação ser padrão
export const CompC = (props) => (
    <p>outra forma de exportar: {props.tipo}</p>
)


export const CompD = (props) => (
    <p>outra forma de exportar: {props.tipo}</p>
)

export const CompE = (props) => (
    <p>outra forma de exportar: {props.tipo}</p>
)

export {CompE as Alias}
export default CompC
