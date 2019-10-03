import React, { Component } from 'react';
import { toast } from 'react-toastify';

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
        buttonName: 'Entrar',
        message: ''
    }

    handleChangeUser = e => {
        this.setState({ user: e.target.value });
    }

    handleChangePass = e => {
        this.setState({ pass: e.target.value });
    }

    handleSubmitForm = async e => {

        this.setState({ loading: true, buttonName: 'Autenticando...' });
        
        try {
            const response = await api.post('/authentication', {
                nr_login: this.state.user,
                password: this.state.pass
            });

            if(response.data.auth) {
                localStorage.setItem('compassUser', JSON.stringify(response.data));
                
                toast.success("Logado com sucesso!");
                this.setState({ loading: false });
    
                this.props.history.push(`/`);
            }
        } catch(err) {
            toast.error("Erro ao autenticar!");
            this.setState({ loading: false, buttonName: 'Entrar' });
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
                        <button type="button" onClick={this.handleSubmitForm}>{ this.state.buttonName }</button>
                        {this.state.message !== '' && (this.state.message)}
                    </Form>
                </Cart>
                
            </Container>
        )
    }

}