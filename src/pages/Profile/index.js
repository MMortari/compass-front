import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Component
import Loading from './../../components/Loading';
// Style
import { Container, Card } from './../default';
// Services
import api from './../../services/api';

const MySwal = withReactContent(Swal);

export default class Profile extends Component {

  state = {
    user: {},
    userEdited: {},
    loading: true
  }

  async componentDidMount() {
    const localUser = JSON.parse(localStorage.getItem('compassUser'));
    const response = await api.get(`/candidate/${localUser.user.id}`);

    const user = { ...response.data, NOME: localUser.user.name }

    // console.log("User -> ", user);

    this.setState({ user, userEdited: user, loading: false });
  }

  handleApagarUsuario = () => {
    MySwal.fire({
      text: "Você tem certeza que deseja apagar esse usuário?",
      type: 'question'
    })
    console.log("Apagar")
  }

  handleSaveUpdates = () => {
    console.log("Salvar")
  }

  render() {
    return (
      <Container>

        { this.state.loading && (<Loading />) }

        <Card>

          {/* { (JSON.stringify(this.state.userEdited)) } */}

          <h1>Profile</h1>

          <Row style={{marginTop: 50}}>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" defaultValue={this.state.user.EMAIL} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, EMAIL: e.target.value } })} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>RG</Form.Label>
                <Form.Control type="text" placeholder="Enter rg" defaultValue={this.state.user.RG} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, RG: e.target.value } })} />
              </Form.Group>
            </Col>
            <Col xs={3}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Gênero</Form.Label>
                <Form.Control as="select" defaultValue={this.state.user.SEXO} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, SEXO: e.target.value } })}>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="N">Não Binário</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={3}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>PNE</Form.Label>
                <Form.Control as="select" defaultValue={this.state.user.PNE} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, PNE: e.target.value } })}>
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>CEP</Form.Label>
                <Form.Control type="text" placeholder="Enter your sex" defaultValue={this.state.user.CEP} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, CEP: e.target.value } })} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Enter your sex" defaultValue={this.state.user.CIDADE} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, CIDADE: e.target.value } })} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Enter your sex" defaultValue={this.state.user.BAIRRO} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, BAIRRO: e.target.value } })} />
              </Form.Group>
            </Col>
            {/* Botões */}
            <Col xs={3}>
              <Button variant="danger" onClick={this.handleApagarUsuario}>Apagar</Button>
            </Col>
            <Col xs={6}></Col>
            <Col xs={3} style={{ textAlign: 'right' }}>
              <Button variant="success" onClick={this.handleSaveUpdates}>Salvar</Button>
            </Col>
          </Row>


        </Card>
        
      </Container>
    )
  }

}