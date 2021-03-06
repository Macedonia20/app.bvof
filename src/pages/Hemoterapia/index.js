
import React, { Component } from "react";

import { Col, Row, Card, CardHeader, Container, Table } from "reactstrap";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        breadcrumbItems : [
            // { title : "QGR", link : "/" },
            // { title : "Home", link : "/dashboard" },
        ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs title="" breadcrumbItems={this.state.breadcrumbItems} />
            <h4>Hemoterapia</h4>
            <Row>
              <Col lg={4} >
            
                <Link 
                  to="/hemocomponentes?q=Hemocomponentes"
                >
                  <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                    <CardHeader className="bg-transparent">
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>Hemocomponentes</h5>
                    </CardHeader>
                  </Card>
                </Link>
                    
              </Col>
              <Col lg={4} >
                <Link 
                  to="/cuidados-especiais?q=CuidadosEspeciais"
                >
                  <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                    <CardHeader className="bg-transparent">
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>Cuidados Especiais</h5>
                    </CardHeader>
                  </Card>
                </Link>
              </Col>
              <Col lg={4} >
                <Link 
                  to="/Reacoes-Transfusional?q=ReacoesTransfusional"
                >
                  <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                    <CardHeader className="bg-transparent">
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>Rea????es transfusionais</h5>
                    </CardHeader>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
            <h4>Coleta dee c??lulas tronco Hematopo??ticas</h4>
            <Container>
              <Row>
              <Col lg={4} >
                <Link 
                  to="/mobilizacao?q=mobilizacao"
                >
                  <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                    <CardHeader className="bg-transparent">
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>Mobiliza????o</h5>
                    </CardHeader>
                  </Card>
                </Link>
              </Col>
              <Col lg={4} >
                <Link 
                  to="/coleta-celulas-medula-ossea?q=coleta-celulas-medula-ossea"
                >
                  <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                    <CardHeader className="bg-transparent">
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>Coleta de c??lulas da medula ??ssea</h5>
                    </CardHeader>
                  </Card>
                </Link>
              </Col>
              </Row>
            </Container>
            </Row>
          </Container> 
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
