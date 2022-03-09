import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { map } from "lodash";

import Breadcrumbs from '../../components/Common/Breadcrumb';

import api from '../../services/api';
import loading from "../../assets/images/qgr/loading.gif";

import { ToastContainer, toast } from 'react-toastify';

class Lives extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Eventos", link : "/eventos" },
                { title : "Lives", link : "#" },
            ],
            videos: []
        }
    }

    async carregarVideos () {
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
    
            await api.get(`/videos?tipo=live&categoria=eventos`, options)
              .then(({ data })=> {
                this.setState({
                  isLoading: false
                });
    
                this.setState({
                  videos: data
                });
              });
        } catch (error) {
            this.setState({
                isLoading: false
            });
            toast.error("Não foi possivel cadastrar seu QGR. Tente novamente!");
        }
    }

    componentDidMount() {
        this.carregarVideos();
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                <div className="page-content">
                    <Container fluid>
                        <Breadcrumbs title="Lives" breadcrumbItems={this.state.breadcrumbItems} />
                        { this.state.videos.length > 0 ? (
                            <>
                                {map(this.state.videos, (video, key) => (
                                    <Row key={key}>
                                        <Col lg={6}>
                                            <h4 className="my-3">{video.titulo}</h4>
                                            <Card>
                                                <Row className="no-gutters align-items-center">
                                                    <Col md={12}>
                                                        <iframe title="Title" width="100%" height="315" src={`https://www.youtube.com/embed/${video.url}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Col>
                                    </ Row>
                                ))}
                            </>
                        ) : (
                            <>
                            </>
                        )}
                        {this.state.isLoading ? (
                            <>
                            <p>Carregando videos... <CardImg src={loading} alt="Carregando..." style={{ width: '40px' }}/></p>
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

export default Lives;