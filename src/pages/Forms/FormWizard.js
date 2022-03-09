import React, { Component } from "react";
import { Row, Col, Card, CardBody, TabContent, TabPane, NavItem, NavLink, Label, Input, Form, Progress, Container } from "reactstrap";

import classnames from 'classnames';
import { Link } from "react-router-dom";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';


class FormWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                { title: "Forms", link: "#" },
                { title: "Form Wizard", link: "#" },
            ],
            activeTab: 1,
            activeTabProgress: 1,
            progressValue: 25
        };
        this.toggleTab.bind(this);
        this.toggleTabProgress.bind(this);
    }


    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            if (tab >= 1 && tab <= 4) {
                this.setState({
                    activeTab: tab
                });
            }
        }
    }

    toggleTabProgress(tab) {
        if (this.state.activeTabProgress !== tab) {
            if (tab >= 1 && tab <= 4) {
                this.setState({
                    activeTabProgress: tab
                });

                if (tab === 1) { this.setState({ progressValue: 25 }) }
                if (tab === 2) { this.setState({ progressValue: 50 }) }
                if (tab === 3) { this.setState({ progressValue: 75 }) }
                if (tab === 4) { this.setState({ progressValue: 100 }) }
            }
        }
    }

    render() {

        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid={true}>
                        <Breadcrumbs title="Form Wizard" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">Basic pills Wizard</h4>

                                        <div id="basic-pills-wizard" className="twitter-bs-wizard">
                                            <ul className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTab === 1 })} onClick={() => { this.toggleTab(1); }} >
                                                        <span className="step-number">01</span>
                                                        <span className="step-title">Seller Details</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTab === 2 })} onClick={() => { this.toggleTab(2); }} >
                                                        <span className="step-number">02</span>
                                                        <span className="step-title">Company Document</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTab === 3 })} onClick={() => { this.toggleTab(3); }} >
                                                        <span className="step-number">03</span>
                                                        <span className="step-title">Bank Details</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTab === 4 })} onClick={() => { this.toggleTab(4); }} >
                                                        <span className="step-number">04</span>
                                                        <span className="step-title">Confirm Detail</span>
                                                    </NavLink>
                                                </NavItem>
                                            </ul>
                                            <TabContent activeTab={this.state.activeTab} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-firstname-input1">First name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-firstname-input1" />
                                                                </div>
                                                            </Col>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-lastname-input2">Last name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-lastname-input2" />
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-phoneno-input3">Phone</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-phoneno-input3" />
                                                                </div>
                                                            </Col>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-email-input4">Email</Label>
                                                                    <Input type="email" className="form-control" id="basicpill-email-input4" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-address-input1">Address</Label>
                                                                    <textarea id="basicpill-address-input1" className="form-control" rows="2"></textarea>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                    <div>
                                                        <Form>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-pancard-input5">PAN Card</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-pancard-input5" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-vatno-input6">VAT/TIN No.</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-vatno-input6" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-cstno-input7">CST No.</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-cstno-input7" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-servicetax-input8">Service Tax No.</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-servicetax-input8" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-companyuin-input9">Company UIN</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-companyuin-input9" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-declaration-input10">Declaration</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-Declaration-input10" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <div>
                                                        <Form>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-namecard-input11">Name on Card</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-namecard-input11" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label>Credit Card Type</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>Select Card Type</option>
                                                                            <option value="AE">American Express</option>
                                                                            <option value="VI">Visa</option>
                                                                            <option value="MC">MasterCard</option>
                                                                            <option value="DI">Discover</option>
                                                                        </select>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-cardno-input12">Credit Card Number</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-cardno-input12" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-card-verification-input">Card Verification Number</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-card-verification-input" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-expiration-input13">Expiration Date</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-expiration-input13" />
                                                                    </div>
                                                                </Col>

                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={4}>
                                                    <div className="row justify-content-center">
                                                        <Col lg="6">
                                                            <div className="text-center">
                                                                <div className="mb-4">
                                                                    <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                                </div>
                                                                <div>
                                                                    <h5>Confirm Detail</h5>
                                                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </TabPane>

                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                                <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1); }}>Previous</Link></li>
                                                <li className={this.state.activeTab === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1); }}>Next</Link></li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title mb-4">Wizard with progressbar</h4>

                                        <div id="progrss-wizard" className="twitter-bs-wizard">
                                            <ul className="twitter-bs-wizard-nav nav-justified nav nav-pills">
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 1 })} onClick={() => { this.toggleTabProgress(1); }} >
                                                        <span className="step-number">01</span>
                                                        <span className="step-title">Seller Details</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 2 })} onClick={() => { this.toggleTabProgress(2); }} >
                                                        <span className="step-number">02</span>
                                                        <span className="step-title">Company Document</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 3 })} onClick={() => { this.toggleTabProgress(3); }} >
                                                        <span className="step-number">03</span>
                                                        <span className="step-title">Bank Details</span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink className={classnames({ active: this.state.activeTabProgress === 4 })} onClick={() => { this.toggleTabProgress(4); }} >
                                                        <span className="step-number">04</span>
                                                        <span className="step-title">Confirm Detail</span>
                                                    </NavLink>
                                                </NavItem>
                                            </ul>

                                            <div id="bar" className="mt-4">
                                                <Progress color="success" striped animated value={this.state.progressValue} />
                                            </div>
                                            <TabContent activeTab={this.state.activeTabProgress} className="twitter-bs-wizard-tab-content">
                                                <TabPane tabId={1}>
                                                    <Form>
                                                        <Row>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-firstname-input14">First name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-firstname-input14" />
                                                                </div>
                                                            </Col>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-lastname-input15">Last name</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-lastname-input15" />
                                                                </div>
                                                            </Col>
                                                        </Row>

                                                        <Row>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-phoneno-input16">Phone</Label>
                                                                    <Input type="text" className="form-control" id="basicpill-phoneno-input16" />
                                                                </div>
                                                            </Col>
                                                            <Col lg="6">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-email-input17">Email</Label>
                                                                    <Input type="email" className="form-control" id="basicpill-email-input17" />
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col lg="12">
                                                                <div className="mb-3">
                                                                    <Label className="form-label" htmlFor="basicpill-address-input2">Address</Label>
                                                                    <textarea id="basicpill-address-input2" className="form-control" rows="2"></textarea>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Form>
                                                </TabPane>
                                                <TabPane tabId={2}>
                                                    <div>
                                                        <Form>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-pancard-input18">PAN Card</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-pancard-input18" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-vatno-input19">VAT/TIN No.</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-vatno-input19" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-cstno-input20">CST No.</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-cstno-input20" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-servicetax-input21">Service Tax No.</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-servicetax-input21" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-companyuin-input22">Company UIN</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-companyuin-input22" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-declaration-input23">Declaration</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-Declaration-input23" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={3}>
                                                    <div>
                                                        <Form>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-namecard-input24">Name on Card</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-namecard-input24" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label>Credit Card Type</Label>
                                                                        <select className="form-select">
                                                                            <option defaultValue>Select Card Type</option>
                                                                            <option value="AE">American Express</option>
                                                                            <option value="VI">Visa</option>
                                                                            <option value="MC">MasterCard</option>
                                                                            <option value="DI">Discover</option>
                                                                        </select>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-cardno-input25">Credit Card Number</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-cardno-input25" />
                                                                    </div>
                                                                </Col>

                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-card-verification-input26">Card Verification Number</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-card-verification-input26" />
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <div className="mb-3">
                                                                        <Label className="form-label" htmlFor="basicpill-expiration-input27">Expiration Date</Label>
                                                                        <Input type="text" className="form-control" id="basicpill-expiration-input27" />
                                                                    </div>
                                                                </Col>

                                                            </Row>
                                                        </Form>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={4}>
                                                    <div className="row justify-content-center">
                                                        <Col lg="6">
                                                            <div className="text-center">
                                                                <div className="mb-4">
                                                                    <i className="mdi mdi-check-circle-outline text-success display-4"></i>
                                                                </div>
                                                                <div>
                                                                    <h5>Confirm Detail</h5>
                                                                    <p className="text-muted">If several languages coalesce, the grammar of the resulting</p>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                            <ul className="pager wizard twitter-bs-wizard-pager-link">
                                                <li className={this.state.activeTabProgress === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress - 1); }}>Previous</Link></li>
                                                <li className={this.state.activeTabProgress === 4 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTabProgress(this.state.activeTabProgress + 1); }}>Next</Link></li>
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default FormWizard;
