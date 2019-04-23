import React from 'react';

export default (props) =>
    <div>
        <h1>Família 01</h1>
        {props.children}
        {/* todos os elementos filhos passados neste componente estarão disponíveis 
            e serão renderizados através de props.children*/}
    </div>

