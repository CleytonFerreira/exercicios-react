import React, { Component } from 'react';

export default class Contador extends Component {
    state = {
        numero: 0
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1 })
    }

    alterarNumero = (diferenca) => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Inc</button>
                <button onClick={this.menosUm}>Dec</button>
                <br />
                <button onClick={() => this.alterarNumero(+10)}>Inc10</button>
                <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
            </div>
        )
    }
};


// Solução 01: .bind()
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 02:  Arrow function no onClick do botão
// <button onClick={() => this.maisUm()}>Inc</button>

// Solução 03 transformar a função maisUm em arrow function
// maisUm = () => {
//     this.props.numero++
// }