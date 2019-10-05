import React, { Component, Fragment } from 'react';
import CountUp from 'react-countup';
import { Progress } from 'react-sweet-progress';
import { Spring } from 'react-spring/renderprops';

// Styles
import { Container, Card, Number } from './styles';
import "react-sweet-progress/lib/style.css";

const seedrandom = require('seedrandom');

export default class Thank extends Component {

  state = {
    questions: [
      Math.floor(Math.random() * 5) + 1, 
      Math.floor(Math.random() * 5) + 1, 
      Math.floor(Math.random() * 5) + 1, 
      Math.floor(Math.random() * 5) + 1, 
      Math.floor(Math.random() * 5) + 1, 
      Math.floor(Math.random() * 5) + 1, 
    ],
    aprovation: 95.536,
    percent: 0,
    loading: true,
    message: ''
  } 

  async componentDidMount() {
    const respostasLocal = await localStorage.getItem('respostasLocal');
    // console.log("respostasLocal -> ", respostasLocal)
    if(respostasLocal) {
      this.setState({ questions: JSON.parse(respostasLocal) });
    }
    // console.log("questions -> ", this.state.questions)

    seedrandom(this.state.questions, { global: true }); 

    const aprovation = Math.random() * 100;
    
    console.time('Time');
    while(this.state.percent < 100) {
      await new Promise(a => {
        setTimeout(() => {
          this.setState({ percent: this.state.percent + Math.floor(Math.random() * 3) })
          a();
        }, 130);
      })
    }
    console.timeEnd('Time');
    // console.log("aprovation -> ", aprovation)

    setTimeout(() => {
      this.setState({ loading: false, aprovation })
    }, 1000);
  }

  response = () => {
    let data = "";
    if(this.state.aprovation <= 50) data = "Infelizente você não possui as habilidades necessárias para essa vaga, continue tentando em outras vagas!";
    if(this.state.aprovation > 50 && this.state.aprovation <= 90) data = "Você tem grande potecial para essa vaga!";
    if(this.state.aprovation > 90) data = "Você é um de nosso melhores candidatos. Aguarde nosso contato!";
    return data;
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

              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{ delay: 4800 }}
                >
                {props => <span style={props}>{this.response()}</span>}
              </Spring>


            </Fragment>
          )}
        </Card>
      </Container>
    )
  }

}

