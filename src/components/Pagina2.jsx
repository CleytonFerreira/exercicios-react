import React from 'react';
import CompC, { CompD, Alias } from '../components/OutrosExports';
import FamiliaSilva from '../components/FamiliaSilva';
import Familia from '../components/Familia';
import Familia02 from '../components/Familia02';
import Familia03 from '../components/Familia03';
import Familia04 from '../components/Familia04';
import Membro from '../components/Membro';
import Pai from '../components/Pai';

export default () => (
    <React.Fragment>
        <h1>Esta é a Página 2</h1>
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
    </React.Fragment>
    
);
