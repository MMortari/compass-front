import React, { Component } from 'react';

// Styles
import { Container, Cart, Form } from './styles';

export default class Login extends Component {

    state = {
        user: '',
        pass: '',
        loading: false,
    }

    handleChangeUser = e => {
        this.setState({ user: e.target.value });
    }

    handleChangePass = e => {
        this.setState({ pass: e.target.value });
    }

    handleSubmitForm = e => {
        console.log(this.state);
        e.preventDefault();
    }

    render() {
        return (
            <Container>

                <Cart>
                    <h1>Login</h1>

                    <Form onSubmit={this.handleSubmitForm}>
                        <input type="text" onChange={this.handleChangeUser} value={this.state.user} placeholder="Usuário" />
                        <input type="password" onChange={this.handleChangePass} value={this.state.pass} placeholder="Senha" />
                        <button type="submit">Entrar</button>
                    </Form>
                </Cart>
                
            </Container>
        )
    }

}