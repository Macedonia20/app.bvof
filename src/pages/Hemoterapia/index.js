
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
          <h4>HEMOTERAPIA</h4>
          <Container fluid>

            <Breadcrumbs title="" breadcrumbItems={this.state.breadcrumbItems} />
            <Row>
              <Col lg={4} >
            
                <Link 
                  to="/hemocomponentes?q=Hemocomponentes"
                >
                  <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                    <CardHeader className="bg-transparent">
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>HEMOCOMPONENTES</h5>
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
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>CUIDADOS ESPECIAIS</h5>
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
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>REAÇOẼS TRANSFUNCIONAL</h5>
                    </CardHeader>
                  </Card>
                </Link>
              </Col>
            </Row>
            <Row>
            <h4>COLETA DE CÉLULAS TRONCO HEMATOPOÉTICAS</h4>
            <Container fluid>
              <Col lg={4} >
                <Link 
                  to="/mobilizacao?q=mobilizacao"
                >
                  <Card outline color="info" className="border" style={{ borderRadius: '25px' }}>
                    <CardHeader className="bg-transparent">
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>MOBILIZAÇÃO</h5>
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
                        <h5 style={{ padding: '25px', color: '#4aa3ff' }}>COLETA CÉLULAS DA MEDULA ÓSSEA</h5>
                    </CardHeader>
                  </Card>
                </Link>
              </Col>
              </Container>
            </Row>
          </Container> 
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
