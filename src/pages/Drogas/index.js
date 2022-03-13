import React, { Component } from "react"
import { Row, Col, Card, CardBody, Container, Badge, CardHeader, CardText } from "reactstrap";
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

class Drogas extends Component {
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
  };

  async buscarDados() {
    const options = this.getOptions();
    const { data } = await api.get(`/drogas/categorias`, options);

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

  componentDidMount() {
    this.buscarDados();
  }

  render() {

    return (
      <React.Fragment>
          <div className="page-content">
              <Container fluid>

              <Breadcrumbs title="" breadcrumbItems={this.state.breadcrumbItems} />
              <Row>
                  {
                    this.state.productData?.map(item =>
                      <Col lg={4}> 
                          <Link to={ `/drogas-categorias?q=${item.categorias}` } >
                              <Card outline color="danger" className="border">
                                  <CardHeader className="bg-transparent">
                                      <h5 className="my-0 text-danger"><i className="mdi mdi-bullseye-arrow me-3"></i>{ item.categorias }</h5>
                                  </CardHeader>
                                  <CardBody>
                                      <CardText className="my-0 text-danger">Ver drogas...</CardText>
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

export default Drogas;