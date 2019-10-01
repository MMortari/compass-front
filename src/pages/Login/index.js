import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Components
import Loading from './../../components/Loading';
// Styles
import { Container, Cart, Form } from './styles';
// Services
import api from './../../services/api';

export default class Login extends Component {

    state = {
        user: '',
        pass: '',
        loading: false,
        message: ''
    }

    handleChangeUser = e => {
        this.setState({ user: e.target.value });
    }

    handleChangePass = e => {
        this.setState({ pass: e.target.value });
    }

    handleSubmitForm = async e => {
        console.log("Clicado");

        this.setState({ loading: true, message: 'Autenticando' });
        
        try {
            const response = await api.post('/authentication', {
                nr_login: this.state.user,
                password: this.state.pass
            });

            sessionStorage.setItem('compassUser', JSON.stringify(response.data));

            this.setState({ loading: false, message: "Autenticado com sucesso!" });

            this.props.history.push(`/`);
        } catch(err) {
            console.log("Erro -> ", err.error);
            this.setState({ loading: false, message: "Erro ao autenticar!" });
        }
    }

    render() {
        return (
            <Container>

                { this.state.loading && (<Loading />) }

                <Cart>
                    <h1>Login</h1>

                    <Form onSubmit={this.handleSubmitForm}>
                        <input type="text" onChange={this.handleChangeUser} value={this.state.user} placeholder="Usuário" />
                        <input type="password" onChange={this.handleChangePass} value={this.state.pass} placeholder="Senha" />
                        <button type="button" onClick={this.handleSubmitForm}>Entrar</button>
                        {this.state.message !== '' && (this.state.message)}
                    </Form>
                </Cart>
                
            </Container>
        )
    }

}