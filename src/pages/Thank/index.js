import React, { Component, Fragment } from 'react';
import CountUp from 'react-countup';
import { Progress } from 'react-sweet-progress';

// Styles
import { Container, Card, Number } from './styles';
import "react-sweet-progress/lib/style.css";

const seedrandom = require('seedrandom');

export default class Thank extends Component {

  state = {
    questions: [6, 9, 6, 6, 2, 6, 7],
    aprovation: 95.536,
    percent: 0,
    loading: true,
    message: ''
  }

  async componentDidMount() {
    seedrandom(this.state.questions, { global: true }); 

    const aprovation = Math.random() * 100;
    console.log("aprovation -> ", aprovation)

    while(this.state.percent < 100) {
      await new Promise(a => {
        setTimeout(() => {
          this.setState({ percent: this.state.percent + Math.floor(Math.random() * 3) })
          a();
        }, 90);
      })
    }

    setTimeout(() => {
      this.setState({ loading: false, aprovation })
    }, 1000);
  }

  response = () => {
    let data = "";
    if(this.state.aprovation <= 50) data = "Infelizente você não possui as habilidades necessárias para essa vaga,<br />continue tentando!";
    if(this.state.aprovation > 50 && this.state.aprovation <= 90) data = "Você tem grande capacidade para essa vaga!";
    if(this.state.aprovation > 90) data = "Você é um de nosso melhores candidatos<br />aguarde nosso contato!";
    setTimeout(() => {
      console.log("message")
      return data;
    }, 5000)
  }

  render() {
    const { percent, aprovation, loading } = this.state;
    return (
      <Container>
        <Card>
          {loading ? (
            <Fragment>
              <h1>Obrigado por participar</h1>

              <small style={{ marginBottom: 55 }}>Aguarde enquanto realizamos alguns cálculos!</small>

              <Progress percent={percent} width={percent} />
            </Fragment>
          ) : (
            <Fragment>
              <Number>
                <CountUp 
                  start={0}
                  end={aprovation}
                  duration={5}
                  decimals={3}
                  decimal="," />
                <small>%</small>
              </Number>

              <span>{this.response()}</span>

            </Fragment>
          )}
        </Card>
      </Container>
    )
  }

}

