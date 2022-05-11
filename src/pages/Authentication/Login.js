import React, { Component } from 'react';

import { Row, Col, Button, Container, Label } from "reactstrap";

// Redux
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

import { ToastContainer, toast } from 'react-toastify';

// actions
import { checkLogin, apiError } from '../../store/actions';

import api from '../../services/api';

// import images
import logoPreto from "../../assets/images/bvof-preto.png";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event, values) {
        // this.props.checkLogin(values, this.props.history);

        try {
            await api.post('/login', {
                email: this.state.username,
                senha: this.state.password
            }).then(({ data }) => {
                console.log(data);
                localStorage.setItem("authUser", JSON.stringify(data));
            }).then(() => {
                window.location.href = "/dashboard";
            });
        } catch (error) {
            toast.error("Email ou senha inválidos. Tente novamente!");
        }
        
    }

    componentDidMount() {
        this.props.apiError("");
        document.body.classList.add("auth-body-bg");

        if (window.location.search === '?cadastroSucesso') {
            toast.success("Cadastro efetuado, faça seu login.");
        }

        if (window.location.search === '?senhaAtualizada') {
            toast.success("Senha atualizada, faça seu login.");
        }
    }

    setEmail = (event) => {
        this.state.username = event.target.value;
    }

    setSenha = (event) => {
        this.state.password = event.target.value;
    }

    componentWillUnmount() {
        document.body.classList.remove("auth-body-bg");
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
                                                        <Link to="/" className="">
                                                            <img src={logoPreto} alt="Bvof" height="100" className="auth-logo logo-light mx-auto" />
                                                            <img src={logoPreto} alt="Bvof" height="100" className="auth-logo logo-dark mx-auto" />
                                                        </Link>
                                                    </div>

                                                        <h4 className="font-size-18 mt-4">Bem vindo</h4>
                                                        <p className="text-muted">Efetue seu login.</p>
                                                    </div>


                                                    {/* {this.props.loginError && this.props.loginError ? <Alert color="danger">{this.props.loginError}</Alert> : null} */}

                                                    <div className="p-2 mt-5">
                                                        <AvForm className="form-horizontal" onValidSubmit={this.handleSubmit} >

                                                            <div className="auth-form-group-custom mb-4">
                                                                <i className="ri-user-2-line auti-custom-input-icon"></i>
                                                                <Label htmlFor="username">Email</Label>
                                                                <AvField name="username" value={this.state.username} onChange={this.setEmail} type="text" className="form-control" id="username" placeholder="Digite seu email" />
                                                            </div>

                                                            <div className="auth-form-group-custom mb-4">
                                                                <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                                <Label htmlFor="userpassword">Senha</Label>
                                                                <AvField name="password" value={this.state.password} onChange={this.setSenha} type="password" className="form-control" id="userpassword" placeholder="Digite sua senha" />
                                                            </div>
{/* 
                                                            <div className="form-check">
                                                                <Input type="checkbox" className="form-check-input" id="customControlInline" />
                                                                <Label className="form-check-label" htmlFor="customControlInline">Lembrar-me</Label>
                                                            </div> */}

                                                            <div className="d-grid mb-3">
                                                                <Button color="primary" className="btn-lg btn-block kw-md waves-effect waves-light" type="submit">Entrar</Button>
                                                            </div>

                                                            {/* <div className="mt-4 text-center">
                                                                <Link to="/esqueci-minha-senha" className="text-muted"><i className="mdi mdi-lock me-1"></i> Esqueceu sua senha?</Link>
                                                            </div> */}
                                                        </AvForm>
                                                    </div>

                                                    <div className="mt-5 text-center">
                                                        <p>Não tem uma conta? <Link to="/cadastro" className="fw-medium text-primary"> Cadastrar </Link> </p>
                                                        <p>{new Date().getFullYear()} © Wiara Tecnologia.</p>
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
    const { loginError } = state.Login;
    return { loginError };
}

export default withRouter(connect(mapStatetoProps, { checkLogin, apiError })(Login));