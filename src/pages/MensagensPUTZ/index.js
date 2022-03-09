import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { map } from "lodash";

import Breadcrumbs from '../../components/Common/Breadcrumb';

import api from '../../services/api';
import loading from "../../assets/images/qgr/loading.gif";

import { ToastContainer, toast } from 'react-toastify';

class MensagensPUTZ extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                // { title : "Eventos", link : "/eventos" },
                // { title : "Lives", link : "#" },
            ],
            documentos: [],
            isLoading: false
        }
    }

    async carregarDocumentos () {
        try {
            this.setState({
              isLoading: true
            });
    
            let obj = '';
            if (localStorage.getItem("authUser")) {
              obj = JSON.parse(localStorage.getItem("authUser"));
            }
    
            const options = {
              headers: {"Authorization" : `Bearer ${obj.token}`}
            }
    
            await api.get(`/documentos`, options)
              .then(({ data })=> {
                this.setState({
                  isLoading: false
                });
    
                this.setState({
                  documentos: data
                });
              });
        } catch (error) {
            this.setState({
                isLoading: false
              });
            toast.error("Não foi possivel carregar os documentos. Tente novamente!");
        }
    }

    componentDidMount() {
        this.carregarDocumentos();
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Mensagens PUTZ" breadcrumbItems={this.state.breadcrumbItems} />
                        { this.state.documentos.length > 0 ? (
                            <>
                                <Row>
                                <h4 className="my-3">Sugestões de mensagem</h4>
                                    {map(this.state.documentos, (documento, key) => (
                                        <Col lg={3}>
                                            <Card>
                                                <Row className="no-gutters align-items-center">
                                                    <Col md={12}>
                                                        <CardBody>
                                                            <CardTitle>{documento.titulo}</CardTitle>
                                                            <CardText>{documento.descricao}</CardText>
                                                            <div className="d-grid mb-2">
                                                                <Button
                                                                    color="primary"
                                                                    className="btn btn-info btn-lg btn-block"
                                                                    onClick={()=> window.open(documento.url, "_blank")}
                                                                >
                                                                    Ver documento
                                                                </Button>
                                                            </div>
                                                        </CardBody>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    ))}
                                </ Row>
                            </>
                        ) : (
                            <>
                            </>
                        )}
                        {this.state.isLoading ? (
                            <>
                            <p>Carregando mensagens... <CardImg src={loading} alt="Carregando..." style={{ width: '40px' }}/></p>
                            </>
                        ) : (
                            <></>
                        )}
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default MensagensPUTZ;