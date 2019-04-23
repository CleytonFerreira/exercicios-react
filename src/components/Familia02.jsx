import React from 'react';

export default (props) =>
    <div>
        <h1>Componente Família 02</h1>
        {React.cloneElement(props.children, { ...props })}
        {/* este segundo método somente funciona se o componente pai (no caso família02) 
            no index.js tiver somente um filho, O arquivo Familia03 mostra o procedimento
            a se fazer com múltiplos filhos*/}


        {/* método 01 
        {React.cloneElement(props.children, { sobrenome: props.sobrenome })}
         esse método vai clonar os filhos do componente e a partir desse clone, há a  
            possibilidade de se passar propriedades para os clones gerados*/}
    </div>
