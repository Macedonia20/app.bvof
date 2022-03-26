import React, { Component } from "react"
import { Row, Col, Card, Container, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

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
                              <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                                  <CardHeader className="bg-transparent">
                                      <h5 style={{ padding: '25px', color: '#4aa3ff' }}>{ item.protocolo }</h5>
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

export default Protocolos;