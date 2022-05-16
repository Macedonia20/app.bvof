import React, { Component } from "react"
import { Row, Col, Card, Container, CardHeader, Modal, Button, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Link } from "react-router-dom";

class Mobilizacao extends Component {
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
      nome:'',
      ativo:'',
      indicacoes:'',
      protocolomobilizacao:'',
      contraindicacao:'',
      tempoinfusao:'',
      mecanismoacao:'',
      conservacaotransporte:'',
      consideracoes:'',
      processamentomaterialcoletado:'',
      materiaisnecessarios:'',
      principaisefeitosadversos:'',
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
        this.setState({ indicacoes: data.indicacoes });
        this.setState({ protocolomobilizacao: data.protocolomobilizacao });
        this.setState({ contraindicacao: data.contraindicacao });
        this.setState({ tempoinfusao: data.tempoinfusao });
        this.setState({ mecanismoacao: data.mecanismoacao });
        this.setState({ principaisefeitosadversos: data.principaisefeitosadversos });
        this.setState({ conservacaotransporte: data.conservacaotransporte });
        this.setState({ processamentomaterialcoletado: data.processamentomaterialcoletado });
        this.setState({ materiaisnecessarios: data.materiaisnecessarios });
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
              
              {this.state.indicacoes ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Indicações: <span style={{ fontWeight: 300 }}>{this.format(this.state.indicacoes)}</span></Label>
                </Row>
              </>) : (<></>)}
              
              {this.state.protocolomobilizacao ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Protocolo mobilização: <span style={{ fontWeight: 300 }}>{this.format(this.state.protocolomobilizacao)}</span></Label>
                </Row>
              </>) : (<></>)}
              
              {this.state.contraindicacao ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Contraindicação: <span style={{ fontWeight: 300 }}>{this.format(this.state.contraindicacao)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.tempoinfusao ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Tempo Infusão : <span style={{ fontWeight: 300 }}>{this.format(this.state.tempoinfusao)}</span></Label>
                </Row>
              </>) : (<></>)}
              
              {this.state.mecanismoacao ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Mecanismo ação: <span style={{ fontWeight: 300 }}>{this.format(this.state.mecanismoacao)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.principaisefeitosadversos ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Principais efeitos adversos: <span style={{ fontWeight: 300 }}>{this.format(this.state.principaisefeitosadversos)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.conservacaotransporte ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Conservação de transporte: <span style={{ fontWeight: 300 }}>{this.format(this.state.conservacaotransporte)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.processamentomaterialcoletado ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Processamento do material coletado: <span style={{ fontWeight: 300 }}>{this.format(this.state.processamentomaterialcoletado)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.consideracoes ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Considerações especiais: <span style={{ fontWeight: 300 }}>{this.format(this.state.consideracoes)}</span></Label>
                </Row>
              </>) : (<></>)}

              {this.state.materiaisnecessarios ? (<>
                <Row className="mb-3">
                  <Label className="form-label">Materiais necessarios: <span style={{ fontWeight: 300 }}>{this.format(this.state.materiaisnecessarios)}</span></Label>
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

export default Mobilizacao;