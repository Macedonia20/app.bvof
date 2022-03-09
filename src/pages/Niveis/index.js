import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";

import imersao from "../../assets/images/qgr/niveis/imersao.jpg";
import lives from "../../assets/images/qgr/niveis/lives.jpg";
import livroinfoproduto from "../../assets/images/qgr/niveis/livro-infoproduto.jpg";
import mentoria from "../../assets/images/qgr/niveis/mentoria.jpg";
import multiplicacaotalentos from "../../assets/images/qgr/niveis/multiplicacao-talentos.jpg";
import palestra from "../../assets/images/qgr/niveis/palestra.jpg";
import qgrabrir from "../../assets/images/qgr/niveis/qgr-abrir.jpg";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Niveis extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Generais", link : "#" },
                { title : "Níveis", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Níveis" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={lives} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>1 - LIVES</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={qgrabrir} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>2 - ABRIR (QGR)</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={palestra} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>3 - PALESTRA</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={mentoria} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>4 - MENTORIA</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={imersao} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>5 - IMERSÃO</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={livroinfoproduto} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>6 - LIVRO OU INFO PRODUTO</CardTitle>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </ Col>
                        <Col sm={12}>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={multiplicacaotalentos} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>7 - MULTIPLICAÇÃO DE TALENTOS</CardTitle>
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

export default Niveis;