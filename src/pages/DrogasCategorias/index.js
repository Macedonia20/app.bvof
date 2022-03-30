import React, { Component } from "react"
import { Row, Col, Card, Container, CardHeader, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom";

class DrogasCategorias extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        { title: "Drogas", link: "/drogas" },
        { title: "Detalhes", link: "#" },
      ],
      page: 1,
      sizePerPage: 10,
      productData: [],
      visible: false,
      modal_standard: false,
      modal_apagar: false,
      filtro: '',
      categorias: '',
      nome: '',
      descricao: '',
      nome_comercial: '',
      categoria: '',
      classificacao: '',
      mecanismo_acao: '',
      distribuicao: '',
      penetracao: '',
      infusao: '',
      metabolizacao: '',
      excrecao: '',
      meia_vida: '',
      contraindicacao: '',
      carcinogenese: '',
      impacto: '',
      principais: '',
      tratamento: '',
      interacao: '',
      consideracoes: '',
      hidratacao: '',
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
    const { data } = await api.get(`/drogas?q=${this.getParams()}`, options);

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
    await api.get(`/drogas/${idItem}`, options)
    .then(({ data })=> {

      this.controlarModal();

      setTimeout(() => {
        this.setValueId('idItem', idItem);
        this.setState({ nome: data.nome });
        this.setState({ descricao: data.descricao });
        this.setState({ categorias: data.categorias });
        this.setState({ nome_comercial: data.nome_comercial });
        this.setState({ categoria: data.categoria });
        this.setState({ classificacao: data.classificacao });
        this.setState({ mecanismo_acao: data.mecanismo_acao });
        this.setState({ distribuicao: data.distribuicao });
        this.setState({ penetracao: data.penetracao });
        this.setState({ infusao: data.infusao });
        this.setState({ metabolizacao: data.metabolizacao });
        this.setState({ excrecao: data.excrecao });
        this.setState({ meia_vida: data.meia_vida });
        this.setState({ contraindicacao: data.contraindicacao });
        this.setState({ carcinogenese: data.carcinogenese });
        this.setState({ impacto: data.impacto });
        this.setState({ principais: data.principais });
        this.setState({ tratamento: data.tratamento });
        this.setState({ interacao: data.interacao });
        this.setState({ consideracoes: data.consideracoes });
        this.setState({ hidratacao: data.hidratacao });
      }, 500);
    });

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
                          <Link to="#" onClick={() => this.controlarModalEdicao(item.iddrogas)}>
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
              <Row className="mb-3">
                  {this.state.nome_comercial ? (<>
                      <Label className="form-label">Nome Comercial: <span style={{ fontWeight: 300 }}>{this.state.nome_comercial}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.categoria ? (<>
                      <Label className="form-label">Categoria: <span style={{ fontWeight: 300 }}>{this.state.categoria}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.classificacao ? (<>
                      <Label className="form-label">Classificação: <span style={{ fontWeight: 300 }}>{this.state.classificacao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.mecanismo_acao ? (<>
                      <Label className="form-label">Mecanismo de ação: <span style={{ fontWeight: 300 }}>{this.state.mecanismo_acao}</span></Label> 
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.distribuicao ? (<>
                      <Label className="form-label">Distribuição: <span style={{ fontWeight: 300 }}>{this.state.distribuicao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.penetracao ? (<>
                      <Label className="form-label">Penetração em SNC: <span style={{ fontWeight: 300 }}>{this.state.penetracao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.infusao ? (<>
                      <Label className="form-label">Via de infusão: <span style={{ fontWeight: 300 }}>{this.state.infusao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.metabolizacao ? (<>
                      <Label className="form-label">Metabolização: <span style={{ fontWeight: 300 }}>{this.state.metabolizacao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.excrecao ? (<>
                      <Label className="form-label">Excreção: <span style={{ fontWeight: 300 }}>{this.state.excrecao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.meia_vida ? (<>
                      <Label className="form-label">Meia vida: <span style={{ fontWeight: 300 }}>{this.state.meia_vida}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.contraindicacao ? (<>
                      <Label className="form-label">Contraindicação: <span style={{ fontWeight: 300 }}>{this.state.contraindicacao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.carcinogenese ? (<>
                      <Label className="form-label">Carcinogênese: <span style={{ fontWeight: 300 }}>{this.state.carcinogenese}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.impacto ? (<>
                      <Label className="form-label">Impacto na fertilidade: <span style={{ fontWeight: 300 }}>{this.state.impacto}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.principais ? (<>
                      <Label className="form-label">Principais efeitos adversos: <span style={{ fontWeight: 300 }}>{this.state.principais}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.tratamento ? (<>
                      <Label className="form-label">Tratamento da toxicidade: <span style={{ fontWeight: 300 }}>{this.state.tratamento}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.interacao ? (<>
                      <Label className="form-label">Interação: <span style={{ fontWeight: 300 }}>{this.state.interacao}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.consideracoes ? (<>
                      <Label className="form-label">Considerações especiais: <span style={{ fontWeight: 300 }}>{this.state.consideracoes}</span></Label>
                  </>) : (<></>)}
              </Row>
              <Row className="mb-3">
                  {this.state.hidratacao ? (<>
                      <Label className="form-label">Hidratação: <span style={{ fontWeight: 300 }}>{this.state.hidratacao}</span></Label>
                  </>) : (<></>)}
              </Row>
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

export default DrogasCategorias;