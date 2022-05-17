import React, { Component } from "react"
import { Row, Col, Card, Container, CardHeader, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom";

class ReacoesTransfucional extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        { title: "Menu", link: "/dashboard" },
        { title: "Detalhes", link: "#" },
      ],
      page: 1,
      sizePerPage: 10,
      productData: [],
      visible: false,
      modal_standard: false,
      modal_apagar: false,
      filtro: '',
      nome:'',
      ativo:'',
      classificacao:'',
      fisiopatologia:'',
      quadro:'',
      diagnostico:'',
      condutas:'',
      tratamento:'',
      consideracoes:'',
    }

    this.controlarModal = this.controlarModal.bind(this);
  };

  controlarModal() {
    this.setState(prevState => ({
      modal_standard: !prevState.modal_standard
    }));
    this.removeBodyCss();
  }

  async buscarDados() {
    const options = this.getOptions();
    const { data } = await api.get(`/hemoterapia?q=${this.getParams()}`, options);

    this.setState({
      productData: data
    });
  }

  getOptions() {
    let obj = '';
    if (localStorage.getItem("authUser")) {
      obj = JSON.parse(localStorage.getItem("authUser"));
    }

    const options = {
      headers: {"Authorization" : `Bearer ${obj.token}`}
    }

    return options;
  }

  removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  setValueId(nomeId, valor) {
    document.getElementById(nomeId).value = valor;
  }

  getParams() {
    const url = new URL(document.URL);
    const params = new URLSearchParams(url.search);
    return params.get('q');
  }

  async controlarModalEdicao(idItem) {
    const options = this.getOptions();
    await api.get(`/hemoterapia/${idItem}`, options)
    .then(({ data })=> {

      this.controlarModal();

      setTimeout(() => {
        this.setValueId('idItem', idItem);
        this.setState({ nome: data.nome });
        this.setState({ ativo: data.ativo });
        this.setState({ classificacao: data.classificacao });
        this.setState({ fisiopatologia: data.fisiopatologia });
        this.setState({ quadro: data.quadro });
        this.setState({ diagnostico: data.diagnostico });
        this.setState({ condutas: data.condutas });
        this.setState({ tratamento: data.tratamento });
        this.setState({ consideracoes: data.consideracoes });
      }, 500);
    });

  }

  format(text) {
    return text.split('\n').map(str => <p>{str}</p>);
  }

  componentDidMount() {
    this.buscarDados();

    this.setState({
      filtro: this.getParams()
    });
  }

  render() {

    return (
      <React.Fragment>
          <div className="page-content">
              <Container fluid>

              <Breadcrumbs title={this.state.filtro} breadcrumbItems={this.state.breadcrumbItems} />
              <Row>
                  {
                    this.state.productData?.map(item =>
                      <Col lg={4}>
                          <Link to="#" onClick={() => this.controlarModalEdicao(item.idhemoterapia)}>
                              <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                                  <CardHeader className="bg-transparent">
                                      <h5 style={{ padding: '25px', color: '#4aa3ff' }}>{ item.nome }</h5>
                                  </CardHeader>
                              </Card>
                          </Link>
                      </Col>
                    )
                  }
              </Row>
              </Container> 
          </div>
          <Modal
            size="xl"
            isOpen={this.state.modal_standard}
            toggle={this.controlarModal}
          >
            <ModalHeader toggle={() => this.setState({ modal_standard: false })}>
              {this.state.nome}
            </ModalHeader>
            <ModalBody>
              <Row className="mb-3">
                  <Input id="idItem" type="text" style={{ display: 'none' }}/>
              </Row>
              
              {this.state.nome ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Nome: <span style={{ fontWeight: 300 }}>{this.format(this.state.nome)}</span></Label>
                </Row>
              </>) : (<></>)}
              
              {this.state.classificacao ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Classificação: <span style={{ fontWeight: 300 }}>{this.format(this.state.classificacao)}</span></Label>
                </Row>
              </>) : (<></>)}
              
              {this.state.fisiopatologia ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Fisiopatologia: <span style={{ fontWeight: 300 }}>{this.format(this.state.fisiopatologia)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.quadro ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Quadro Clínico: <span style={{ fontWeight: 300 }}>{this.format(this.state.quadro)}</span></Label>
                </Row>
              </>) : (<></>)}
              
              {this.state.diagnostico ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Diagnóstico: <span style={{ fontWeight: 300 }}>{this.format(this.state.diagnostico)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.condutas ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Condutas: <span style={{ fontWeight: 300 }}>{this.format(this.state.condutas)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.tratamento ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Tratamento: <span style={{ fontWeight: 300 }}>{this.format(this.state.tratamento)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.consideracoes ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Considerações especiais: <span style={{ fontWeight: 300 }}>{this.format(this.state.consideracoes)}</span></Label>
                </Row>
              </>) : (<></>)}
              
            </ModalBody>
            <ModalFooter>
              <Button
                type="button"
                onClick={this.controlarModal}
                color="light"
                className="waves-effect"
              >
                  Fechar
              </Button>
            </ModalFooter>
          </Modal>
      </React.Fragment>
    )
  }
}

export default ReacoesTransfucional;