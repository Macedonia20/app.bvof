import React, { Component } from "react";
import { Card, CardBody, Col, Row, Container, FormGroup, Label, Input } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

class FormElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems: [
                { title: "Forms", link: "#" },
                { title: "Forms Elements", link: "#" },
            ],
            customchk: true,
            toggleSwitch: true
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>

                        <Breadcrumbs title="Forms Elements" breadcrumbItems={this.state.breadcrumbItems} />

                        <Row>
                            <Col xs={12}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Textual inputs</h4>
                                        <p className="card-title-desc">Here are examples of <code>.form-control</code> applied to each
                                            textual HTML5 <code>&lt;input&gt;</code> <code>type</code>.</p>

                                        <Row className="mb-3">
                                            <Label htmlFor="example-text-input" className="col-md-2 col-form-label">Text</Label>
                                            <Col md={10}>
                                                <Input type="text" defaultValue="Artisanal kale" id="example-text-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-search-input" className="col-md-2 col-form-label">Search</Label>
                                            <Col md={10}>
                                                <Input type="search" defaultValue="How do I shoot web" id="example-search-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-email-input" className="col-md-2 col-form-label">Email</Label>
                                            <Col md={10}>
                                                <Input type="email" defaultValue="bootstrap@example.com" id="example-email-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-url-input" className="col-md-2 col-form-label">URL</Label>
                                            <Col md={10}>
                                                <Input type="url" defaultValue="https://getbootstrap.com" id="example-url-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-tel-input" className="col-md-2 col-form-label">Telephone</Label>
                                            <Col md={10}>
                                                <Input type="tel" defaultValue="1-(555)-555-5555" id="example-tel-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-password-input" className="col-md-2 col-form-label">Password</Label>
                                            <Col md={10}>
                                                <Input type="password" defaultValue="hunter2" id="example-password-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-number-input" className="col-md-2 col-form-label">Number</Label>
                                            <Col md={10}>
                                                <Input type="number" defaultValue="42" id="example-number-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-datetime-local-input" className="col-md-2 col-form-label">Date and time</Label>
                                            <Col md={10}>
                                                <Input type="datetime-local" defaultValue="2020-03-14T13:45:00" id="example-datetime-local-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-date-input" className="col-md-2 col-form-label">Date</Label>
                                            <Col md={10}>
                                                <Input type="date" defaultValue="2020-03-19" id="example-date-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-month-input" className="col-md-2 col-form-label">Month</Label>
                                            <Col md={10}>
                                                <Input type="month" defaultValue="2020-03" id="example-month-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-week-input" className="col-md-2 col-form-label">Week</Label>
                                            <Col md={10}>
                                                <Input type="week" defaultValue="2020-W14" id="example-week-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-time-input" className="col-md-2 col-form-label">Time</Label>
                                            <Col md={10}>
                                                <Input type="time" defaultValue="13:45:00" id="example-time-input" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label htmlFor="example-color-input" className="col-md-2 col-form-label">Color</Label>
                                            <Col md={10}>
                                                <Input type="color" defaultValue="#5438dc" id="example-color-input" className="form-control form-control-color mw-100" />
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Label className="col-md-2 col-form-label">Select</Label>
                                            <Col md={10}>
                                                <select className="form-control">
                                                    <option>Select</option>
                                                    <option>Large select</option>
                                                    <option>Small select</option>
                                                </select>
                                            </Col>
                                        </Row>
                                        <FormGroup row className="mb-0">
                                            <Label className="col-md-2 col-form-label">Custom Select</Label>
                                            <Col md={10}>
                                                <select className="form-select">
                                                    <option defaultValue>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </Col>
                                        </FormGroup>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Sizing</h4>
                                        <p className="card-title-desc">Set heights using classNames like <code>.form-control-lg</code> and <code>.form-control-sm</code>.</p>
                                        <div>
                                            <div className="mb-4">
                                                <Input type="text" placeholder="Default input" className="form-control" />
                                            </div>
                                            <div className="mb-4">
                                                <Input type="text" placeholder=".form-control-sm" className="form-control form-control-sm" />
                                            </div>
                                            <div>
                                                <Input type="text" placeholder=".form-control-lg" className="form-control form-control-lg" />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Range Inputs</h4>
                                        <p className="card-title-desc">Set horizontally scrollable range inputs using <code>.form-control-range</code>.</p>

                                        <div>
                                            <h5 className="font-size-14">Example</h5>
                                            <input type="range" className="form-range" id="formControlRange" />
                                        </div>
                                        <div className="mt-4">
                                            <h5 className="font-size-14">Custom Range</h5>
                                            <input type="range" className="form-range" id="customRange1" />
                                            <input type="range" className="mt-4 form-range" min="0" max="5" id="customRange2" />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title  mb-4">Checkboxes</h4>

                                        <Row>
                                            <Col md={5}>
                                                <div>
                                                    <h5 className="font-size-14 mb-4">Form Checkbox</h5>
                                                    <div className="form-check mb-3">
                                                        <Input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                        <Label className="form-check-label" htmlFor="defaultCheck1">
                                                            Form Checkbox
                                                        </Label>
                                                    </div>
                                                    <div className="form-check">
                                                        <Input className="form-check-input" type="checkbox" value="" id="defaultCheck2" defaultChecked />
                                                        <Label className="form-check-label" htmlFor="defaultCheck2">
                                                            Form Checkbox checked
                                                        </Label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} className="ms-auto">
                                                <div className="mt-4 mt-lg-0">
                                                    <h5 className="font-size-14 mb-4">Form Checkboxes Right</h5>
                                                    <div>
                                                        <div className="form-check form-check-right mb-3">
                                                            <Input type="checkbox" className="form-check-input" id="CustomCheck1" onChange={() => false} checked={this.state.customchk} />
                                                            <Label className="form-check-label" onClick={() => { this.setState({ customchk: !this.state.customchk }) }} >Form Checkbox Right</Label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="form-check form-check-right">
                                                            <Input type="checkbox" className="form-check-input" id="customCheck2" />
                                                            <Label className="form-check-label" htmlFor="customCheck2">Form Checkbox Right checked</Label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title  mb-4">Radios</h4>

                                        <Row>
                                            <Col md={5}>
                                                <div>
                                                    <h5 className="font-size-14 mb-4">Form Radios</h5>
                                                    <div className="form-check mb-3">
                                                        <Input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                                        <Label className="form-check-label" htmlFor="exampleRadios1">
                                                            Form radio
                                                        </Label>
                                                    </div>
                                                    <div className="form-check">
                                                        <Input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                                        <Label className="form-check-label" htmlFor="exampleRadios2">
                                                            Form Radio checked
                                                        </Label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={6} className="ms-auto">
                                                <div className="mt-4 mt-lg-0">
                                                    <h5 className="font-size-14 mb-4">Form Radios Right</h5>
                                                    <div>
                                                        <div className="form-check form-check-right mb-3">
                                                            <Input type="radio" id="customRadio1" name="customRadio" className="form-check-input" />
                                                            <Label className="form-check-label" htmlFor="customRadio1">Form Radio Right</Label>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="form-check form-check-right">
                                                            <Input type="radio" id="customRadio2" name="customRadio" className="form-check-input" defaultChecked />
                                                            <Label className="form-check-label" htmlFor="customRadio2">Form Radio Right checked</Label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">Switches</h4>
                                        <p className="card-title-desc">A switch has the markup of a custom checkbox but uses the <code>.custom-switch</code> className to render a toggle switch. Switches also support the <code>disabled</code> attribute.</p>

                                        <div className="form-check form-switch mb-3" dir="ltr">
                                            <Input type="checkbox" className="form-check-input" id="customSwitch1" defaultChecked />
                                            <Label className="form-check-label" htmlFor="customSwitch1" onClick={(e) => { this.setState({ toggleSwitch: !this.state.toggleSwitch }) }}>Toggle this switch element</Label>
                                        </div>
                                        <div className="form-check form-switch" dir="ltr">
                                            <Input type="checkbox" className="form-check-input" disabled id="customSwitch2" />
                                            <Label className="form-check-label" htmlFor="customSwitch2">Disabled switch element</Label>
                                        </div>

                                    </CardBody>
                                </Card>
                            </Col>

                            <Col lg={6}>
                                <Card>
                                    <CardBody>
                                        <h4 className="card-title">File browser</h4>
                                        <p className="card-title-desc">The file input is the most gnarly of the bunch and requires additional JavaScript if you’d like to hook them up with functional <em>Choose file…</em> and selected file name text.</p>
                                        <div className="input-group">
                                            <input type="file" className="form-control" id="customFile" />
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

export default FormElements;
