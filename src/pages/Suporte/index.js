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

class Procedimentos extends Component {
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
      filtro: '',
      tituloTela: 'Suporte transfusional',
      url: '/suporte'
    }

    this.controlarModal = this.controlarModal.bind(this);
    this.controlarModalApagar = this.controlarModalApagar.bind(this);
  };

  async buscarDados() {
    const options = this.getOptions();
    const { data } = await api.get(`${this.state.url}`, options);

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
    this.buscarDados();
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

  async controlarModalEdicao(idItem) {
    const options = this.getOptions();
    await api.get(`${this.state.url}/${idItem}`, options)
    .then(({ data })=> {

      this.controlarModal();

      setTimeout(() => {
        this.setValueId('idItem', idItem);
        this.setValueId('nome', data.nome);
        this.setValueId('descricao', data.descricao);
        this.setValueId('categorias', data.categorias);
        this.setValueId('ativo', data.ativo);
      }, 500);
    });

  }

  cadastrarOuEditar() {
    const existeId = document.getElementById('idItem').value;

    if (existeId) {
      this.editarItem();
    } else {
      this.cadastrarItem();
    }
  }

  async cadastrarItem() {
    try {
      const item = this.getObjetoItem();
  
      if (!this.validarCampos(item)) {
        return false;
      }
  
      const options = this.getOptions();
      await api.post(`${this.state.url}`, item, options)
      .then(() => {
        this.controlarModal();
        toast.success('Item cadastrado.');
        this.buscarDados();
      });

    } catch (error) {
      toast.error('Não foi possível cadastrar o item.');
    }
  }

  async editarItem() {
    try {
      const item = this.getObjetoItem();
  
      if (!this.validarCampos(item)) {
        return false;
      }

      const idItem = document.getElementById('idItem').value;
  
      const options = this.getOptions();
      await api.put(`${this.state.url}/${idItem}`, item, options)
      .then(() => {
        this.controlarModal();
        toast.success('Item atualizado');
        this.buscarDados();
      });

    } catch (error) {
      toast.error('Não foi possível editar o item');
    }
  }

  getObjetoItem() {
    const item = {
      nome: this.getValueId('nome'),
      descricao: this.getValueId('descricao'),
      categorias: this.getValueId('categorias'),
      ativo: this.getValueId('ativo')
    };

    return item;
  }

  async apagarItem(idItem) {
    const options = this.getOptions();
    await api.get(`${this.state.url}/${idItem}`, options)
    .then(({ data })=> {

      this.controlarModalApagar();

      setTimeout(() => {
        this.setValueId('idApagar', idItem);
        this.setValueId('nomeApagar', data.nome);
      }, 500);
    });
  }

  async apagarPermanentemente() {
    const idItem = document.getElementById('idApagar').value;
    const options = this.getOptions();
    await api.delete(`${this.state.url}/${idItem}`, options)
    .then(()=> {

      this.controlarModalApagar();
      toast.success('Item apagado com sucesso');
      this.buscarDados();
    });
  }

  validarCampos(item) {
    const { nome, descricao, ativo } = item;

    if (!nome) {
      toast.error('Campo nome obrigatório');
      return false;
    }

    if (!descricao) {
      toast.error('Campo descrição obrigatório');
      return false;
    }

    if (!ativo) {
      toast.error('Campo ativo obrigatório');
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

  controlarModal() {
    this.setState(prevState => ({
      modal_standard: !prevState.modal_standard
    }));
    this.removeBodyCss();
  }

  controlarModalApagar() {
    this.setState(prevState => ({
      modal_apagar: !prevState.modal_apagar
    }));
    this.removeBodyCss();
  }

  removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  componentDidMount() {
    this.buscarDados();
  }

  render() {

    const columns = [{
      dataField: 'nome',
      text: 'Nome',
      sort: true
    }, {
      dataField: 'descricao',
      text: 'Descrição',
      sort: true
    }, {
      dataField: 'categorias',
      text: 'Categorias',
      sort: true
    }, {
      dataField: 'ativo',
      text: 'Ativo',
      sort: true,
      formatter: (cellContent, row) => (
        <Badge
          className={`font-size-12 badge-soft-${row.ativo === '1' ? 'success' : 'danger'}`}
          color={`${row.ativo === '1' ? 'success' : 'danger'}`}
          pill
        >
          {row.ativo === '1' ? 'Ativo' : 'Inativo'}
        </Badge>
      ),
    }, {
      dataField: 'idsuporte_transfusional',
      isDummyField: true,
      text: "Opções",
      formatter: (cellContent, row) => (
        <React.Fragment>
          <Link to="#" onClick={() => this.controlarModalEdicao(row.idsuporte_transfusional)} className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
          <Link to="#" onClick={() => this.apagarItem(row.idsuporte_transfusional)} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
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
            <Breadcrumbs title={this.state.tituloTela} breadcrumbItems={this.state.breadcrumbItems} />

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
                                      onClick={this.controlarModal}
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
          toggle={this.controlarModal}
        >
          <ModalHeader toggle={() => this.setState({ modal_standard: false })}>
              Cadastro
          </ModalHeader>
          <ModalBody>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Nome</Label>
                <Col md={10}>
                    <Input id="idItem" type="text" style={{ display: 'none' }}/>
                    <Input id="nome" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Descrição</Label>
                <Col md={10}>
                    <Input id="descricao" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Categorias</Label>
                <Col md={10}>
                    <Input id="categorias" type="text"/>
                </Col>
            </Row>
            <Row className="mb-3">
                <Label className="col-md-2 col-form-label">Ativo</Label>
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
              onClick={this.controlarModal}
              color="light"
              className="waves-effect"
            >
              Fechar
          </Button>
            <Button
              type="button"
              color="primary" className="waves-effect waves-light"
              onClick={() => this.cadastrarOuEditar()}
            >
              Salvar
          </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.modal_apagar}
          toggle={this.controlarModalApagar}
        >
          <ModalHeader toggle={() => this.setState({ modal_apagar: false })}>
              Apagar Item
          </ModalHeader>
          <ModalBody>
            <Input id="idApagar" type="text" style={{ display: 'none' }}/>
            <p id="nomeApagar">Você tem certeza que deseja apagar, esta ação é irreversível.</p>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              onClick={this.controlarModalApagar}
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

export default Procedimentos;