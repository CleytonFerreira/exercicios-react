import React from 'react';

export default (props) =>
    <div>
        <h1>Família 03</h1>
        {React.Children.map(props.children, compFilho => {
            return React.cloneElement(compFilho, { ...props })
        })}
    </div>
