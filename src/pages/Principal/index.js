import React, { Component } from 'react';

import { Container, Card } from './../default';
import { Title, LittleCard } from './styles';

export default class Principal extends Component {

  handleRedirect = path => {
    this.props.history.push(`${path}`);
  }

  render() {
    return (
      <Container>
        <Card>
          <Title>Vagas</Title>

          <div className="row">
            <div className="col-md-6">
              <LittleCard onClick={() => this.handleRedirect('/questions/1')}>
                <p>Analista de TI</p>

                <small>Clique para inicar as perguntas</small>
              </LittleCard>
            </div>
            <div className="col-md-6">
              <LittleCard onClick={() => this.handleRedirect('/questions/1')}>
                <p>Analista de BI</p>

                <small>Clique para inicar as perguntas</small>
              </LittleCard>
            </div>
          </div>
        </Card>
      </Container>
    )
  }

}