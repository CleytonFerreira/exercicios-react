import React from 'react';
import ReactDOM from 'react-dom';
import PrimeiroComponente from './components/PrimeiroComponente';
import { CompA, CompB } from './components/DoisComponentes';
import MultiElementos from './components/MultiElementos';
import CompC, { CompD, Alias } from './components/OutrosExports';
import FamiliaSilva from './components/FamiliaSilva';
import Familia from './components/Familia';
import Familia02 from './components/Familia02';
import Familia03 from './components/Familia03';
import Familia04 from './components/Familia04';
import Membro from './components/Membro';
import Pai from './components/Pai';
import ComponenteClasse from './components/ComponenteClasse';
import Contador from './components/Contador'
import Hook from './components/Hook'

const elemento = document.getElementById("root");
ReactDOM.render(
    <div>
        <Contador numero={0}></Contador>
        <PrimeiroComponente valor="Meu primeiro componente"></PrimeiroComponente>
        <CompA valor="Sou o componente A"></CompA>
        <CompB valor="Sou o componente B"></CompB>
        <MultiElementos></MultiElementos>
        <CompC tipo="componente C"></CompC>
        <CompD tipo="componente D"></CompD>
        <Alias tipo="componente E"></Alias>
        <FamiliaSilva></FamiliaSilva>
        <Familia nome="Andre" sobrenome="Arruda">
            <Membro nome="Francisco" sobrenome="Arruda"></Membro>
            <Membro nome="Paulo" sobrenome="Arruda"></Membro>
            <Membro nome="Pedro" sobrenome="Arruda"></Membro>
        </Familia>
        <Familia02 sobrenome="Viana">
            <Membro nome="João"></Membro>
        </Familia02>
        <Familia03 sobrenome="Almeida">
            <Membro nome="Bruno"></Membro>
            <Membro nome="Joaquim"></Membro>
        </Familia03>
        <Familia04 sobrenome="Nogueira">
            <Membro nome="Isabella"></Membro>
            <Membro nome="Henrique"></Membro>
        </Familia04>
        <Pai></Pai>
        <ComponenteClasse valor="Sou um componente de classe"></ComponenteClasse>
        <Hook></Hook>    
    </div>
    , elemento);


/* const elemento = document.getElementById("root");
ReactDOM.render(<h1>Olá React!</h1> , elemento); */

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

