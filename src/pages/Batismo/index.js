import React, { Component } from "react";
import { Col, Row, Card, CardBody, CardTitle, CardImg, CardText, Container, Button } from "reactstrap";

import telegram from "../../assets/images/telegram.jpeg";

import Breadcrumbs from '../../components/Common/Breadcrumb';

class Batismo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Home", link : "/dashboard" },
                { title : "Batismo", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Batismo" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                        <Col lg={3}>
                            <h4 className="my-3">Formulários</h4>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={12}>
                                        <CardBody>
                                            <CardTitle>Formulários</CardTitle>
                                            <CardText>Informe o local aonde você deseja ser batizado, fique atendo as datas e horários:</CardText>
                                            <div className="d-grid mb-2">
                                                <Button
                                                    color="primary"
                                                    className="btn btn-primary btn-lg btn-block"
                                                    onClick={()=> window.open("https://forms.gle/QYoiQMdPckX4Fkin8", "_blank")}
                                                >
                                                    Ver formulário
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <h4 className="my-3">Documentos</h4>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={12}>
                                        <CardBody>
                                            <CardTitle>Documentos</CardTitle>
                                            <CardText>Ato de Confissão e fé Publica (Leve o mesmo impresso e assinado no dia):</CardText>
                                            <div className="d-grid mb-2">
                                                <Button
                                                    color="primary"
                                                    className="btn btn-info btn-lg btn-block"
                                                    onClick={()=> window.open("https://docs.google.com/document/d/1FcNkIXR5jXi94l7GPkNG1LBBRUorEPJk/edit?usp=sharing&ouid=103340548482643084713&rtpof=true&sd=true", "_blank")}
                                                >
                                                    Ver documento
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <h4 className="my-3">Dúvidas</h4>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={12}>
                                        <CardBody>
                                            <CardTitle>Lives</CardTitle>
                                            <CardText>Gravamos um conteúdo especial sobre os batismos, assista agora mesmo:</CardText>
                                            <div className="d-grid mb-2">
                                                <Button
                                                    color="primary"
                                                    className="btn btn-danger btn-lg btn-block"
                                                    onClick={()=> window.open("https://www.youtube.com/watch?v=u8_8MZCd7Wo", "_blank")}
                                                >
                                                    Ver live
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col lg={3}>
                            <h4 className="my-3">Instagram</h4>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={12}>
                                        <CardBody>
                                            <CardTitle>Rede Social</CardTitle>
                                            <CardText>Faz um comentário no post do instagram, divulgue ou encontre seu QGR:</CardText>
                                            <div className="d-grid mb-2">
                                                <Button
                                                    color="primary"
                                                    className="btn btn-primary btn-lg btn-block"
                                                    onClick={()=> window.open("https://www.instagram.com/p/CY8vO8CuPfB/", "_blank")}
                                                >
                                                    Ver postagem
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </ Row>
                    <Row>
                        <Col lg={6}>
                            <h4 className="my-3">CANAL NO TELEGRAM</h4>
                            <Card>
                                <Row className="no-gutters align-items-center">
                                    <Col md={4}>
                                        <CardImg className="img-fluid" src={telegram} alt="Skote" />
                                    </Col>
                                    <Col md={8}>
                                        <CardBody>
                                            <CardTitle>Entre no grupo do Telegram</CardTitle>
                                            <CardText>Vamos comunicar as novidades, não fique de fora!</CardText>
                                            <div className="d-grid mb-2">
                                                <Button
                                                    color="primary"
                                                    className="btn btn-success btn-lg btn-block"
                                                    onClick={()=> window.open("https://t.me/+MvZDueHce5tmMWI5", "_blank")}
                                                >
                                                    ENTRAR NO GRUPO
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </ Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default Batismo;
