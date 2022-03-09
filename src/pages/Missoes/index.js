import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

import abusosexual from "../../assets/images/qgr/missoes/abuso-sexual.jpg";
import clt from "../../assets/images/qgr/missoes/clt.jpg";
import construcaocidade from "../../assets/images/qgr/missoes/construcaocidade.jpg";
import saude from "../../assets/images/qgr/missoes/saude.png";
import familia from "../../assets/images/qgr/missoes/familia.jpg";
import fome from "../../assets/images/qgr/missoes/fome.jpg";
import idosos from "../../assets/images/qgr/missoes/idosos.jpg";
import ignorancia from "../../assets/images/qgr/missoes/ignorancia.jpg";
import inferno from "../../assets/images/qgr/missoes/inferno.jpg";
import orfaos from "../../assets/images/qgr/missoes/orfaos.jpg";
import vicios from "../../assets/images/qgr/missoes/vicios.jpg";
import viuvas from "../../assets/images/qgr/missoes/viuvas.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Missoes extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Generais", link : "#" },
                { title : "Missões", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Missões" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={fome} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>1 - FOME / MISÉRIA</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={construcaocidade} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>2 - CONSTRUÇÃO DE CIDADE</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={orfaos} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>3 - ORFÃOS</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={viuvas} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>4 - VIÚVAS</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={idosos} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>5 - IDOSOS</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={saude} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>6 - SAÚDE</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={abusosexual} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>7 - ABUSO SEXUAL</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={inferno} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>8 - INFERNO</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={ignorancia} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>9 - IGNORÂNCIA</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={vicios} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>10 - VICÍOS</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={clt} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>11 - CLT</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={familia} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>12 - FAMÍLIA</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                    </ Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default Missoes;