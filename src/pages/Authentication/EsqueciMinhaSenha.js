
import React, { Component } from "react";
import { Row, Col, Button, Container, Label, Spinner } from "reactstrap";

import { validate } from 'email-validator';
import { ToastContainer, toast } from 'react-toastify';

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// action
import { forgetUser } from '../../store/actions';

import api from '../../services/api';

// import images
import logodark from "../../assets/images/logo-qgr.png";

class EsqueciMinhaSenha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    async esqueciSenha() {
        try {
            const email = document.getElementById('email').value;

            if (!validate(email)) {
                throw new Error("E-mail inválido!");
            }

            await api.post('/esqueci-senha', {
                email: email
            }).then(({ data }) => {
                console.log('testesss', data);

                toast.success(data.message);
            });
        } catch (error) {
            if (error.response) {
                const { data } = error.response;
                const { message } = data;
                toast.error(message);
            } else {
                toast.error(error);
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <ToastContainer />
                    <Container fluid className="p-0">
                        <Row className="g-0">
                            <Col lg={4}>
                                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                    <div className="w-100">
                                        <Row className="justify-content-center">
                                            <Col lg={9}>
                                                <div>
                                                    <div className="text-center">
                                                        <div>
                                                            <Link to="/" className="logo"><img src={logodark} height="100" alt="logo" /></Link>
                                                        </div>

                                                        <h4 className="font-size-18 mt-4">Esqueci minha senha</h4>
                                                        {/* <p className="text-muted">Reset your password to Nazox.</p> */}
                                                    </div>

                                                    <div className="p-2 mt-5">
                                                        <AvForm className="form-horizontal">

                                                            <div className="auth-form-group-custom mb-4">
                                                                <i className="ri-mail-line auti-custom-input-icon"></i>
                                                                <Label htmlFor="useremail">Email</Label>
                                                                <AvField name="useremail" value={this.state.username} type="email" validate={{ email: true, required: true }} className="form-control" id="email" placeholder="Digite seu email" />
                                                            </div>

                                                            <div className="mt-4 text-center">
                                                                <Button
                                                                    color="primary"
                                                                    className="w-md waves-effect waves-light"
                                                                    type="button"
                                                                    onClick={this.esqueciSenha}
                                                                >
                                                                        {this.state.isLoading ? <Spinner className="me-2" color="dark" /> : "Redefinir senha"}
                                                                </Button>
                                                            </div>
                                                        </AvForm>
                                                    </div>

                                                    <div className="mt-5 text-center">
                                                        <p>Já recebi minha senha? <Link to="/login" className="fw-medium text-primary">Login</Link> </p>
                                                        <p>© {new Date().getFullYear()} Wiara Tecnologia <i className="mdi mdi-home-automation text-success"></i></p>
                                                    </div>
                                                </div>

                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="authentication-bg">
                                    {/* <div className="bg-overlay"></div> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { message, forgetError, loading } = state.Forget;
    return { message, forgetError, loading };
}

export default withRouter(
    connect(mapStatetoProps, { forgetUser })(EsqueciMinhaSenha)
);
