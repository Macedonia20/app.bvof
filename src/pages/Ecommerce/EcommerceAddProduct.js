import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Input,
  Label,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
} from "reactstrap";
import Select from "react-select";
import Dropzone from "react-dropzone";
import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

class EcommerceAddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: [],
      activeTab: 1,
      breadcrumbItems: [
        { title: "Ecommerce", link: "#" },
        { title: "Add Product", link: "#" },
      ],
    };
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleAcceptedFiles = (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        htmlFormattedSize: this.formatBytes(file.size),
      })
    );

    this.setState({ selectedFiles: files });
  };

  htmlFormatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  render() {
    const options = [
      { value: "AK", label: "Alaska" },
      { value: "HI", label: "Hawaii" },
      { value: "CA", label: "California" },
      { value: "NV", label: "Nevada" },
      { value: "OR", label: "Oregon" },
      { value: "WA", label: "Washington" },
    ];
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs
              title="Ecommerce"
              breadcrumbItems={this.state.breadcrumbItems}
            />

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                  <div id="addproduct-nav-pills-wizard" className="twitter-bs-wizard">
                    <Nav className="twitter-bs-wizard-nav nav nav-pills nav-justified">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === 1,
                          })}
                          onClick={() => {
                            this.toggleTab(1);
                          }}
                        >
                          <span className="step-number">01</span>
                          <span className="step-title">Basic Info</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === 2,
                          })}
                          onClick={() => {
                            this.toggleTab(2);
                          }}
                        >
                          <span className="step-number">02</span>
                          <span className="step-title">Product Img</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === 3,
                          })}
                          onClick={() => {
                            this.toggleTab(3);
                          }}
                        >
                          <span className="step-number">03</span>
                          <span className="step-title">Meta Data</span>
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent
                      activeTab={this.state.activeTab}
                      className="twitter-bs-wizard-tab-content"
                    >
                      <TabPane tabId={1}>
                        <CardTitle className="h5">Basic Information</CardTitle>
                        <p className="card-title-desc">
                          Fill all information below
                        </p>
                        <form>
                          <div className="mb-3">
                            <Label className="form-label" htmlFor="productname">
                              Product Name
                            </Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="manufacturername"
                                >
                                  Manufacturer Name
                                </Label>
                                <Input
                                  id="manufacturername"
                                  name="manufacturername"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="manufacturerbrand"
                                >
                                  Manufacturer Brand
                                </Label>
                                <Input
                                  id="manufacturerbrand"
                                  name="manufacturerbrand"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <Label className="form-label" htmlFor="price">
                                  Price
                                </Label>
                                <Input
                                  id="price"
                                  name="price"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <Label className="form-label">
                                  Category
                                </Label>
                                <select className="form-control select2">
                                  <option>Select</option>
                                  <option value="EL">Electronic</option>
                                  <option value="FA">Fashion</option>
                                  <option value="FI">Fitness</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <Label className="form-label">
                                  Features
                                </Label>

                                <Select
                                  classNamePrefix="select2-selection"
                                  placeholder="Choose..."
                                  title="Country"
                                  options={options}
                                  isMulti
                                />

                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <label className="form-label" htmlFor="productdesc">
                              Product Description
                            </label>
                            <textarea
                              className="form-control"
                              id="productdesc"
                              rows="5"
                            ></textarea>
                          </div>
                        </form>
                      </TabPane>
                      <TabPane tabId={2}>
                        <CardTitle className="h4">Product Images</CardTitle>
                        <p className="card-title-desc">Upload product image</p>
                        <Form className="dropzone">
                          <Dropzone
                            onDrop={(acceptedFiles) =>
                              this.handleAcceptedFiles(acceptedFiles)
                            }
                          >
                            {({ getRootProps, getInputProps }) => (
                              <div>
                                <div
                                  className="dz-message needsclick"
                                  {...getRootProps()}
                                >
                                  <input {...getInputProps()} />
                                  
                                    <div className="mb-3">
                                      <i className="display-4 text-muted ri-upload-cloud-2-line" />
                                    </div>
                                    <h4>Drop files here or click to upload.</h4>
                                    
                                </div>
                              </div>
                            )}
                          </Dropzone>
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          >
                            {this.state.selectedFiles.map((f, i) => {
                              return (
                                <Card
                                  className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                  key={i + "-file"}
                                >
                                  <div className="p-2">
                                    <Row className="align-items-center">
                                      <Col className="col-auto">
                                        <img
                                          data-dz-thumbnail=""
                                          height="80"
                                          className="avatar-sm rounded bg-light"
                                          alt={f.name}
                                          src={f.preview}
                                        />
                                      </Col>
                                      <Col>
                                        <Link
                                          to="#"
                                          className="text-muted font-weight-bold"
                                        >
                                          {f.name}
                                        </Link>
                                        <p className="mb-0">
                                          <strong>{f.formattedSize}</strong>
                                        </p>
                                      </Col>
                                    </Row>
                                  </div>
                                </Card>
                              );
                            })}
                          </div>
                        </Form>
                      </TabPane>
                      <TabPane tabId={3}>
                      
                        <CardTitle className="h4">Meta Data</CardTitle>
                        <p className="card-title-desc">
                          Fill all information below
                        </p>

                        <Form>
                          <Row>
                            <Col sm={6}>
                              <div className="mb-3">
                                <Label htmlFor="metatitle">Meta title</Label>
                                <Input
                                  id="metatitle"
                                  name="productname"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </Col>

                            <Col sm={6}>
                              <div className="mb-3">
                                  <Label htmlFor="metakeywords">Meta Keywords</Label>
                                  <Input
                                    id="metakeywords"
                                    name="manufacturername"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              
                            </Col>
                          </Row>
                          <div className="mb-3">
                              <Label htmlFor="metadescription">
                                Meta Description
                              </Label>
                              <textarea
                                className="form-control"
                                id="metadescription"
                                rows="5"
                              />
                            </div>
                            <div className="text-center mt-4">
                              <Button type="submit" color="primary" className="me-1">
                                Save Changes
                              </Button>{" "}
                              <Button type="submit" color="light">
                                Cancel
                              </Button>
                            </div>
                        </Form>
                      </TabPane>
                    </TabContent>
                    <ul className="pager wizard twitter-bs-wizard-pager-link">
                        <li className={this.state.activeTab === 1 ? "previous disabled" : "previous"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab - 1); }}>Previous</Link></li>
                        <li className={this.state.activeTab === 3 ? "next disabled" : "next"}><Link to="#" onClick={() => { this.toggleTab(this.state.activeTab + 1); }}>Next</Link></li>
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

export default EcommerceAddProduct;
