import React, { Component } from 'react';

export default class ComponenteClasse extends Component {
    render(){
        return(<h2>{this.props.valor || 'Valor Padrão'}</h2>)
    }
};

