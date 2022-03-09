import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Table,
  Input,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  Form,
  Label,
  CardBody,
  CardTitle,
} from "reactstrap";

import { Link } from "react-router-dom";

import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Images
import img1 from "../../assets/images/product/img-1.png";
import img6 from "../../assets/images/product/img-6.png";

class EcommerceCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderSummary: [
        {
          id: 1,
          img: img1,
          productTitle: "Full sleeve T-shirt",
          price: 240,
          qty: 2,
        },
        {
          id: 2,
          img: img6,
          productTitle: "Half sleeve T-shirt",
          price: 225,
          qty: 1,
        },
      ],
      activeTab: 1,
      selectedGroup: null,
      breadcrumbItems: [
        { title: "Ecommerce", link: "#" },
        { title: "Checkout", link: "#" },
      ],
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.handleSelectGroup = this.handleSelectGroup.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleSelectGroup = (selectedGroup) => {
    this.setState({ selectedGroup });
  };

  render() {
    
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
              <Col lg="8">
                <Card>
                  <CardBody>
                    <div
                      id="checkout-nav-pills-wizard"
                      className="twitter-bs-wizard"
                    >
                      <Nav className="twitter-bs-wizard-nav" pills justified>
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
                            <span className="step-title">Billing Info</span>
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
                            <span className="step-title">Shipping Info</span>
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
                            <span className="step-title">Payment Info</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                      
                      <TabContent
                        activeTab={this.state.activeTab}
                        className="twitter-bs-wizard-tab-content"
                      >
                        <TabPane tabId={1}>
                          <CardTitle className="h5">
                            Billing information
                          </CardTitle>
                          <p className="card-title-desc">
                            If several languages coalesce, the grammar of the
                            resulting
                          </p>
                          <Form>
                            <div>
                              <div>
                                <Row>
                                  <Col lg={4}>
                                    <div className="mb-4">
                                      <Label
                                        htmlFor="billing-name"
                                        className="form-label"
                                      >
                                        Name
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="billing-name"
                                        placeholder="Enter your name"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-4">
                                      <Label
                                        htmlFor="billing-email-address"
                                        className="form-label"
                                      >
                                        Email Address
                                      </Label>
                                      <Input
                                        type="email"
                                        className="form-control"
                                        id="billing-email-address"
                                        placeholder="Enter your email"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-4">
                                      <Label
                                        htmlFor="billing-phone"
                                        className="form-label"
                                      >
                                        Phone
                                      </Label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="billing-phone"
                                        placeholder="Enter your Phone no."
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <div className="mb-4">
                                  <Label
                                    htmlFor="billing-address"
                                    md="2"
                                    className="form-label"
                                  >
                                    Address
                                  </Label>
                                  <textarea
                                    className="form-control"
                                    id="billing-address"
                                    rows="3"
                                    placeholder="Enter full address"
                                  />
                                </div>
                                <Row>
                                  <Col lg={4}>
                                    <div className="mb-4 mb-lg-0">
                                      <Label className="form-label">
                                        Country
                                      </Label>
                                      <select
                                        className="form-select select2"
                                        title="Country"
                                      >
                                        <option value="0">
                                          Select Country
                                        </option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">
                                          American Samoa
                                        </option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">
                                          Bouvet Island
                                        </option>
                                        <option value="BR">Brazil</option>
                                        <option value="BN">
                                          Brunei Darussalam
                                        </option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">
                                          Cayman Islands
                                        </option>
                                        <option value="CF">
                                          Central African Republic
                                        </option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">
                                          Christmas Island
                                        </option>
                                        <option value="CC">
                                          Cocos (Keeling) Islands
                                        </option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">
                                          Cote d'Ivoire
                                        </option>
                                        <option value="HR">
                                          Croatia (Hrvatska)
                                        </option>
                                        <option value="CU">Cuba</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">
                                          Czech Republic
                                        </option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">
                                          Dominican Republic
                                        </option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">
                                          Equatorial Guinea
                                        </option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">
                                          Falkland Islands (Malvinas)
                                        </option>
                                        <option value="FO">
                                          Faroe Islands
                                        </option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">
                                          French Guiana
                                        </option>
                                        <option value="PF">
                                          French Polynesia
                                        </option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">
                                          Guinea-Bissau
                                        </option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KR">
                                          Korea, Republic of
                                        </option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">
                                          Libyan Arab Jamahiriya
                                        </option>
                                        <option value="LI">
                                          Liechtenstein
                                        </option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macau</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">
                                          Marshall Islands
                                        </option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="MD">
                                          Moldova, Republic of
                                        </option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="AN">
                                          Netherlands Antilles
                                        </option>
                                        <option value="NC">
                                          New Caledonia
                                        </option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">
                                          Norfolk Island
                                        </option>
                                        <option value="MP">
                                          Northern Mariana Islands
                                        </option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PW">Palau</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">
                                          Papua New Guinea
                                        </option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Reunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">
                                          Russian Federation
                                        </option>
                                        <option value="RW">Rwanda</option>
                                        <option value="KN">
                                          Saint Kitts and Nevis
                                        </option>
                                        <option value="LC">Saint LUCIA</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">
                                          Sao Tome and Principe
                                        </option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SK">
                                          Slovakia (Slovak Republic)
                                        </option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">
                                          Solomon Islands
                                        </option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SH">St. Helena</option>
                                        <option value="PM">
                                          St. Pierre and Miquelon
                                        </option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">
                                          Syrian Arab Republic
                                        </option>
                                        <option value="TW">
                                          Taiwan, Province of China
                                        </option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">
                                          Tanzania, United Republic of
                                        </option>
                                        <option value="TH">Thailand</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">
                                          Trinidad and Tobago
                                        </option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">
                                          Turks and Caicos Islands
                                        </option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">
                                          United Arab Emirates
                                        </option>
                                        <option value="GB">
                                          United Kingdom
                                        </option>
                                        <option value="US">
                                          United States
                                        </option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">
                                          Virgin Islands (British)
                                        </option>
                                        <option value="VI">
                                          Virgin Islands (U.S.)
                                        </option>
                                        <option value="WF">
                                          Wallis and Futuna Islands
                                        </option>
                                        <option value="EH">
                                          Western Sahara
                                        </option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                      </select>
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-4 mb-lg-0">
                                      <Label
                                        className="form-label"
                                        for="billing-city"
                                      >
                                        City
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="billing-city"
                                        placeholder="Enter City"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4}>
                                    <div className="mb-0">
                                      <Label
                                        className="form-label"
                                        for="zip-code"
                                      >
                                        Zip / Postal code
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="zip-code"
                                        placeholder="Enter Postal code"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Form>
                        </TabPane>
                        <TabPane
                          tabId={2}
                          id="v-pills-payment"
                          role="tabpanel"
                          aria-labelledby="v-pills-payment-tab"
                        >
                          <div>
                            <CardTitle className="h4">
                              Shipping information
                            </CardTitle>
                            <p className="card-title-desc">
                              It will be as simple as occidental in fact
                            </p>
                            <Row>
                              <Col lg={4} sm={6}>
                                <Card className="border rounded active shipping-address">
                                  <CardBody>
                                    <Link to="#" className="float-end ms-1">
                                      Edit
                                    </Link>
                                    <h5 className="font-size-14 mb-4">
                                      Address 1
                                    </h5>

                                    <h5 className="font-size-14">
                                      Bradley McMillian
                                    </h5>
                                    <p className="mb-1">
                                      109 Clarksburg Park Road Show Low, AZ
                                      85901
                                    </p>
                                    <p className="mb-0">Mo. 012-345-6789</p>
                                  </CardBody>
                                </Card>
                              </Col>
                              <Col lg={4} sm={6}>
                                <Card className="border rounded shipping-address">
                                  <CardBody>
                                    <Link to="#" className="float-end ms-1">
                                      Edit
                                    </Link>
                                    <h5 className="font-size-14 mb-4">
                                      Address 2
                                    </h5>

                                    <h5 className="font-size-14">
                                      Bradley McMillian
                                    </h5>
                                    <p className="mb-1">
                                      109 Clarksburg Park Road Show Low, AZ
                                      85901
                                    </p>
                                    <p className="mb-0">Mo. 012-345-6789</p>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row>
                          </div>
                        </TabPane>
                        <TabPane tabId={3} id="v-pills-confir" role="tabpanel">
                          <CardTitle className="h5">Payment information</CardTitle>
                          <p className="card-title-desc">It will be as simple as occidental in fact</p>  
                          <div>
                            <h5 className="font-size-14">Payment method :</h5>

                            <Row>
                              <Col lg={4} sm={6}>
                                <div>
                                  <Label className="form-label card-radio-label mb-3">
                                    <Input
                                      type="radio"
                                      name="pay-method"
                                      id="pay-methodoption1"
                                      className="card-radio-input"
                                    />

                                    <div className="card-radio">
                                      <i className="fab fa-cc-mastercard font-size-24 align-middle me-2"></i>
                                      <span>Credit / Debit Card</span>
                                    </div>
                                  </Label>
                                </div>
                              </Col>

                              <Col lg={4} sm={6}>
                                <div>
                                  <Label className="form-label card-radio-label mb-3">
                                    <Input
                                      type="radio"
                                      name="pay-method"
                                      id="pay-methodoption2"
                                      className="card-radio-input"
                                    />

                                    <div className="card-radio">
                                      <i className="fab fa-cc-paypal font-size-24 align-middle me-2"></i>
                                      <span>Paypal</span>
                                    </div>
                                  </Label>
                                </div>
                              </Col>

                              <Col lg={4} sm={6}>
                                <div>
                                  <Label className="form-label card-radio-label mb-3">
                                    <Input
                                      type="radio"
                                      name="pay-method"
                                      id="pay-methodoption3"
                                      className="card-radio-input"
                                    />

                                    <div className="card-radio">
                                      <i className="far fa-money-bill-alt font-size-24 align-middle me-2"></i>
                                      <span>Cash on Delivery</span>
                                    </div>
                                  </Label>
                                </div>
                              </Col>
                            </Row>

                            <h5 className="my-3 font-size-14">
                              For card Payment
                            </h5>
                            <div className="p-4 border">
                              <form>
                                <div className="mb-3">
                                  <Label
                                    className="form-label"
                                    for="cardnameInput"
                                  >
                                    Name on card
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="cardnameInput"
                                    placeholder="Name on Card"
                                  />
                                </div>

                                <div className="row">
                                  <Col lg={4} sm={6}>
                                    <div className="mb-3 mb-lg-0">
                                      <Label
                                        className="form-label"
                                        for="cardnumberInput"
                                      >
                                        Card Number
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="cardnumberInput"
                                        placeholder="0000 0000 0000 0000"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4} sm={6}>
                                    <div className="mb-3 mb-lg-0">
                                      <Label
                                        className="form-label"
                                        for="expirydateInput"
                                      >
                                        Expiry date
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="expirydateInput"
                                        placeholder="MM/YY"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={4} sm={6}>
                                    <div className="mb-3 mb-lg-0">
                                      <Label
                                        className="form-label"
                                        for="cvvcodeInput"
                                      >
                                        CVV Code
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="cvvcodeInput"
                                        placeholder="Enter CVV Code"
                                      />
                                    </div>
                                  </Col>
                                </div>
                              </form>
                            </div>
                            <div className="mt-4 text-end">
                              <Link to="#" className="btn btn-success">
                                Complete order
                              </Link>
                            </div>
                          </div>
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
              <Col lg="4">
                <Card className="checkout-order-summary">
                  <CardBody>
                    <div className="p-3 bg-light mb-4">
                      <h5 className="font-size-14 mb-0">
                        Order Summary{" "}
                        <span className="float-end ms-2">#SK2356</span>
                      </h5>
                    </div>
                    <div className="table-responsive">
                      <Table className="align-middle mb-0 table-nowrap">
                        <thead className="table-light">
                          <tr>
                            <th style={{ width: "110px" }} scope="col">
                              Product
                            </th>
                            <th scope="col">Product Desc</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.orderSummary.map((orderitem, key) => (
                            <tr key={"_orderSummary_" + key}>
                              <th scope="row">
                                <img
                                  src={orderitem.img}
                                  alt="product-img"
                                  title="product-img"
                                  className="avatar-md"
                                />
                              </th>
                              <td>
                                <h5 className="font-size-14 text-truncate">
                                  <Link
                                    to="/ecommerce-product-details/1"
                                    className="text-dark"
                                  >
                                    {orderitem.productTitle}{" "}
                                  </Link>
                                </h5>
                                <p className="text-muted mb-0">
                                  $ {orderitem.price} x {orderitem.qty}
                                </p>
                              </td>
                              <td>$ {orderitem.price * orderitem.qty}</td>
                            </tr>
                          ))}
                          <tr>
                            <td colSpan="2">
                              <h6 className="m-0 text-end">Sub Total:</h6>
                            </td>
                            <td>$ 705</td>
                          </tr>
                          <tr>
                            <td colSpan="3">
                              <div className="bg-soft-primary p-3 rounded">
                                <h5 className="font-size-14 text-primary mb-0">
                                  <i className="fas fa-shipping-fast me-2" />{" "}
                                  Shipping{" "}
                                  <span className="float-end">Free</span>
                                </h5>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="2">
                              <h6 className="m-0 text-end">Total:</h6>
                            </td>
                            <td>$ 705</td>
                          </tr>
                        </tbody>
                      </Table>
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

export default EcommerceCheckout;
