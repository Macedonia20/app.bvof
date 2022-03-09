import React, { Component } from 'react';
import { Container, Row, Col, CardColumns, Card, CardImg, CardBody, Button } from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';

import denuncia from "../../assets/images/qgr/denuncia.png";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class CanalDenuncia extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                // { title : "Suporte", link : "#" },
                // { title : "Canal de Denúncia", link : "#" },
            ],
        }
    }

    copiar(text) {
        toast.info("E-mail copiado!");
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Canal de Denúncia" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                        <Col sm={12}>
                            <CardColumns>
                                <Card>
                                    <CardImg top src={denuncia} alt="Canal de Denúncia" />
                                    <CardBody>
                                    <div className="d-grid mb-3">
                                    🆘 Câmbio Generais,<br /><br />

                                    Segue o nosso canal de denúncias, para qualquer situação que não está de acordo com o nosso movimento
                                    enviar um e-mail para;
                                    <br /><br />

                                    canaldedenuncia@plataformaqgr.com.br
                                    <br /><br />
                                        <Button
                                            color="info"
                                            className="btn btn-lg btn-block"
                                            onClick={() => this.copiar('canaldedenuncia@plataformaqgr.com.br')}
                                        >
                                            Copiar e-mail
                                        </Button>
                                    </div>
                                    </CardBody>
                                </Card>
                            </ CardColumns>
                        </ Col>
                    </ Row>
                    </Container> 
                </div>
            </React.Fragment>
        );
    }
}

export default CanalDenuncia;