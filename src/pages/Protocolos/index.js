import React, { Component } from "react"
import { Row, Col, Card, Container, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

class Protocolos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      breadcrumbItems: [
        { title: "Protocolos", link: "/protocolos-doencas" },
        { title: "Documentos", link: "#" },
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

    const url = new URL(document.URL);
    const params = new URLSearchParams(url.search);
    const query = params.get('q');

    const { data } = await api.get(`/protocolos?q=${query}`, options);

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
                          <Link to={{ pathname: item.link }} target="_blank">
                              <Card outline color="primary" className="border">
                                  <CardHeader className="bg-transparent">
                                      <h5 className="my-0 text-primary"><i className="mdi mdi-bullseye-arrow me-3"></i>{ item.protocolo }</h5>
                                  </CardHeader>
                                  <CardBody>
                                      <CardTitle className="h4">{ item.doencas }</CardTitle>
                                      <CardText>Ver documento...</CardText>
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