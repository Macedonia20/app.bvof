import React, { Component } from "react";
import { Col, Row, Card, CardImg, Container } from "reactstrap";

import imgProtocolos from "../../assets/images/appprotocolos.png";
import imgDrogas from "../../assets/images/appdrogas.png";
import imgProcedimentos from "../../assets/images/procedimentos-lock.png";
import imgSuporteTransfusional from "../../assets/images/suporte-transfusional.png";
import imgUsuarios from "../../assets/images/appusuarios.png";
import imgSuporteHemoterapico from "../../assets/images/hemoterapia.png";
import imgEmergenciasOncoHematologicas from "../../assets/images/emergencias-onco-hematologicas-lock.png";
import imgTabelaEletrolitos from "../../assets/images/tabela-de-eletrolitos-lock.png";
import imgDuvidas from "../../assets/images/duvidas-lock.png";
import imgParceiros from "../../assets/images/parceiros.png";

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
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="/protocolos-doencas"
                                >
                                    <CardImg top className="img-fluid" src={imgProtocolos} alt="Protocolos" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="/drogas"
                                >
                                    <CardImg top className="img-fluid" src={imgDrogas} alt="Drogas" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="/hemoterapia"
                                >
                                    <CardImg top className="img-fluid" src={imgSuporteHemoterapico} alt="Suporte Hemoterápico" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="/parceiros"
                                >
                                    <CardImg top className="img-fluid" src={imgParceiros} alt="Drogas" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="#"
                                >
                                    <CardImg top className="img-fluid" src={imgProcedimentos} alt="Procedimentos" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="#"
                                >
                                    <CardImg top className="img-fluid" src={imgEmergenciasOncoHematologicas} alt="Emergências Onco-hematológicas" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="#"
                                >
                                    <CardImg top className="img-fluid" src={imgTabelaEletrolitos} alt="Tabela de Eletrólitos" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to="#"
                                >
                                    <CardImg top className="img-fluid" src={imgDuvidas} alt="Sugestões, perguntas e respostas" style={{ borderRadius: '25px' }}/>
                                </Link>
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
