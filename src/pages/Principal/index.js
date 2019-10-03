import React, { Component } from 'react';

// Styles
import { Container, Card } from './../default';
import { Title, LittleCard } from './styles';
// Components
import Loading from './../../components/Loading';
// Services
import api from './../../services/api';

export default class Principal extends Component {

  state = {
    processos: [],
    loading: true
  }

  async componentDidMount() {
    const response = await api.get('/selectiveProcess');

    this.setState({ loading: false, processos: response.data });
  }

  handleRedirect = path => {
    this.props.history.push(`${path}`);
  }

  render() {
    return (
      <Container>
        { this.state.loading && (<Loading />) }

        <Card>
          <Title>Processos Seletivos</Title>

          <div className="row">
            { this.state.processos && this.state.processos.map(processo => (
            <div className="col-md-6" key={processo.COD_PRCSS_SELETIVO}>
              <LittleCard onClick={() => this.handleRedirect(`/selectiveProcess/${processo.COD_PRCSS_SELETIVO}`)}>
                <p>Analista de TI</p>

                <small>Clique para inicar as perguntas</small>
              </LittleCard>
            </div>
            )) }
          </div>
        </Card>
      </Container>
    )
  }

}