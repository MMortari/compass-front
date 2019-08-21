import React from 'react';

import { Container, UserPart } from './styles';

export default function Header() {
    return (
        <Container>
            <div className="">
                <h1>Compass</h1>
            </div>
            <UserPart>
                <span className="name">Matheus Mortari</span>
                <div className="image"></div>
            </UserPart>
        </Container>
    )
}