import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Card, Form } from "reactstrap";
import { Link } from "react-router-dom";

//Import Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

class EmailSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
        this.togglemodal.bind(this);
    }

    togglemodal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <React.Fragment>
                {/* left sidebar start */}
                <Card className="email-leftbar">
                    <Button type="button" color="danger" onClick={this.togglemodal} block className="waves-effect waves-light" >
                        Compose
                                    </Button>
                    <div className="mail-list mt-4">
                        <Link to="#" className="active"><i className="mdi mdi-email-outline me-2"></i> Inbox <span className="ms-1 float-end">(18)</span></Link>
                        <Link to="#"><i className="mdi mdi-star-outline me-2"></i>Starred</Link>
                        <Link to="#"><i className="mdi mdi-diamond-stone me-2"></i>Important</Link>
                        <Link to="#"><i className="mdi mdi-file-outline me-2"></i>Draft</Link>
                        <Link to="#"><i className="mdi mdi-email-check-outline me-2"></i>Sent Mail</Link>
                        <Link to="#"><i className="mdi mdi-trash-can-outline me-2"></i>Trash</Link>
                    </div>


                    <h6 className="mt-4">Labels</h6>

                    <div className="mail-list mt-1">
                        <Link to="#"><span className="mdi mdi-circle-outline text-info float-end"></span>Theme Support</Link>
                        <Link to="#"><span className="mdi mdi-circle-outline text-warning float-end"></span>Freelance</Link>
                        <Link to="#"><span className="mdi mdi-circle-outline text-primary float-end"></span>Social</Link>
                        <Link to="#"><span className="mdi mdi-circle-outline text-danger float-end"></span>Friends</Link>
                        <Link to="#"><span className="mdi mdi-circle-outline text-success float-end"></span>Family</Link>
                    </div>

                    <h6 className="mt-4">Chat</h6>

                    <div className="mt-2">
                        <Link to="#" className="d-flex">
                            <img className="d-flex me-3 rounded-circle" src={avatar2} alt="Generic placeholder" height="36" />
                            <div className="flex-1 chat-user-box overflow-hidden">
                                <p className="user-title m-0">Scott Median</p>
                                <p className="text-muted text-truncate">Hello</p>
                            </div>
                        </Link>

                        <Link to="#" className="d-flex">
                            <img className="d-flex me-3 rounded-circle" src={avatar3} alt="Generic placeholder" height="36" />
                            <div className="flex-1 chat-user-box overflow-hidden">
                                <p className="user-title m-0">Julian Rosa</p>
                                <p className="text-muted text-truncate">What about our next..</p>
                            </div>
                        </Link>

                        <Link to="#" className="d-flex">
                            <img className="d-flex me-3 rounded-circle" src={avatar4} alt="Generic placeholder" height="36" />
                            <div className="flex-1 chat-user-box overflow-hidden">
                                <p className="user-title m-0">David Medina</p>
                                <p className="text-muted text-truncate">Yeah everything is fine</p>
                            </div>
                        </Link>

                        <Link to="#" className="d-flex">
                            <img className="d-flex me-3 rounded-circle" src={avatar6} alt="Generic placeholder" height="36" />
                            <div className="flex-1 chat-user-box overflow-hidden">
                                <p className="user-title m-0">Jay Baker</p>
                                <p className="text-muted text-truncate">Wow that's great</p>
                            </div>
                        </Link>

                    </div>
                </Card>
                {/* left sidebar over */}
                <Modal isOpen={this.state.modal} role="document" autoFocus={true} centered={true} className="composemodal" tabIndex="-1" toggle={this.togglemodal}>
                    <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                            New Message
                            </ModalHeader>
                        <ModalBody>
                            <Form>
                                <div className="mb-3">
                                    <Input type="email" className="form-control" placeholder="To" />
                                </div>

                                <div className="mb-3">
                                    <Input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <Editor
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                    />
                                </div>

                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button coloe="secondary" type="button" onClick={this.togglemodal} >Close</Button>
                            <Button type="button" color="primary">Send <i className="fab fa-telegram-plane ms-1"></i></Button>
                        </ModalFooter>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EmailSidebar;