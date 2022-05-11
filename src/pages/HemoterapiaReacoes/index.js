import React, { Component } from "react"
import { Row, Col, Card, Container, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class HemoterapiaOpcoes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        { title: "Hemoterapia", link: "/hemoterapia" },
        { title: "Opções", link: "#" },
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

  getQuery = () => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    return params.get('q');
  }

  async buscarDados() {
    const query = this.getQuery();
    const options = this.getOptions();
    const { data } = await api.get(`/hemoterapianomes?q=Reações`, options);

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

  getDetalhes(id) {
    console.log('abrir detalhes', id);
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
                    this.state.productData?.map((item, key) =>
                      <Col lg={4} key={key}> 
                          <Link to="#" onClick={() => this.getDetalhes(item.idsuporte_transfusional)}>
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
      </React.Fragment>
    )
  }
}

export default HemoterapiaOpcoes;