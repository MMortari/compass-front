import React, { Component, Fragment } from 'react';
import CountUp from 'react-countup';
import { Progress } from 'react-sweet-progress';

// Styles
import { Container, Card } from './styles';
import "react-sweet-progress/lib/style.css";

const seedrandom = require('seedrandom');

export default class Thank extends Component {

  state = {
    questions: [2, 5, 6, 9, 2, 3, 7],
    aprovation: 95.536,
    percent: 0,
    loading: true
  }

  componentDidMount() {
    seedrandom(this.state.questions, { global: true }); 

    const aprovation = Math.random() * 100;
    console.log("aprovation -> ", aprovation)

    // while(this.state.percent <= 100) {
    //   setTimeout(() => {
    //     this.setState({ percent: this.state.percent + 50 })
    //   }, 50);
    // }

    setTimeout(() => {
      this.setState({ loading: false, aprovation })
    }, 5000);
  }

  render() {
    const { percent, aprovation, loading } = this.state;
    return (
      <Container>
        <Card>
          {loading ? (
            <Fragment>
              <h1>Obrigado por participar</h1>

              <small>Aguarde enquanto realizamos alguns cálculos!</small>

              <Progress percent={percent} width={percent} />
            </Fragment>
          ) : (
            <Fragment>
              <CountUp 
                start={0}
                end={aprovation}
                duration={5}
                decimals={3}
                decimal=","
                suffix="%" />

              {
                setTimeout(() => {
                  if(aprovation <= 50) return (<small>Infelizente você não possui as habilidades necessárias para essa vaga,<br />continue tentando!</small>);
                  if(aprovation > 50 && aprovation <= 90) return (<small>Você tem grande capacidade para essa vaga!</small>);
                  if(aprovation > 90) return (<small>Você é um de nosso melhores candidatos<br />aguarde nosso contato!</small>);
                }, 5000)
              }
              {/* {aprovation <= 50 && (
                <small>Infelizente você não possui as habilidades necessárias para essa vaga,<br />continue tentando!</small>
              )}
              {aprovation > 50 && aprovation <= 90 && (
                <small>Você tem grande capacidade para essa vaga!</small>
              )}
              {aprovation > 90 && (
                <small>Você é um de nosso melhores candidatos<br />aguarde nosso contato!</small>
              )} */}

            </Fragment>
          )}
        </Card>
      </Container>
    )
  }

}

