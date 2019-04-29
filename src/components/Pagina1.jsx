import React from 'react';
import PrimeiroComponente from '../components/PrimeiroComponente';
import { CompA, CompB } from '../components/DoisComponentes';
import MultiElementos from '../components/MultiElementos';

export default () => (
    <React.Fragment>
        <h1>Esta é a Página 1</h1>
        <PrimeiroComponente></PrimeiroComponente>
        <CompA valor="Sou o componente A"></CompA>
        <CompB valor="Sou o componente B"></CompB>
        <MultiElementos></MultiElementos>
    </React.Fragment>
);
