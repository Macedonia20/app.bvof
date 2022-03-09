import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Input,
  TabPane,
  Table,
} from "reactstrap";
import classnames from "classnames";
import { isEmpty } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import Star Ratings
import StarRatings from "react-star-ratings";

//Import actions
import { getProductDetail } from "../../../store/actions";

import Reviews from "./Reviews";

class EcommerceProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      activeDescriptionTab: "description",
      product: {},
      breadcrumbItems: [
        { title: "Ecommerce", link: "#" },
        { title: "Product Detail", link: "#" },
      ],
    };
    this.toggleTab = this.toggleTab.bind(this);
    this.toggledescription = this.toggledescription.bind(this);
    this.imageShow = this.imageShow.bind(this);
  }

  componentDidMount() {
    const {
      match: { params },
      onGetProductDetail,
    } = this.props;
    if (params && params.id) {
      onGetProductDetail(params.id);
    }
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggledescription(tab) {
    if (this.state.activeDescriptionTab !== tab) {
      this.setState({
        activeDescriptionTab: tab,
      });
    }
  }

  imageShow(img, id) {
    const expandImg = document.getElementById("expandedImg" + id);
    expandImg.src = img;
  }

  render() {
    const { product } = this.props;

    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <Breadcrumbs
              title="Ecoomerce"
              breadcrumbItems={this.state.breadcrumbItems}
            />

            {!isEmpty(product) && (
              <React.Fragment>
                <Row>
                  <Col lg={12}>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col xl="5">
                            <div className="product-detail">
                              <Row>
                                <Col xs="3">
                                  <Nav className="flex-column" pills>
                                    <NavItem>
                                      <NavLink
                                        className={classnames({
                                          active: this.state.activeTab === "1",
                                        })}
                                        onClick={() => {
                                          this.toggleTab("1");
                                        }}
                                      >
                                        <img
                                          src={product.image}
                                          alt=""
                                          onClick={() => {
                                            this.imageShow(product.image, 1);
                                          }}
                                          className="img-fluid mx-auto d-block tab-img rounded"
                                        />
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                      <NavLink
                                        className={classnames({
                                          active: this.state.activeTab === "2",
                                        })}
                                        onClick={() => {
                                          this.toggleTab("2");
                                        }}
                                      >
                                        <img
                                          src={product.extraimgs[0]}
                                          alt=""
                                          onClick={() => {
                                            this.imageShow(
                                              product.extraimgs[0],
                                              2
                                            );
                                          }}
                                          className="img-fluid mx-auto d-block tab-img rounded"
                                        />
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                      <NavLink
                                        className={classnames({
                                          active: this.state.activeTab === "3",
                                        })}
                                        onClick={() => {
                                          this.toggleTab("3");
                                        }}
                                      >
                                        <img
                                          src={product.extraimgs[1]}
                                          alt=""
                                          onClick={() => {
                                            this.imageShow(
                                              product.extraimgs[1],
                                              3
                                            );
                                          }}
                                          className="img-fluid mx-auto d-block tab-img rounded"
                                        />
                                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                      <NavLink
                                        className={classnames({
                                          active: this.state.activeTab === "4",
                                        })}
                                        onClick={() => {
                                          this.toggleTab("4");
                                        }}
                                      >
                                        <img
                                          src={product.extraimgs[2]}
                                          alt=""
                                          onClick={() => {
                                            this.imageShow(
                                              product.extraimgs[2],
                                              4
                                            );
                                          }}
                                          className="img-fluid mx-auto d-block tab-img rounded"
                                        />
                                      </NavLink>
                                    </NavItem>
                                  </Nav>
                                </Col>
                                <Col xs="9">
                                  <TabContent
                                    activeTab={this.state.activeTab}
                                    className="position-relative"
                                  >
                                    <TabPane tabId="1">
                                      <div className="product-img">
                                        <img
                                          src={product.image}
                                          alt=""
                                          id="expandedImg1"
                                          className="img-fluid mx-auto d-block"
                                        />
                                      </div>
                                    </TabPane>
                                    <TabPane tabId="2">
                                      <div className="product-img">
                                        <img
                                          src={product.image}
                                          id="expandedImg2"
                                          alt=""
                                          className="img-fluid mx-auto d-block"
                                        />
                                      </div>
                                    </TabPane>
                                    <TabPane tabId="3">
                                      <div className="product-img">
                                        <img
                                          src={product.image}
                                          id="expandedImg3"
                                          alt=""
                                          className="img-fluid mx-auto d-block"
                                        />
                                      </div>
                                    </TabPane>
                                    <TabPane tabId="4">
                                      <div className="product-img">
                                        <img
                                          src={product.image}
                                          id="expandedImg4"
                                          alt=""
                                          className="img-fluid mx-auto d-block"
                                        />
                                      </div>
                                    </TabPane>
                                  </TabContent>
                                  <Row className="text-center mt-2">
                                    <div className="col-sm-6">
                                      <div className="d-grid">
                                        <Button
                                          type="button"
                                          color="primary"
                                          className="btn-block waves-effect waves-light mt-2 me-1"
                                        >
                                          <i className="uil uil-shopping-cart-alt me-2"></i>{" "}
                                          Add to cart
                                        </Button>
                                      </div>
                                    </div>
                                    <div className="col-sm-6">
                                      <div className="d-grid">
                                        <Button
                                          type="button"
                                          color="light"
                                          className="btn-block waves-effect  mt-2 waves-light"
                                        >
                                          <i className="uil uil-shopping-basket me-2"></i>
                                          Buy now
                                        </Button>
                                      </div>
                                    </div>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          </Col>

                          <Col xl="7">
                            <div className="mt-4 mt-xl-3">
                              <Link to="#" className="text-primary">
                                {product.category}
                              </Link>
                              <h5 className="mt-1 mb-3">{product.name}</h5>

                              <div className="d-inline-flex">
                                <div className="text-muted me-3">

                                  <StarRatings
                                    rating={4}
                                    starRatedColor="#F1B44C"
                                    starEmptyColor="#2D363F"
                                    numberOfStars={5}
                                    name="rating"
                                    starDimension="14px"
                                    starSpacing="3px"
                                  />

                                </div>
                                <div className="text-muted">
                                  ( {product.reviews} )
                                </div>
                              </div>

                              <h5 className="mt-2">
                                <del className="text-muted me-2">
                                  ${product.oldprice}
                                </del>
                                ${product.newprice}
                                {!!product.isOffer && (
                                  <span className="text-danger font-size-12 ms-2">
                                    {product.offer} % Off
                                  </span>
                                )}
                              </h5>

                              <p className="mt-3">{product.description}</p>
                              
                              <hr className="my-4" />

                              <Row>
                                <Col md="6">
                                  <div>
                                    <h5 className="font-size-14">
                                      <i className="mdi mdi-location"></i>{" "}
                                      Delivery location
                                    </h5>
                                    <div className="d-flex flex-wrap">
                                      <div className="input-group mb-3 w-auto">
                                        <Input
                                          type="text"
                                          className="form-control"
                                          placeholder="Enter Delivery pincode"
                                        />
                                        <button
                                          className="btn btn-light"
                                          type="button"
                                        >
                                          Check
                                        </button>
                                      </div>
                                    </div>

                                    <h5 className="font-size-14">
                                      Specification :
                                    </h5>
                                    <ul className="list-unstyled product-desc-list">
                                      {product.shortspecifications &&
                                        product.shortspecifications.map(
                                          (item, i) => (
                                            <li key={i}>
                                              <i className="mdi mdi-circle-medium me-1 align-middle"></i>{" "}
                                              {item}
                                            </li>
                                          )
                                        )}
                                    </ul>
                                  </div>
                                </Col>

                                <Col md="6">
                                  <h5 className="font-size-14">Services :</h5>
                                  <ul className="list-unstyled product-desc-list">
                                    {product.shortservices &&
                                      product.shortservices.map((item, i) => (
                                        <li key={i}>
                                          <i
                                            className={
                                              "mdi " +
                                              item.icon +
                                              " text-primary me-1 font-size-16"
                                            }
                                          ></i>{" "}
                                          {item.value}
                                        </li>
                                      ))}
                                  </ul>
                                </Col>
                              </Row>
                              <Row>
                                <Col sm="6">
                                  <div className="product-color">
                                    <h5 className="font-size-15">Color :</h5>
                                    {product.colorOptions &&
                                      product.colorOptions.map((option, i) => (
                                        <Link
                                          to="#"
                                          className={i === 0 ? "active" : ""}
                                          key={i}
                                        >
                                          <div className="product-color-item">
                                            <img
                                              src={option.image}
                                              alt=""
                                              className="avatar-md"
                                            />
                                          </div>
                                          <p>{option.color}</p>
                                        </Link>
                                      ))}
                                  </div>
                                </Col>
                                <Col sm="6">
                                  <div className="product-color mt-3">
                                    <h5 className="font-size-14">Size :</h5>
                                    <Link to="#" className="active">
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body">
                                            S
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link to="#">
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body">
                                            M
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link to="#">
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body">
                                            L
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link to="#">
                                      <div className="product-color-item">
                                        <div className="avatar-xs">
                                          <span className="avatar-title bg-transparent text-body">
                                            XL
                                          </span>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <div className="mt-4">
                          <h5 className="font-size-14 mb-3">
                            Product description:{" "}
                          </h5>
                          <div className="product-desc">
                            <Nav tabs className="nav-tabs-custom">
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active:
                                      this.state.activeDescriptionTab ===
                                      "description",
                                  })}
                                  onClick={() => {
                                    this.toggledescription("description");
                                  }}
                                >
                                  Description
                                </NavLink>
                              </NavItem>
                              <NavItem>
                                <NavLink
                                  className={classnames({
                                    active:
                                      this.state.activeDescriptionTab ===
                                      "specifications",
                                  })}
                                  onClick={() => {
                                    this.toggledescription("specifications");
                                  }}
                                >
                                  Specifications
                                </NavLink>
                              </NavItem>
                            </Nav>
                            <TabContent
                              activeTab={this.state.activeDescriptionTab}
                              className="border border-top-0 p-4"
                            >
                              <TabPane tabId="description">
                                <div>
                                  <p>
                                    If several languages coalesce, the grammar
                                    of the resulting language is more simple and
                                    regular than that of the individual{" "}
                                  </p>
                                  <p>
                                    To achieve this, it would be necessary to
                                    have uniform grammar, pronunciation and more
                                    common several languages coalesce, the
                                    grammar of the resulting.
                                  </p>
                                  <p>
                                    It will be as simple as occidental in fact.
                                  </p>

                                  <div>
                                    <p className="mb-2">
                                      <i className="mdi mdi-circle-medium me-1 align-middle"></i>{" "}
                                      If several languages coalesce
                                    </p>
                                    <p className="mb-2">
                                      <i className="mdi mdi-circle-medium me-1 align-middle"></i>{" "}
                                      To an English person, it will seem like
                                      simplified
                                    </p>
                                    <p className="mb-0">
                                      <i className="mdi mdi-circle-medium me-1 align-middle"></i>{" "}
                                      These cases are perfectly simple.
                                    </p>
                                  </div>
                                </div>
                              </TabPane>
                              <TabPane tabId="specifications">
                                <div className="table-responsive">
                                  <Table className="table-nowrap mb-0">
                                    <tbody>
                                      {product.specification &&
                                        product.specification.map(
                                          (specification, i) => (
                                            <tr key={i}>
                                              <th
                                                scope="row"
                                                style={{ width: "20%" }}
                                              >
                                                {specification.type}
                                              </th>
                                              <td>{specification.value}</td>
                                            </tr>
                                          )
                                        )}
                                    </tbody>
                                  </Table>
                                </div>
                              </TabPane>
                            </TabContent>
                          </div>
                        </div>

                        <Reviews comments={product.comments} />
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <Row>
                  <Col lg={12}>
                    <Card>
                      <CardBody>
                        <Row>
                          <Col md={4}>
                            <div className="d-flex">
                              <div className="avatar-sm me-3">
                                <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                                  <i className="ri-checkbox-circle-line"></i>
                                </span>
                              </div>
                              <div className="flex-1 align-self-center overflow-hidden">
                                <h5>Free Shipping</h5>
                                <p className="text-muted mb-0">
                                  Sed ut perspiciatis unde
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="d-flex mt-4 mt-md-0">
                              <div className="avatar-sm me-3">
                                <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                                  <i className="ri-exchange-line"></i>
                                </span>
                              </div>
                              <div className="flex-1 align-self-center overflow-hidden">
                                <h5>Easy Return</h5>
                                <p className="text-muted mb-0">
                                  Neque porro quisquam est
                                </p>
                              </div>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="d-flex mt-4 mt-md-0">
                              <div className="avatar-sm me-3">
                                <span className="avatar-title bg-light rounded-circle text-primary font-size-24">
                                  <i className="ri-money-dollar-circle-line"></i>
                                </span>
                              </div>
                              <div className="flex-1 align-self-center overflow-hidden">
                                <h5>Cash on Delivery</h5>
                                <p className="text-muted mb-0">
                                  Ut enim ad minima quis
                                </p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </React.Fragment>
            )}
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

EcommerceProductDetail.propTypes = {
  product: PropTypes.object,
  match: PropTypes.object,
  onGetProductDetail: PropTypes.func,
};

const mapStateToProps = ({ Ecommerce }) => ({
  product: Ecommerce.product,
});

const mapDispatchToProps = (dispatch) => ({
  onGetProductDetail: (id) => dispatch(getProductDetail(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EcommerceProductDetail);
