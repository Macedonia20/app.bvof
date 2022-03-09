import React, { Component } from "react";
import { Col, Row, Card, CardBody, CardImg, Container } from "reactstrap";

import imgProtocolos from "../../assets/images/protocolos.png";
import imgDrogas from "../../assets/images/drogas.png";
import imgProcedimentos from "../../assets/images/procedimentos.png";
import imgSuporteTransfusional from "../../assets/images/suporte-transfusional.png";
import imgUsuarios from "../../assets/images/usuarios.png";

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
                    <Row>
                        <Col mg={6} xl={3}>
                            <Card>
                                <CardImg top className="img-fluid" src={imgUsuarios} alt="Usuários" />
                                <CardBody>
                                    <div className="d-grid mb-3">
                                        <Link 
                                            to="/usuarios"
                                            color="primary"
                                            className="btn btn-primary btn-lg btn-block "
                                        >
                                            Usuários
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card>
                                <CardImg top className="img-fluid" src={imgProtocolos} alt="Protocolos" />
                                <CardBody>
                                    <div className="d-grid mb-3">
                                        <Link 
                                            to="#"
                                            color="secondary"
                                            className="btn btn-secondary btn-lg btn-block "
                                        >
                                            Protocolos (Em breve)
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card>
                                <CardImg top className="img-fluid" src={imgDrogas} alt="Drogas" />
                                <CardBody>
                                    <div className="d-grid mb-3">
                                        <Link 
                                            to="#"
                                            color="secondary"
                                            className="btn btn-secondary btn-lg btn-block "
                                        >
                                            Drogas (Em breve)
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card>
                                <CardImg top className="img-fluid" src={imgProcedimentos} alt="Procedimentos" />
                                <CardBody>
                                    <div className="d-grid mb-3">
                                        <Link 
                                            to="#"
                                            color="secondary"
                                            className="btn btn-secondary btn-lg btn-block "
                                        >
                                            Procedimentos (Em breve)
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card>
                                <CardImg top className="img-fluid" src={imgSuporteTransfusional} alt="Suporte Transfusional" />
                                <CardBody>
                                    <div className="d-grid mb-3">
                                        <Link 
                                            to="#"
                                            color="secondary"
                                            className="btn btn-secondary btn-lg btn-block "
                                        >
                                            Suporte transfusional (Em breve)
                                        </Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
