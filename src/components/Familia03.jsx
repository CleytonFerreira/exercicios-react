import React from 'react';

export default (props) =>
    <div>
        <h2>Família 03</h2>
        {React.Children.map(props.children, compFilho => {
            return React.cloneElement(compFilho, { ...props })
        })}
    </div>
