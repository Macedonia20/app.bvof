import React, { Component } from 'react';
import { Container, Row, Col, Label } from "reactstrap";
import { Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

//Import Images
import logodark from "../../assets/images/logo-dark.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";

class AuthLockScreen extends Component {

    componentDidMount() {
        document.body.classList.add("auth-body-bg");
    }

    componentWillUnmount() {
        document.body.classList.remove("auth-body-bg");
    }

    render() {
        return (
            <React.Fragment>
                <div>
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
                                                            <Link to="/" className="logo"><img src={logodark} height="20" alt="logo" /></Link>
                                                        </div>

                                                        <h4 className="font-size-18 mt-4">Lock screen</h4>
                                                        <p className="text-muted">Enter your password to unlock the screen!</p>
                                                    </div>

                                                    <div className="p-2 mt-5">
                                                        <AvForm className="form-horizontal">

                                                            <div className="user-thumb text-center mb-5">
                                                                <img src={avatar2} className="rounded-circle img-thumbnail avatar-md" alt="thumbnail" />
                                                                <h5 className="font-size-15 mt-3">Jacob Lopez</h5>
                                                            </div>

                                                            <div className="mb-3 auth-form-group-custom mb-4">
                                                                <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                                <Label className="form-label" for="userpassword">Password</Label>
                                                                <AvField name="password" validate={{ required: true }} type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                                            </div>

                                                            <div className="mt-4 text-center">
                                                                <Link to="/" className="btn btn-primary w-md waves-effect waves-light">Unlock</Link>
                                                            </div>
                                                        </AvForm>
                                                    </div>

                                                    <div className="mt-5 text-center">
                                                        <p>Not you ? return <Link to="auth-login" className="fw-medium text-primary"> Log in </Link> </p>
                                                        <p>© 2021 Nazox. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign</p>
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

export default AuthLockScreen;