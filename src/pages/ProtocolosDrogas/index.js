import React, { Component } from "react"
import { Row, Col, Card, Container, CardHeader, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

import api from '../../services/api';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"

class ProtocolosDrogas extends Component {
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
  };

  async buscarDados() {
    const options = this.getOptions();
    const { data } = await api.get(`/protocolos/drogas`, options);

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
                          <Link to={ `/protocolos?q=${item.doencas}` } >
                              <Card outline color="danger" className="border">
                                  <CardHeader className="bg-transparent">
                                      <h5 className="my-0 text-danger"><i className="mdi mdi-bullseye-arrow me-3"></i>{ item.doencas }</h5>
                                  </CardHeader>
                                  <CardBody>
                                      <CardText className="my-0 text-danger">Ver protocolos...</CardText>
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

export default ProtocolosDrogas;