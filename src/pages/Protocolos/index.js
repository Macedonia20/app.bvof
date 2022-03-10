import React, { Component } from "react"
import { Row, Col, Card, Badge, Container, CardImg, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

import imgProtocolos from "../../assets/images/appprotocolos.png";
import imgDrogas from "../../assets/images/appdrogas.png";

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

class Protocolos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        // { title: "Menu", link: "/dashboard" },
        // { title: "Cadastro", link: "#" },
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
    this.controlarModalApagar = this.controlarModalApagar.bind(this);
  };

  async buscarDados() {
    const options = this.getOptions();
    const { data } = await api.get(`/protocolos`, options);

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
    await api.get(`/protocolos/${idItem}`, options)
    .then(({ data })=> {

      this.controlarModal();

      setTimeout(() => {
        this.setValueId('idItem', idItem);
        this.setValueId('doencas', data.doencas);
        this.setValueId('protocolo', data.protocolo);
        this.setValueId('link', data.link);
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
      const novoItem = {
        doencas: this.getValueId('doencas'),
        protocolo: this.getValueId('protocolo'),
        link: this.getValueId('link'),
        ativo: this.getValueId('ativo')
      }
  
      if (!this.validarCampos(novoItem)) {
        return false;
      }
  
      const options = this.getOptions();
      await api.post('/protocolos', novoItem, options)
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
      const itemSelecionado = {
        doencas: this.getValueId('doencas'),
        protocolo: this.getValueId('protocolo'),
        link: this.getValueId('link'),
        ativo: this.getValueId('ativo')
      }
  
      if (!this.validarCampos(itemSelecionado)) {
        return false;
      }

      const idItem = document.getElementById('idItem').value;
  
      const options = this.getOptions();
      await api.put(`/protocolos/${idItem}`, itemSelecionado, options)
      .then(() => {
        this.controlarModal();
        toast.success('Item atualizado');
        this.buscarDados();
      });

    } catch (error) {
      toast.error('Não foi possível editar o item');
    }
  }

  async apagarItem(idItem) {
    const options = this.getOptions();
    await api.get(`/protocolos/${idItem}`, options)
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
    await api.delete(`/protocolos/${idItem}`, options)
    .then(()=> {

      this.controlarModalApagar();
      toast.success('Item apagado com sucesso');
      this.buscarDados();
    });
  }

  validarCampos(item) {
    const { doencas, protocolo, link, ativo } = item;

    if (!doencas) {
      toast.error('Campo doenças obrigatório');
      return false;
    }

    if (!protocolo) {
      toast.error('Campo protocolo obrigatório');
      return false;
    }

    if (!link) {
      toast.error('Campo link obrigatório');
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
      dataField: 'doencas',
      text: 'Doenças',
      sort: true
    }, {
      dataField: 'protocolo',
      text: 'Protocolos',
      sort: true
    }, {
      dataField: 'link',
      text: 'Link',
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
      dataField: 'idprotocolos',
      isDummyField: true,
      text: "Opções",
      formatter: (cellContent, row) => (
        <React.Fragment>
          <Link to="#" onClick={() => this.controlarModalEdicao(row.idprotocolos)} className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
          <Link to="#" onClick={() => this.apagarItem(row.idprotocolos)} className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
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
          <div className="page-content">
              <Container fluid>

              <Breadcrumbs title="" breadcrumbItems={this.state.breadcrumbItems} />
              <Row>
                  {
                    this.state.productData?.map(item =>
                      <Col lg={4}> 
                          <Link to={{ pathname: item.link }} target="_blank">
                              <Card outline color="primary" className="border">
                                  <CardHeader className="bg-transparent">
                                      <h5 className="my-0 text-primary"><i className="mdi mdi-bullseye-arrow me-3"></i>{ item.protocolo }</h5>
                                  </CardHeader>
                                  <CardBody>
                                      <CardTitle className="h4">{ item.doencas }</CardTitle>
                                      <CardText>Ver mais...</CardText>
                                  </CardBody>
                              </Card>
                          </Link>
                      </Col>
                    )
                  }
              </Row>
              </Container> 
          </div>
      </React.Fragment>
    )
  }
}

export default Protocolos;