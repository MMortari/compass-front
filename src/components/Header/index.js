import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Container, UserPart, DropdownUser } from './styles';

export default class Header extends Component {

    state = {
        dropdownUser: false,
        name: '',
        letter: '',
    }

    componentDidMount() {
        const { name, firstLetter } = JSON.parse(localStorage.getItem('compassUser')).user;

        this.setState({ name, letter: firstLetter });
    }

    handleToggleDropdownUser = () => {
        this.setState({ dropdownUser: !this.state.dropdownUser });
    }

    handleLogout = () => {
        localStorage.removeItem('compassUser');
    }

    render() {
        return (
            <Container>
                <div className="">
                    <h1>Compass</h1>
                </div>
                <UserPart onClick={this.handleToggleDropdownUser}>
                    <span className="name">Welcome, { this.state.name }</span>
                    <div className="image">{ this.state.letter }</div>
                </UserPart>
                <DropdownUser show={this.state.dropdownUser} onMouseOut={this.handleToggleDropdownUser}>
                    <li><Link to="/">Meus Processos</Link></li>
                    <li><Link to="/profile">Meu Perfil</Link></li>
                    <hr />
                    <li><Link to="/login" onClick={this.handleLogout}>Sair</Link></li>
                </DropdownUser>
            </Container>
        )
    }
}