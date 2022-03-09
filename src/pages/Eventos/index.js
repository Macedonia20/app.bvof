import React, { Component } from 'react';
import { Container, Row, Col, CardColumns, Card, CardImg, CardBody, Button } from "reactstrap";

import eventos from "../../assets/images/qgr/eventos.jpg";
import lives from "../../assets/images/qgr/lives.jpg";

import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class Eventos extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Mensagens", link : "#" },
                { title : "Eventos", link : "#" },
            ],
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                    <Breadcrumbs title="Eventos" breadcrumbItems={this.state.breadcrumbItems} />
                    <Row>
                        <Col sm={12}>
                            {/* <h4 className="my-3">Cards Columns</h4> */}
                            <CardColumns>
                                <Card>
                                    <CardImg top src={lives} alt="Skote" />
                                    <CardBody>
                                    <div className="d-grid mb-3">
                                    <Link className="btn btn-success btn-lg btn-block " to="/lives">
                                        VER MAIS
                                    </Link>
                                    </div>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardImg top src={eventos} alt="Skote" />
                                    <CardBody>
                                    <div className="d-grid mb-3">
                                        <Button
                                            color="primary"
                                            className="btn btn-secondary btn-lg btn-block "
                                        >
                                            Aguarde o comando...
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

export default Eventos;