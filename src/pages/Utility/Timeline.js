import React, { Component } from 'react';
import { Container, CardBody, Row, Col, Card } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import 'moment/locale/pt-br';
import { toast } from 'react-toastify';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Edit';

import api from '../../services/api';

import Breadcrumbs from '../../components/Common/Breadcrumb';

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                { title: "Plano", link: "#" },
                { title: "Anual", link: "#" },
            ],
            dias: []
        }
    }

    getPlanoLeitura = async () => {
        try {
            let obj = '';
            if (localStorage.getItem("authUser")) {
              obj = JSON.parse(localStorage.getItem("authUser"));
            }
    
            const options = {
              headers: {"Authorization" : `Bearer ${obj.token}`}
            }
    
            await api.get(`/planos/1`, options)
              .then(({ data })=> {
                this.setState({
                    dias: data
                });
              });
            
        } catch (error) {
            toast.error("Nenhuma plano de leitura disponivel!");
        }
    }

    componentDidMount() {
        this.getPlanoLeitura();
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Plano de Leitura" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row className="justify-content-center">
                            <Col xl={10}>
                                <div className="timeline" dir="ltr">
                                    <div className="timeline-item timeline-left">
                                        <div className="timeline-block">
                                            <div className="time-show-btn mt-0">
                                                <Link to="#" className="btn btn-danger btn-rounded w-lg">2022</Link>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.dias.map((item, key) => (
                                        <div className={`timeline-item ${key % 2 === 0 ? '' : 'timeline-left'}`}>
                                            <div className="timeline-block">
                                                <Card className="timeline-box">
                                                    <CardBody>
                                                        <span className="timeline-icon"></span>
                                                        <div className="timeline-date">
                                                            <i className="mdi mdi-circle-medium circle-dot"></i>
                                                            {moment(item.dia).locale('pt-br').format("D MMMM")}
                                                        </div>
                                                        <h5 className="mt-3 foont-size-15"> Leitura</h5>
                                                        <div className="text-muted">
                                                            <p className="mb-0">{item.descricao}</p>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div 
                    style={{
                        right: 20,
                        bottom: 20,
                        position: 'fixed',
                        zIndex: 9999
                    }}
                    onClick={()=> window.open("https://forms.gle/jKE1PVdkCGV7kUaR9", "_blank")}
                >
                    <Fab
                        variant="extended"
                    >
                        <NavigationIcon sx={{ mr: 1 }} />
                        COMENTAR EXPERIÊNCIA
                    </Fab>
                </div>
            </React.Fragment>
        );
    }
}

export default Timeline;