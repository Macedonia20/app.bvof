import React, { Component } from 'react';
import { Container, Card, CardBody, Row, Col, CardColumns, CardImg, Button } from "reactstrap";
import { Accordion } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { map } from "lodash";

import api from '../../services/api';

import faq from "../../assets/images/qgr/faq.png";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FAQs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                // { title: "Utility", link: "#" },
                // { title: "FAQs", link: "#" },
            ],
            activeTab: '1',
            faq: []
        }
    }

    async carregarFAQ () {
        try {
            const { data } = await api.get(`/faq`);
            this.setState({
              faq: data
            });
        } catch (error) {
            toast.error("Não foi possivel carregar as FAQ's. Tente novamente mais tarde!");
        }
    }
    

    componentDidMount() {
        this.carregarFAQ();
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="FAQs" breadcrumbItems={this.state.breadcrumbItems} />
                        <Row>
                            <Col sm={12}>
                                <CardColumns>
                                    <Card>
                                        <CardImg top src={faq} alt="FAQ - Perguntas frequentes" />
                                        <CardBody>
                                        <div className="d-grid mb-3">
                                            <Button
                                                color="primary"
                                                className="btn btn-success btn-lg btn-block"
                                                onClick={()=> window.open("https://forms.gle/1fEcnargmciiuRrDA", "_blank")}
                                            >
                                                Cadastrar dúvida
                                            </Button>
                                        </div>
                                        </CardBody>
                                    </Card>
                                </ CardColumns>
                            </ Col>
                        </ Row>
                        <h5>QUARTÉIS GENERAIS DO REINO - DÚVIDAS FREQUENTES</h5>
                        <br />
                        <div>
                            <Accordion defaultActiveKey="0">
                            {map(this.state.faq, (faq, key) => (
                                <Accordion.Item eventKey={key}>
                                    <Accordion.Header color='white' style={{ color: 'white !important' }}>{faq.pergunta}</Accordion.Header>
                                    <Accordion.Body>{faq.resposta}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                            </Accordion>
                        </div>
                        <br />
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default FAQs;