import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Container, UserPart, DropdownUser } from './styles';

export default class Header extends Component {

    state = {
        dropdownUser: true
    }

    handleToggleDropdownUser = () => {
        this.setState({ dropdownUser: this.state.dropdownUser });
    }

    render() {
        return (
            <Container>
                <div className="">
                    <h1>Compass</h1>
                </div>
                <UserPart onClick={this.handleToggleDropdownUser}>
                    <span className="name">Matheus Mortari</span>
                    <div className="image">M</div>
                </UserPart>
                <DropdownUser show={this.state.dropdownUser} onMouseOut={this.handleToggleDropdownUser}>
                    <li>
                        <Link to="/">Meus Processos</Link>
                    </li>
                    <li>
                        <Link to="/">Meu Perfil</Link>
                    </li>
                    <hr />
                    <li>
                        <Link to="/">Sair</Link>
                    </li>
                </DropdownUser>
            </Container>
        )
    }
}