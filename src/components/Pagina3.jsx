import React from 'react';
import ComponenteClasse from '../components/ComponenteClasse';
import Contador from '../components/Contador';
import Hook from '../components/Hook';
import Clock from '../components/Clock'

export default () => (
    <React.Fragment>
         <h1>Esta é a Página 3</h1>
         <ComponenteClasse valor="Sou um componente de classe"></ComponenteClasse>
         <Contador numero={0}></Contador>
         <Hook></Hook>
        <Clock />
    </React.Fragment>
   
);