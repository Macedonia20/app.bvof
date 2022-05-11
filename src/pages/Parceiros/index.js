import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from "reactstrap";

import { Link } from "react-router-dom";

import imgTakeda from "../../assets/images/parceiros/takeda.png";
import imgAmgen from "../../assets/images/parceiros/amgen.png";
import imgRoche from "../../assets/images/parceiros/roche.png";
import ImgParceiro from "../../assets/images/parceiros/quero-ser-parceiro.png";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Parceiros extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                // { title : "Utility", link : "#" },
                // { title : "Starter Page", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Parceiros" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                    <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to={{ pathname: "https://www.roche.com.br" }}
                                    target="_blank"
                                >
                                    <CardImg top className="img-fluid" src={imgRoche} alt="Takeda" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to={{ pathname: "https://www.takeda.com/pt-br" }}
                                    target="_blank"
                                >
                                    <CardImg top className="img-fluid" src={imgTakeda} alt="Takeda" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to={{ pathname: "https://www.amgen.com.br/" }}
                                    target="_blank"
                                >
                                    <CardImg top className="img-fluid" src={imgAmgen} alt="Takeda" style={{ borderRadius: '25px' }}/>
                                </Link>
                            </Card>
                        </Col>
                        <Col mg={6} xl={3}>
                            <Card style={{ borderRadius: '25px' }}>
                                <Link 
                                    to={{ pathname: "https://api.whatsapp.com/send?phone=5511947848771" }}
                                    target="_blank"
                                >
                                    <CardImg top className="img-fluid" src={ImgParceiro} alt="Takeda" style={{ borderRadius: '25px' }}/>
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

export default Parceiros;