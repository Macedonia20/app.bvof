import React, { Component } from "react"
import { Row, Col, Card, CardBody, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

// datatable related plugins
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider, PaginationListStandalone,
  SizePerPageDropdownStandalone
} from 'react-bootstrap-table2-paginator';

import { ToastContainer, toast } from 'react-toastify';

import ToolkitProvider from 'react-bootstrap-table2-toolkit';

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

class Identidades extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        { title: "Menu", link: "/dashboard" },
        { title: "Cadastro", link: "#" },
      ],
      page: 1,
      sizePerPage: 10,
      productData: [],
      visible: false,
      modal_standard: false,
      modal_apagar: false,
      filtro: ''
    }

    this.abrirModal = this.abrirModal.bind(this);
    this.abrirModalApagar = this.abrirModalApagar.bind(this);
  };

  async buscarIdentidades() {
    const { data } = await api.get(`/identidade?filtro=${this.state.filtro}`);

    this.setState({
      productData: data
    });
  }

  pesquisar() {
    const valorPesquisa = this.getValueId('valorPesquisar');
    
    if (document.getElementsByClassName("page-link").length > 0) {
      document.getElementsByClassName("page-link")[0].click();
    }
    
    this.setState({
      filtro: valorPesquisa
    });
    this.buscarIdentidades();
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

  async abrirModalEdicao(idIdentidade) {
    const options = this.getOptions();
    await api.get(`/identidade/${idIdentidade}`, options)
    .then(({ data })=> {

      this.abrirModal();

      setTimeout(() => {
        this.setValueId('idIdentidade', idIdentidade);
        this.setValueId('nome', data.nome);
        this.setValueId('situacao', data.situacao);
        this.setValueId('gestor', data.gestor);
        this.setValueId('cargo', data.cargo);
        this.setValueId('area', data.area);
        this.setValueId('empresa', data.empresa);
      }, 500);
    });

  }

  cadastrarOuEditarIdentidade() {
    const existeId = document.getElementById('idIdentidade').value;

    if (existeId) {
      this.editarIdentidade();
    } else {
      this.cadastrarIdentidade();
    }
  }

  async cadastrarIdentidade() {
    try {
      const novaIdentidade = {
        nome: this.getValueId('nome'),
        situacao: this.getValueId('situacao'),
        gestor: this.getValueId('gestor'),
        cargo: this.getValueId('cargo'),
        area: this.getValueId('area'),
        empresa: this.getValueId('empresa')
      }
  
      if (!this.validarCampos(novaIdentidade)) {
        return false;
      }
  
      await api.post('/identidade', novaIdentidade)
      .then(() => {
        this.abrirModal();
        toast.success('Identidade Cadastrada');
      });

    } catch (error) {
      toast.error('Não foi possível cadastrar a identidade');
    }
  }

  async editarIdentidade() {
    try {
      const identidadeSelecionada = {
        nome: this.getValueId('nome'),
        situacao: this.getValueId('situacao'),
        gestor: this.getValueId('gestor'),
        cargo: this.getValueId('cargo'),
        area: this.getValueId('area'),
        empresa: this.getValueId('empresa')
      }
  
      if (!this.validarCampos(identidadeSelecionada)) {
        return false;
      }

      const idIdentidade = document.getElementById('idIdentidade').value;
  
      const options = this.getOptions();
      await api.put(`/identidade/${idIdentidade}`, identidadeSelecionada, options)
      .then(() => {
        this.abrirModal();
        toast.success('Identidade Atualizada');
        this.buscarIdentidades()
      });

    } catch (error) {
      toast.error('Não foi possível editar a identidade');
    }
  }

  async apagarIdentidade(idIdentidade) {
    const options = this.getOptions();
    await api.get(`/identidade/${idIdentidade}`, options)
    .then(({ data })=> {

      this.abrirModalApagar();

      setTimeout(() => {
        this.setValueId('idApagar', idIdentidade);
        this.setValueId('nomeApagar', data.nome);
      }, 500);
    });
  }

  async apagarPermanentemente() {
    const idIdentidade = document.getElementById('idApagar').value;
    const options = this.getOptions();
    await api.delete(`/identidade/${idIdentidade}`, options)
    .then(()=> {

      this.abrirModalApagar();
      toast.success('Identidade apagada com sucesso');
      this.buscarIdentidades();
    });
  }

  validarCampos(identidade) {
    const { nome, situacao, gestor, cargo, area, empresa } = identidade;

    if (!nome) {
      toast.error('Campo nome obrigatório');
      return false;
    }

    if (!situacao) {
      toast.error('Campo situacao obrigatório');
      return false;
    }

    if (!gestor) {
      toast.error('Campo gestor obrigatório');
      return false;
    }

    if (!cargo) {
      toast.error('Campo cargo obrigatório');
      return false;
    }

    if (!area) {
      toast.error('Campo área obrigatório');
      return false;
    }

    if (!empresa) {
      toast.error('Campo empresa obrigatório');
      return false;
    }

    return true;
  }

  getValueId(nomeId) {
    return document.getElementById(nomeId).value;
  }

  setValueId(nomeId, valor) {
    document.getElementById(nomeId).value = valor;
  }

  abrirModal() {
    this.setState(prevState => ({
      modal_standard: !prevState.modal_standard
    }));
    this.removeBodyCss();
  }

  abrirModalApagar() {
    this.setState(prevState => ({
      modal_apagar: !prevState.modal_apagar
    }));
    this.removeBodyCss();
  }

  removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  componentDidMount() {
    this.buscarIdentidades();
  }

  render() {

    const columns = [{
      dataField: 'nome',
      text: 'Nome',
      sort: true
    }, {
      dataField: 'situacao',
      text: 'Situação',
      sort: true,
      formatter: (cellContent, row) => (
        <Badge
          className={`font-size-12 badge-soft-${row.situacao === 'ATIVO' ? 'success' : 'danger'}`}
          color={`${row.situacao === 'ATIVO' ? 'success' : 'danger'}`}
          pill
        >
          {row.situacao}
        </Badge>
      ),
    }, {
      dataField: 'gestor',
      text: 'Gestor',
      sort: true
    }, {
      dataField: 'cargo',
      text: 'Cargo',
      sort: true
    }, {
      dataField: 'area',
      text: 'Área',
      sort: true
    }, {
      dataField: 'empresa',
      text: 'Empresa',
      sort: true
    }, {
      dataField: 'ididentidades',
      isDummyField: true,
      text: "Opções",
      formatter: (cellContent, row) => (
        <React.Fragment>
          <Link to="#" onClick={() => this.abrirModalEdicao(row.ididentidades)} className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
          <Link to="#" onClick={() => this.apagarIdentidade(row.ididentidades)} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
        </React.Fragment>
      ),
    }];

    const defaultSorted = [{
      dataField: 'nome',
      order: 'asc'
    }];

    const pageOptions = {
      sizePerPage: 10,
      totalSize: this.state.productData.length, // replace later with size(customers),
      custom: true,
    }

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="page-content">
          <div className="container-fluid">
            <Breadcrumbs title="Identidades" breadcrumbItems={this.state.breadcrumbItems} />

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='ididentidades'
                      columns={columns}
                      data={this.state.productData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField='ididentidades'
                          columns={columns}
                          data={this.state.productData}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>

                              <Row className="mb-2">
                                <Col md="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <Row className="mb-3">
                                          <Col md={10}>
                                              <Input id="valorPesquisar" type="text" placeholder="Pesquisar" onChange={() => this.pesquisar()}/>
                                          </Col>
                                      </Row>
                                      <i className="search-box chat-search-box" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">
                                    <Button
                                      type="button"
                                      color="primary"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.abrirModal}
                                    >
                                      Cadastrar
                                    </Button>
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col xl="12">
                                  <div className="table-responsive">
                                    <BootstrapTable
                                      keyField='ididentidades'
                                      responsive
                                      bordered={false}
                                      striped={false}
                                      defaultSorted={defaultSorted}
                                      ref={(n) => (this.node = n)}
                                      classes={
                                        "table align-middle table-nowrap"
                                      }
                                      headerWrapperClasses={"thead-light"}
                                      {...toolkitProps.baseProps}
                                      {...paginationTableProps}
                                    />

                                  </div>
                                </Col>
                              </Row>

                              <Row className="align-items-md-center mt-30">
                                <Col className="inner-custom-pagination d-flex">
                                  <div className="d-inline">
                                    <SizePerPageDropdownStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                  <div className="text-md-right ms-auto">
                                    <PaginationListStandalone
                                      {...paginationProps}
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </React.Fragment>
                          )
                          }
                        </ToolkitProvider>
                      )
                      }</PaginationProvider>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <Modal
          isOpen={this.state.modal_standard}
          toggle={this.abrirModal}
        >
          <ModalHeader toggle={() => this.setState({ modal_standard: false })}>
              Cadastro de Usuário
          </ModalHeader>
          <ModalBody>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Nome</Label>
                <Col md={10}>
                    <Input id="idIdentidade" type="text" style={{ display: 'none' }}/>
                    <Input id="nome" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Situação</Label>
                <Col md={10}>
                    <select id="situacao" className="form-control">
                        <option value="ATIVO">Ativo</option>
                        <option value="INATIVO">Inativo</option>
                    </select>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Gestor</Label>
                <Col md={10}>
                    <Input id="gestor" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Cargo</Label>
                <Col md={10}>
                    <Input id="cargo" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Área</Label>
                <Col md={10}>
                    <Input id="area" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Empresa</Label>
                <Col md={10}>
                    <Input id="empresa" type="text"/>
                </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              onClick={this.abrirModal}
              color="light"
              className="waves-effect"
            >
              Fechar
          </Button>
            <Button
              type="button"
              color="primary" className="waves-effect waves-light"
              onClick={() => this.cadastrarOuEditarIdentidade()}
            >
              Salvar
          </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal_apagar}
          toggle={this.abrirModalApagar}
        >
          <ModalHeader toggle={() => this.setState({ modal_apagar: false })}>
              Apagar Usuário
          </ModalHeader>
          <ModalBody>
            <Input id="idApagar" type="text" style={{ display: 'none' }}/>
            <p id="nomeApagar">Você tem certeza que deseja apagar a identidade essa ação é irreversível.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              onClick={this.abrirModalApagar}
              color="light"
              className="waves-effect"
            >
              Fechar
          </Button>
            <Button
              type="button"
              color="danger" className="waves-effect waves-light"
              onClick={() => this.apagarPermanentemente()}
            >
              Apagar permanentemente 
          </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Identidades;