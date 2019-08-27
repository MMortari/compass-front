import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Container, UserPart, DropdownUser } from './styles';

export default class Header extends Component {

    state = {
        dropdownUser: false
    }

    render() {
        return (
            <Container>
                <div className="">
                    <h1>Compass</h1>
                </div>
                <UserPart onClick={() => this.setState({ dropdownUser: !this.state.dropdownUser })}>
                    <span className="name">Matheus Mortari</span>
                    <div className="image"></div>
                </UserPart>
                <DropdownUser show={this.state.dropdownUser}>
                    <li>
                        <Link to="/">Hello</Link>
                    </li>
                    <li>
                        <Link to="/">Hello</Link>
                    </li>
                </DropdownUser>
            </Container>
        )
    }
}