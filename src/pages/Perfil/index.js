import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Container, FormGroup, Input, InputGroup, Label, Row, Spinner } from "reactstrap";
import api from '../../services/api';

import Breadcrumbs from '../../components/Common/Breadcrumb';
import { toast, ToastContainer } from 'react-toastify';
import Avatar from 'react-avatar';
import AvatarEditor from 'react-avatar-editor'

import AWS from 'aws-sdk';

const s3 = new AWS.S3({
    region: 'sa-east-1',
    accessKeyId: 'AKIASOKURKVN6C4WMWPD',
    secretAccessKey: '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'
});


class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state={
            breadcrumbItems : [
                { title : "Dashboard", link : "/dashboard" },
                { title : "Perfil", link : "#" },
            ],
            name: '',
            email: '',
            documentType: '',
            document: '',
            instagram: '',
            whatsapp: '',
            avatar: '',
            cep: '',
            city: '',
            number: '',
            block: '',
            addressState: '',
            country: '',
            complement: '',
            selectedFile: null,
            isLoading: false,
            avatarIsLoading: false,
            pageIsLoading: true,
            resizeAvatar: false
        }
    }

    setEditorRef = (editor) => (this.editor = editor)

    componentDidMount() {
        this.getUserInfo().then(user => {
            if(user) {
                this.setState({ 
                    userId: user.idusuarios,
                    name: user.nome,
                    email: user.email,
                    instagram: user.instagram,
                    whatsapp: user.whatsapp,
                    avatar: user.avatar,
                    document: user.documento,
                    documentType: user.documento_tipo,
                    cep: user.address?.cep,
                    city: user.address?.cidade,
                    addressState: user.address?.estado,
                    country: user.address?.pais,
                    street: user.address?.logradouro,
                    number: user.address?.numero,
                    block: user.address?.bairro,
                    complement: user.address?.complemento,
                }, () => this.setState({ pageIsLoading: false }))
            }
        })
    }

    handleField = (fieldName, event) => {
        this.setState({ [fieldName]: event.target.value })
    }

    setSelectedFile = (event) => {
        if (event.target.files[0].size > 524288000) {
            toast.error("O avatar deve ser menor que 500KB");
        } else {
            this.setState({ 
                selectedFile: event.target.files[0] 
            }, () => this.setState({ resizeAvatar: true }))
        }
    }

    handleLoading = (spinnerName, value) => {
        this.setState({ [spinnerName]: value })
    }
    

    async getUserInfo () {
        try {
            const authUser = JSON.parse(localStorage.getItem("authUser"));
            const email = authUser.email;

            const { data: { user} } = await api.get(
                `/usuarios/${email}`, 
                { headers: { Authorization : `Bearer ${authUser.token}` } 
            });

            if (user) return user

        } catch (error) {
            toast.error("Não foi possível encontrar suas informações!");
        }
    }

    async getAddressByCEP(cepNumber) {
        try {
            const { data: address } = await api.get(
                `https://brasilapi.com.br/api/cep/v1/${cepNumber}`
            )
            if (address) {
                this.setState({
                    city: address.city,
                    addressState: address.state,
                    street: address.street,
                    block: address.neighborhood,
                    pais: "Brasil"
                })
    
            }
        } catch (error) { }
    }

    async updateProfile () {
        this.handleLoading("isLoading", true);
        const authUser = JSON.parse(localStorage.getItem("authUser"));
        try {
            await api.put(`/usuarios/${this.state.email}`, {
                nome: this.state.name,
                email: this.state.email,
                documento: this.state.document,
                documento_tipo: this.state.documentType,
                instagram: this.state.instagram,
                whatsapp: this.state.whatsapp,
                avatar: this.state.avatar,
                endereco: {
                    cep: this.state.cep,
                    cidade: this.state.city,
                    logradouro: this.state.street,
                    numero: this.state.number,
                    bairro: this.state.block,
                    estado: this.state.addressState,
                    complemento: this.state.complement,
                    pais: this.state.country
                }
            }, {
                headers: { Authorization: `Bearer ${authUser.token}` }
            })

            this.handleLoading("isLoading", false);
            toast.success("Perfil editado com sucesso!")
        } catch (error) {
            this.handleLoading("isLoading", false);
            toast.error("Ops! Não foi possível editar o perfil.")
        }
    }

    handleResizeAvatar = () => {
        if (this.editor) {
            const canvasImage = this.editor.getImageScaledToCanvas().toDataURL();
            fetch(canvasImage)
            .then(res => res.blob())
            .then(blob => 
                this.setState({ 
                    selectedFile: blob, 
                    resizeAvatar: false 
                }, () => this.updateAvatar(this.state.selectedFile))
            );
        } 
    }

    updateAvatar = (file) => {
        this.handleLoading("avatarIsLoading", true);
        if (file) {
            const params = {
                Bucket: 'qgr-files',
                Key: `avatars/avatar_${this.state.userId}`,
                Body: file
            };
    
            s3.upload(params, async (error, data) => {
                if (error) throw new Error(error.message)
                
                this.setState({ avatar: data.Location })
                this.handleLoading("avatarIsLoading", false);
                
                await this.updateProfile();
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <ToastContainer />
                {
                    this.state.pageIsLoading ? (
                        <Spinner />
                    ) : (
                        <div className="page-content">
                        <Container fluid>
    
                            <Breadcrumbs title="Perfil" breadcrumbItems={this.state.breadcrumbItems} />
    
                            <Row>
                                <Col xs={12}>
                                    <Card>
                                        <CardBody>
                                        <Row>
                                                { this.state.avatarIsLoading ? <Spinner /> : (
                                                        <>
                                                            <Col className="d-flex justify-content-center">
                                                                {
                                                                    this.state.resizeAvatar ? (
                                                                        <AvatarEditor
                                                                            ref={this.setEditorRef}
                                                                            image={this.state.selectedFile}
                                                                            width={200}
                                                                            height={200}
                                                                            border={50}
                                                                            scale={1.2}
                                                                            rotate={0}
                                                                        />
                                                                    ) : (
                                                                        <Avatar name={this.state.name} src={this.state.avatar} alt={`${this.state.name} avatar image`} size="200" round={true} />
                                                                    )
                                                                }
                                                            </Col>
                                                            {
                                                                this.state.resizeAvatar ? (
                                                                    <Button 
                                                                        onClick={this.handleResizeAvatar} 
                                                                        className="mt-2 mb-4 btn btn-primary btn-sm"
                                                                    >
                                                                        Salvar
                                                                    </Button>
                                                                ) : (
                                                                    <label type="button" className="mt-2 waves-effect waves-light d-flex justify-content-center" htmlFor="inputAvatar">
                                                                        <input
                                                                            id="inputAvatar"
                                                                            type="file"
                                                                            accept="image/*"
                                                                            style={{ display: 'none' }}
                                                                            onChange={this.setSelectedFile}
                                                                            />
                                                                        Atualizar Foto
                                                                    </label>   
                                                                )
                                                            }
                                                        </>
                                                    )
                                                }
                                            </Row>
                                            <h4 className="card-title-desc">Informações Pessoais</h4>
                                            <Row>
                                                <Col xs={12}>
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Nome</Label>
                                                        <Col md={10}>
                                                            <Input
                                                                required 
                                                                type="text" 
                                                                placeholder="Digite seu nome" 
                                                                value={this.state.name} 
                                                                onChange={(e) => this.handleField("name", e)}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Email</Label>
                                                        <Col md={10}>
                                                            <Input
                                                                required
                                                                disabled 
                                                                type="email" 
                                                                placeholder="Digite seu email" 
                                                                value={this.state.email} 
                                                                onChange={(e) => this.handleField("email", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Documento</Label>
                                                        <Col md={10}>
                                                            <Input
                                                                type="text" 
                                                                placeholder="Digite seu Documento" 
                                                                value={this.state.document} 
                                                                onChange={(e) => this.handleField("document", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
                                                    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label"></Label>
                                                        <Col md={10}>
                                                            <FormGroup required>
                                                                <Input 
                                                                    name="documentType" 
                                                                    value="cpf" 
                                                                    type="radio" 
                                                                    checked={this.state.documentType === "cpf"} 
                                                                    onChange={(e) => this.handleField("documentType", e)}
                                                                /> {' '}
                                                                <Label check> CPF </Label> {' '}
                                                                <Input 
                                                                    name="documentType" 
                                                                    value="rg" 
                                                                    type="radio" 
                                                                    checked={this.state.documentType === "rg"} 
                                                                    onChange={(e) => this.handleField("documentType", e)}
                                                                /> {' '}
                                                                <Label check> RG </Label> {' '}
                                                                <Input 
                                                                    name="documentType" 
                                                                    value="passport" 
                                                                    type="radio" 
                                                                    checked={this.state.documentType === "passport"} 
                                                                    onChange={(e) => this.handleField("documentType", e)} 
                                                                /> {' '}
                                                                <Label check> Passaporte </Label> {' '}
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">WhatsApp</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                type="text" 
                                                                placeholder="Digite seu WhatsApp" 
                                                                value={this.state.whatsapp} 
                                                                onChange={(e) => this.handleField("whatsapp", e)}
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Instagram</Label>
                                                        <Col md={10}>
                                                            <InputGroup>
                                                                <span className="input-group-append">
                                                                    <span className="input-group-text">@</span>
                                                                </span>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.instagram}
                                                                    onChange={(e) => this.handleField("instagram", e)}
                                                                    placeholder="Digite seu instagram"
                                                                />
                                                            </InputGroup>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
    
                                            <hr style={{ margin: "20px 0px" }} />
                                            <h4 className="card-title-desc">Endereço</h4>
                                            <Row>    
                                                <Col xs={12}>
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">CEP</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                required
                                                                type="text" 
                                                                placeholder="Digite seu CEP" 
                                                                value={this.state.cep} 
                                                                onChange={(e) => { 
                                                                    this.handleField("cep", e);
                                                                    this.getAddressByCEP(e.target.value);
                                                                }}
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Cidade</Label>
                                                        <Col md={10}>
                                                            <Input
                                                                required 
                                                                type="text" 
                                                                placeholder="Cidade" 
                                                                value={this.state.city} 
                                                                onChange={(e) => this.handleField("city", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Rua</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                required
                                                                type="text" 
                                                                placeholder="Digite o Logradouro" 
                                                                value={this.state.street} 
                                                                onChange={(e) => this.handleField("street", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Número</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                required
                                                                type="text" 
                                                                placeholder="Número" 
                                                                value={this.state.number} 
                                                                onChange={(e) => this.handleField("number", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Bairro</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                required
                                                                type="text" 
                                                                placeholder="Digite o Bairro" 
                                                                value={this.state.block} 
                                                                onChange={(e) => this.handleField("block", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Estado</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                required
                                                                type="text" 
                                                                placeholder="Digite o Estado" 
                                                                value={this.state.addressState} 
                                                                onChange={(e) => this.handleField("addressState", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
                                                  
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">País</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                required
                                                                type="text" 
                                                                placeholder="Digite o País" 
                                                                value={this.state.country} 
                                                                onChange={(e) => this.handleField("country", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
    
                                                    <Row className="mb-3">
                                                        <Label className="col-md-2 col-form-label">Complemento</Label>
                                                        <Col md={10}>
                                                            <Input 
                                                                type="text" 
                                                                placeholder="Digite o Complemento" 
                                                                value={this.state.complement} 
                                                                onChange={(e) => this.handleField("complement", e)} 
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
    
                                            <div className="d-grid mb-2 mt-4">
                                                <Button
                                                    id="saveButton"
                                                    color="primary"
                                                    className="btn btn-success btn-lg btn-block"
                                                    onClick={() => this.updateProfile()}
                                                    disabled={this.state.isLoading}
                                                >
                                                    { this.state.isLoading ? (<Spinner /> ) : ' SALVAR ' }
                                                </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container> 
                    </div>
                    )
                }

            </React.Fragment>
        );
    }
}

export default Perfil;