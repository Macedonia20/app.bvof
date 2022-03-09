import React, { Component } from "react";
import { Row, Col, Button, Container, Label, Spinner } from "reactstrap";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

import { ToastContainer, toast } from 'react-toastify';

// action
import { registerUser, registerUserFailed, apiError } from '../../store/actions';

// Redux
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import './style.css';

import api from '../../services/api';

// import images
import logodark from "../../assets/images/logo-qgr.png";

class CadastroMembros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            nome: "",
            password: "",
            confirmeSenha: "",
            whatsapp: "",
            idqgr: "",
            statusFormulario: true,
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event, values) {
        if(!this.validarCampos()) {
            return;
        };

        this.setState({ loading: true });
        try {
            await api.post('/membros', {
                nome: this.state.nome,
                email: this.state.email,
                whatsapp: this.state.whatsapp,
                idqgr: this.state.idqgr
            }).then(() => {
                this.setState({ statusFormulario: false });
            });
        } catch (error) {
            this.setState({ loading: false });
            toast.error(error.response.data.message);
        }
    }

    setIdqgr = (event) => {
        this.state.idqgr = event.target.value;
    }

    setNome = (event) => {
        this.state.nome = event.target.value;
    }

    setEmail = (event) => {
        this.state.email = event.target.value;
    }

    setWhatsapp = (event) => {
        this.state.whatsapp = event.target.value;
    }

    setSenha = (event) => {
        this.state.password = event.target.value;
    }

    setConfirmeSenha = (event) => {
        this.state.confirmeSenha = event.target.value;
    }

    validarCampos = () => {
        const validacaoOK = true;

        if (!this.state.idqgr) {
            toast.error("Número QGR obrigatório");
            return false;
        }

        if (!this.state.nome) {
            toast.error("Nome obrigatório");
            return false;
        }

        if (!this.state.email) {
            toast.error("Email obrigatório");
            return false;
        }

        return validacaoOK;
    }

    componentDidMount() {
        this.props.registerUserFailed("");
        this.props.apiError("");
        document.body.classList.add("auth-body-bg");
    }


    render() {
        return (
            <React.Fragment>
                <div>
                    <Container fluid className="p-0">
                        <ToastContainer />
                        <Row className="g-0">
                            <Col lg={4}>
                                <div className="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                                    <div className="w-100">
                                        <Row className="justify-content-center">
                                            <Col lg={9}>
                                                <div>
                                                    <div className="text-center">
                                                        <div>
                                                            <Link to="#" className="logo"><img src={logodark} height="100" alt="logo" /></Link>
                                                        </div>
                                                        {this.state.statusFormulario ? (
                                                            <h4 className="font-size-18 mt-4">Cadastro participantes do QGR</h4>
                                                        ) : (
                                                            <></>
                                                        )}
                                                        {/* <p className="text-muted">Get your free Nazox account now.</p> */}
                                                    </div>

                                                    <div className="p-2 mt-5">
                                                        {this.state.statusFormulario ? (
                                                            <AvForm onValidSubmit={this.handleSubmit} className="form-horizontal" >

                                                                <div className="auth-form-group-custom mb-4">
                                                                    <i className="ri-group-line auti-custom-input-icon"></i>
                                                                    <Label htmlFor="idqgr">Número do seu QGR</Label>
                                                                    <AvField name="idqgr" value={this.state.idqgr} onChange={this.setIdqgr} type="text" className="form-control" placeholder="Digite o número do seu QGR" />
                                                                </div>

                                                                <div className="auth-form-group-custom mb-4">
                                                                    <i className="ri-user-2-line auti-custom-input-icon"></i>
                                                                    <Label htmlFor="nome">Nome</Label>
                                                                    <AvField name="nome" value={this.state.nome} onChange={this.setNome} type="text" className="form-control" placeholder="Digite seu nome" />
                                                                </div>
                                                                
                                                                <div className="auth-form-group-custom mb-4">
                                                                    <i className="ri-mail-line auti-custom-input-icon"></i>
                                                                    <Label htmlFor="useremail">Email</Label>
                                                                    <AvField name="email" value={this.state.email} onChange={this.setEmail} type="email" className="form-control" placeholder="Digite seu email" />
                                                                </div>

                                                                <div className="auth-form-group-custom mb-4">
                                                                    <i className="ri-whatsapp-line auti-custom-input-icon"></i>
                                                                    <Label htmlFor="useremail">Whatsapp</Label>
                                                                    <AvField name="whatsapp" value={this.state.whatsapp} onChange={this.setWhatsapp} type="text" className="form-control" placeholder="Digite seu whatsapp" />
                                                                </div>

                                                                {/* <div className="auth-form-group-custom mb-4">
                                                                    <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                                    <Label htmlFor="userpassword">Senha</Label>
                                                                    <AvField name="password" value={this.state.password} onChange={this.setSenha} type="password" className="form-control" placeholder="Digite sua senha" />
                                                                </div>

                                                                <div className="auth-form-group-custom mb-4">
                                                                    <i className="ri-lock-2-line auti-custom-input-icon"></i>
                                                                    <Label htmlFor="userpassword">Confirme sua Senha</Label>
                                                                    <AvField name="password" value={this.state.confirmeSenha} onChange={this.setConfirmeSenha} type="password" className="form-control" placeholder="Digite sua senha" />
                                                                </div> */}

                                                                <div className="text-center">
                                                                    <Button color="primary" className="w-md waves-effect waves-light" type="submit">{this.state.loading ?  <Spinner className="me-2" color="dark" /> : "Enviar"}</Button>
                                                                </div>

                                                                {/* <div className="mt-4 text-center">
                                                                    <p className="mb-0">Ao se cadastrar você concorda com os <Link to="#" className="text-primary">Termos de uso</Link></p>
                                                                </div> */}
                                                            </AvForm>
                                                        ) : (
                                                            <>
                                                                <div className="center">
                                                                    <h4 className="font-size-18 mt-4" style={{ textAlign: 'center' }}>Cadastro efetuado, TMJADF!</h4>
                                                                </div>
                                                            </>
                                                        )}
                                                        
                                                    </div>

                                                    {/* <div className="mt-5 text-center">
                                                        <p>Já tem conta? <Link to="/login" className="fw-medium text-primary"> Login</Link> </p>
                                                        <p>{new Date().getFullYear()} © Wiara Tecnologia. <i className="mdi mdi-home-automation text-success"></i></p>
                                                    </div> */}
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

    const { user, registrationError, loading } = state.Account;
    return { user, registrationError, loading };
}

export default connect(mapStatetoProps, { registerUser, apiError, registerUserFailed })(CadastroMembros);
