import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';
import axios from 'axios';

// Component
import Loading from './../../components/Loading';
// Style
import { Container, Card } from './../default';
// Services
import api from './../../services/api';

const MySwal = withReactContent(Swal);

export default class Profile extends Component {

  state = {
    id: null,
    user: {},
    userEdited: {},
    loading: true
  }

  async componentDidMount() {
    const localUser = JSON.parse(localStorage.getItem('compassUser'));
    const response = await api.get(`/candidate/${localUser.user.id}`);

    const user = { ...response.data };

    // console.log("User -> ", user);

    this.setState({ user, userEdited: user, loading: false, id: localUser.user.id });
  }

  handleApagarUsuario = () => {
    MySwal.fire({
      text: "Você tem certeza que deseja apagar esse usuário?",
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then(async result => {
      if(result.value) {
        const resultado = await api.delete(`/candidate/${this.state.id}`);

        if(resultado.status) {
          localStorage.removeItem('compassUser');
          this.props.history.push('/login')
          toast.success("Usuário apagado com sucesso!");
        } else {
          toast.error("Erro ao apagar usuário");
        }
      }
    })
  }

  handleSaveUpdates = async () => {
    const { user, userEdited } = this.state;

    const userEditedA = Object.keys(userEdited);

    const alterado = [];

    userEditedA.map(data => {
      if(user[data] !== userEdited[data]) alterado.push({ data: userEdited[data]});
      return true;
    })

    if(alterado.length > 0) {
      this.setState({ loading: true });

      const response = await api.put(`/candidate/${this.state.id}`, this.state.userEdited);
  
      if(response.status) {
        this.setState({ user: userEdited, loading: false });

        toast.success("Usuário alterado com sucesso!");
      } else {
        toast.error("Erro ao alterar usuário!");
        this.setState({ loading: false });
      }
    } else {
      toast.info("É necessário alterar o usuário!");
      this.setState({ loading: false });
    }
  }

  handleCEP = async e => {
    const text = e.target.value;

    if(text.length === 8) {
      this.setState({ loading: true });
      const response = await axios.get(`http://viacep.com.br/ws/${text}/json/`);

      if(response.status === 200) {
        this.setState({ loading: false, userEdited: { ...this.state.userEdited, CIDADE: response.data.localidade, BAIRRO: response.data.bairro } })
      }
    }
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
                <Form.Control type="email" placeholder="Coloque seu email" defaultValue={this.state.userEdited.EMAIL} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, EMAIL: e.target.value } })} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>RG</Form.Label>
                <Form.Control type="text" placeholder="Coloque seu RG" defaultValue={this.state.userEdited.RG} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, RG: e.target.value } })} />
              </Form.Group>
            </Col>
            <Col xs={3}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Gênero</Form.Label>
                <Form.Control as="select" defaultValue={this.state.userEdited.SEXO} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, SEXO: e.target.value } })}>
                  <option value="M">Masculino</option>
                  <option value="F">Feminino</option>
                  <option value="N">Não Binário</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={3}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>PNE</Form.Label>
                <Form.Control as="select" defaultValue={this.state.userEdited.PNE} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, PNE: e.target.value } })}>
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>CEP</Form.Label>
                <Form.Control type="text" placeholder="Coloque seu CEP" maxLength="8" defaultValue={this.state.userEdited.CEP} onChange={e => {this.setState({ userEdited: { ...this.state.userEdited, CEP: e.target.value } }); this.handleCEP(e)}} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Coloque sua cidade" defaultValue={this.state.userEdited.CIDADE} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, CIDADE: e.target.value } })} />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Coloque seu bairro" defaultValue={this.state.userEdited.BAIRRO} onChange={e => this.setState({ userEdited: { ...this.state.userEdited, BAIRRO: e.target.value } })} />
              </Form.Group>
            </Col>
            {/* Botões */}
            <Col xs={6}>
              <Button variant="danger" onClick={this.handleApagarUsuario}>Apagar Usuário</Button>
            </Col>
            <Col xs={6} style={{ textAlign: 'right' }}>
              <Button variant="success" onClick={this.handleSaveUpdates}>Salvar Edição</Button>
            </Col>
          </Row>


        </Card>
        
      </Container>
    )
  }

}