import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

// Component
import Loading from './../../components/Loading';
import Money from './../../components/Money';
// Styles
import { Container, Card } from './../default';
import './style.css';
// Service
import api from './../../services/api';

export default class SelectivProcess extends Component {

  state = {
    data: {},
    loading: true
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/selectiveProcess/${id}`);

    this.setState({ loading: false, data: response.data[0] })
  }

  render() {
    const { data } = this.state;
    return (
      <Container>
        {this.state.loading && (<Loading />)}
        <Card>
          {/* { JSON.stringify(data) } */}
          <h1>Analista de TI</h1>

          <table>
            <tbody>
              <tr>
                <td>
                  <b>Salário</b>
                  <p><Money value={ data.SALARIO } /></p>
                </td>
                <td>
                  <b>Quantidade</b>
                  <p>{ data.QTD_VAGAS } vagas</p>
                </td>
                <td>
                  <b>Data Inicio</b>
                  <p>{ moment(data.DT_INICIO).format('DD/MM/YYYY') }</p>
                </td>
                <td>
                  <b>Data Final</b>
                  <p>{ moment(data.DT_FIM).format('DD/MM/YYYY') }</p>
                </td>
              </tr>
              <tr>
                <td>
                  <b>PNE</b>
                  <p>{ data.PORC_PNE }%</p>
                </td>
                <td>
                  <b>Etnia</b>
                  <p>{ data.PORC_ETNIA }%</p>
                </td>
                <td>
                  <b>Idoso</b>
                  <p>{ data.PORC_IDOSO }%</p>
                </td>
                <td>
                  <b>LGBTQ</b>
                  <p>{ data.PORC_LGBTQ }%</p>
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <b>Requisitos</b>
                  <p>{ data.DESC_REQUISITOS }</p>
                </td>
              </tr>
              <tr>
                <td className="text-right" colSpan="4">
                  <Link className="btn btn-dark" to="/questions/1">Começar Questionário</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Container>
    )
  }

}