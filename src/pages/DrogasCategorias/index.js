import React, { Component } from "react"
import { Row, Col, Card, CardBody, Container, CardTitle, CardHeader, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

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
      filtro: ''
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
        this.setValueId('nome', data.nome);
        this.setValueId('descricao', data.descricao);
        this.setValueId('categorias', data.categorias);
        this.setValueId('nome_comercial', data.nome_comercial);
        this.setValueId('categoria', data.categoria);
        this.setValueId('classificacao', data.classificacao);
        this.setValueId('mecanismo_acao', data.mecanismo_acao);
        this.setValueId('distribuicao', data.distribuicao);
        this.setValueId('penetracao', data.penetracao);
        this.setValueId('infusao', data.infusao);
        this.setValueId('metabolizacao', data.metabolizacao);
        this.setValueId('excrecao', data.excrecao);
        this.setValueId('meia_vida', data.meia_vida);
        this.setValueId('contraindicacao', data.contraindicacao);
        this.setValueId('carcinogenese', data.carcinogenese);
        this.setValueId('impacto', data.impacto);
        this.setValueId('principais', data.principais);
        this.setValueId('tratamento', data.tratamento);
        this.setValueId('interacao', data.interacao);
        this.setValueId('consideracoes', data.consideracoes);
        this.setValueId('hidratacao', data.hidratacao);
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
                          <Card outline color="primary" className="border">
                              <CardHeader className="bg-transparent">
                                  <h5 className="my-0 text-primary"><i className="mdi mdi-bullseye-arrow me-3"></i>{ item.nome }</h5>
                              </CardHeader>
                              <CardBody>
                                  <CardTitle className="text-primary">{ item.categoria }</CardTitle>
                                  <div className="d-grid mb-3">
                                      <Button
                                        color="primary"
                                        className="btn btn-primary btn-lg btn-block "
                                        onClick={() => this.controlarModalEdicao(item.iddrogas)}
                                      >
                                        Ver detalhes...
                                      </Button>
                                  </div>
                              </CardBody>
                          </Card>
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
                Cadastro
            </ModalHeader>
            <ModalBody>
              <Row className="mb-3">
                  <Label className="form-label">Categorias</Label>
                  <Col md={12}>
                      <Input id="categorias" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Nome</Label>
                  <Col md={12}>
                      <Input id="idItem" type="text" style={{ display: 'none' }}/>
                      <Input id="nome" type="text" disabled/>
                  </Col>  
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Nome Comercial</Label>
                  <Col md={12}>
                      <Input id="nome_comercial" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Categoria</Label>
                  <Col md={12}>
                      <Input id="categoria" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Classificação</Label>
                  <Col md={12}>
                      <Input id="classificacao" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Mecanismo de ação</Label>
                  <Col md={12}>
                      <Input id="mecanismo_acao" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Distribuição</Label>
                  <Col md={12}>
                      <Input id="distribuicao" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Penetração em SNC</Label>
                  <Col md={12}>
                      <Input id="penetracao" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Via de infusão</Label>
                  <Col md={12}>
                      <Input id="infusao" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Metabolização</Label>
                  <Col md={12}>
                      <Input id="metabolizacao" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Excreção</Label>
                  <Col md={12}>
                      <Input id="excrecao" type="text" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Meia vida</Label>
                  <Col md={12}>
                      <Input id="meia_vida" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Contraindicação</Label>
                  <Col md={12}>
                      <Input id="contraindicacao" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Carcinogênese</Label>
                  <Col md={12}>
                      <Input id="carcinogenese" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Impacto na fertilidade</Label>
                  <Col md={12}>
                      <Input id="impacto" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Principais efeitos adversos</Label>
                  <Col md={12}>
                      <Input id="principais" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Tratamento da toxicidade</Label>
                  <Col md={12}>
                      <Input id="tratamento" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Interação</Label>
                  <Col md={12}>
                      <Input id="interacao" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Considerações especiais</Label>
                  <Col md={12}>
                      <Input id="consideracoes" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Hidratação</Label>
                  <Col md={12}>
                      <Input id="hidratacao" type="textarea" disabled/>
                  </Col>
              </Row>
              <Row className="mb-3">
                  <Label className="form-label">Descrição</Label>
                  <Col md={12}>
                      <Input id="descricao" type="textarea" disabled/>
                  </Col>
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