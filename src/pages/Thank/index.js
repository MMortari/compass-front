import React, { Component } from 'react';

import { Container, Card } from './styles';

export default class Thank extends Component {

    render() {
        return (
            <Container>
                <Card>
                    <h1>Obrigado por participar</h1>
                    <small>Entraremos em contato com um feedback</small>
                </Card>
            </Container>
        )
    }

}

