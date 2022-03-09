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
    const { data } = await api.get(`/usuarios`);

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

  async abrirModalEdicao(idUsuarios) {
    const options = this.getOptions();
    await api.get(`/usuarios/${idUsuarios}`, options)
    .then(({ data })=> {

      this.abrirModal();

      setTimeout(() => {
        this.setValueId('idUsuarios', idUsuarios);
        this.setValueId('nome', data.nome);
        this.setValueId('email', data.email);
        this.setValueId('tipo', data.tipo);
        this.setValueId('ativo', data.ativo);
        this.setValueId('senha', data.senha);
      }, 500);
    });

  }

  cadastrarOuEditarIdentidade() {
    const existeId = document.getElementById('idUsuarios').value;

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
        email: this.getValueId('email'),
        senha: this.getValueId('senha'),
        ativo: this.getValueId('ativo'),
        tipo: this.getValueId('tipo')
      }
  
      if (!this.validarCampos(novaIdentidade)) {
        return false;
      }
  
      await api.post('/usuarios', novaIdentidade)
      .then(() => {
        this.abrirModal();
        toast.success('Usuário Cadastrado');
        this.buscarIdentidades();
      });

    } catch (error) {
      toast.error('Não foi possível cadastrar o usuário');
    }
  }

  async editarIdentidade() {
    try {
      const identidadeSelecionada = {
        nome: this.getValueId('nome'),
        email: this.getValueId('email'),
        senha: this.getValueId('senha'),
        tipo: this.getValueId('tipo'),
        ativo: this.getValueId('ativo')
      }
  
      if (!this.validarCampos(identidadeSelecionada)) {
        return false;
      }

      const idUsuarios = document.getElementById('idUsuarios').value;
  
      const options = this.getOptions();
      await api.put(`/usuarios/${idUsuarios}`, identidadeSelecionada, options)
      .then(() => {
        this.abrirModal();
        toast.success('Usuário atualizado');
        this.buscarIdentidades();
      });

    } catch (error) {
      toast.error('Não foi possível editar o usuário');
    }
  }

  async apagarIdentidade(idUsuarios) {
    const options = this.getOptions();
    await api.get(`/usuarios/${idUsuarios}`, options)
    .then(({ data })=> {

      this.abrirModalApagar();

      setTimeout(() => {
        this.setValueId('idApagar', idUsuarios);
        this.setValueId('nomeApagar', data.nome);
      }, 500);
    });
  }

  async apagarPermanentemente() {
    const idUsuarios = document.getElementById('idApagar').value;
    const options = this.getOptions();
    await api.delete(`/usuarios/${idUsuarios}`, options)
    .then(()=> {

      this.abrirModalApagar();
      toast.success('Usuário apagado com sucesso');
      this.buscarIdentidades();
    });
  }

  validarCampos(usuario) {
    const { nome, email, senha, tipo, ativo } = usuario;

    if (!nome) {
      toast.error('Campo nome obrigatório');
      return false;
    }

    if (!email) {
      toast.error('Campo email obrigatório');
      return false;
    }

    if (!senha) {
      toast.error('Campo senha obrigatório');
      return false;
    }

    if (!ativo) {
      toast.error('Campo status obrigatório');
      return false;
    }

    if (!tipo) {
      toast.error('Campo tipo obrigatório');
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
      dataField: 'tipo',
      text: 'Tipo',
      sort: true,
      formatter: (cellContent, row) => (
        <Badge
          className={`font-size-12 badge-soft-${row.tipo === 'A' ? 'success' : 'info'}`}
          color={`${row.tipo === 'A' ? 'success' : 'info'}`}
          pill
        >
          {row.tipo === 'A' ? 'Administrador' : 'Usuário'}
        </Badge>
      ),
    }, {
      dataField: 'email',
      text: 'Email',
      sort: true
    }, {
      dataField: 'ativo',
      text: 'Status',
      sort: true,
      formatter: (cellContent, row) => (
        <Badge
          className={`font-size-12 badge-soft-${row.ativo === '1' ? 'success' : 'danger'}`}
          color={`${row.ativo === '1' ? 'success' : 'danger'}`}
          pill
        >
          {row.ativo === '1' ? 'Ativo' : 'Inativo'}
        </Badge>
      )
    }, {
      dataField: 'idusuarios',
      isDummyField: true,
      text: "Opções",
      formatter: (cellContent, row) => (
        <React.Fragment>
          <Link to="#" onClick={() => this.abrirModalEdicao(row.idusuarios)} className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
          <Link to="#" onClick={() => this.apagarIdentidade(row.idusuarios)} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
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
            <Breadcrumbs title="Usuários" breadcrumbItems={this.state.breadcrumbItems} />

            <Row>
              <Col className="col-12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField='idusuarios'
                      columns={columns}
                      data={this.state.productData}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField='idusuarios'
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
                                      keyField='idusuarios'
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
                    <Input id="idUsuarios" type="text" style={{ display: 'none' }}/>
                    <Input id="nome" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Email</Label>
                <Col md={10}>
                    <Input id="email" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Senha</Label>
                <Col md={10}>
                    <Input id="senha" type="password"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Tipo</Label>
                <Col md={10}>
                    <select id="tipo" className="form-control">
                        <option value="A">Administrador</option>
                        <option value="U">Usuário</option>
                    </select>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Status</Label>
                <Col md={10}>
                    <select id="ativo" className="form-control">
                        <option value="1">Ativo</option>
                        <option value="0">Inativo</option>
                    </select>
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
            <p id="nomeApagar">Você tem certeza que deseja apagar o usuário esta ação é irreversível.</p>
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