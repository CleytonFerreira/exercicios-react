import React from 'react';

export default (props) =>
    <div>
        <h2>Família 01</h2>
        {props.children}
        {/* todos os elementos filhos passados neste componente estarão disponíveis 
            e serão renderizados através de props.children*/}
    </div>

