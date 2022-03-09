import React, { Component } from "react"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Collapse,
  Row
} from "reactstrap";

import { isEmpty, map, size } from "lodash"

// RangeSlider
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb";

//Import data
import { discountData, productsData } from "../../../common/data";

//Import actions
import { getProducts } from "../../../store/e-commerce/actions";

class EcommerceProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      FilterClothes: [
        { id: 1, name: "T-shirts", link: "#" },
        { id: 2, name: "Shirts", link: "#" },
        { id: 3, name: "Jeans", link: "#" },
        { id: 4, name: "Jackets", link: "#" },
      ],
      breadcrumbItems : [
        { title : "Ecommerce", link : "#" },
        { title : "Products", link : "#" },
      ],
      ratingvalues: [],
      products: [],
      activeTab: "1",
      isCategoryOpen1 : false,
      isCategoryOpen2 : true,
      isCategoryOpen3 : false,
      isCategoryOpen4 : false,
      discountData: [],
      filters: {
        discount: [],
        price: { min: 0, max: 500 },
      },
      page: 1,
      totalPage: 5, //replace this with total pages of data
    }
    this.toggleTab = this.toggleTab.bind(this)
    this.filtercategorytoggle1 = this.filtercategorytoggle1.bind(this)
    this.filtercategorytoggle2 = this.filtercategorytoggle2.bind(this)
    this.filtercategorytoggle3 = this.filtercategorytoggle3.bind(this)
    this.filtercategorytoggle4 = this.filtercategorytoggle4.bind(this)
    this.onSelectRating = this.onSelectRating.bind(this)
  }

  componentDidMount() {
    const { products, onGetProducts } = this.props
    this.setState({ products })
    onGetProducts()
    this.setState({ discountData })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { products } = this.props
    if (
      isEmpty(prevProps.products) &&
      !isEmpty(products) &&
      size(products) !== size(prevProps.products)
    ) {
      this.setState({ products })
    }
  }

  filtercategorytoggle1() {
    this.setState({
      isCategoryOpen1: !this.state.col1,
      isCategoryOpen2: false,
      isCategoryOpen3: false,
      isCategoryOpen4: false,
    })
  }

  filtercategorytoggle2() {
    this.setState({
      isCategoryOpen1: false,
      isCategoryOpen2: !this.state.col2,
      isCategoryOpen3: false,
      isCategoryOpen4: false,
    })
  }

  filtercategorytoggle3() {
    this.setState({
      isCategoryOpen1: false,
      isCategoryOpen2: false,
      isCategoryOpen3: !this.state.col3,
      isCategoryOpen4: false,
    })
  }

  filtercategorytoggle4() {
    this.setState({
      isCategoryOpen1: false,
      isCategoryOpen2: false,
      isCategoryOpen3: false,
      isCategoryOpen4: !this.state.col4,
    })
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  onSelectDiscount = e => {
    const { value, checked } = e.target
    const {
      filters,
      filters: { discount },
    } = this.state
    this.setState(
      {
        filters: {
          ...filters,
          discount: discount.find(item => item === value)
            ? discount.filter(item => item !== value)
            : [...discount, value],
        },
      },
      () => {
        this.onFilterProducts(value, checked)
      }
    )
  }

  onFilterProducts = (value, checked) => {
    const {
      filters: { discount },
    } = this.state
    let filteredProducts = productsData
    if (!!checked && parseInt(value) === 0) {
      filteredProducts = productsData.filter(product => product.offer < 10)
    } else if (discount.length > 0) {
      filteredProducts = productsData.filter(
        product => product.offer >= Math.min(...discount)
      )
    }
    this.setState({ products: filteredProducts })
  }

  onUpdate = (render, handle, value) => {
    this.setState({
      products: productsData.filter(
        product => product.newPrice >= value[0] && product.newPrice <= value[1]
      ),
    })
  }

  /*
  on change rating checkbox method
  */
  onChangeRating = value => {
    this.setState({
      products: productsData.filter(product => product.rating >= value),
    })

    var modifiedRating = [...this.state.ratingvalues];
    modifiedRating.push(value);
    this.setState({ ratingvalues: modifiedRating });
  }

  onSelectRating = value => {
    this.setState({
      products: productsData.filter(product => product.rating === value),
    })
  }

  onUncheckMark = (value) => {
    var modifiedRating = [...this.state.ratingvalues];
    const modifiedData = (modifiedRating || []).filter((x) => x !== value);
    /*
    find min values
    */
    var filteredProducts = productsData;
    if (modifiedData && modifiedData.length && value !== 1) {
      var minValue = Math.min(...modifiedData);
      if (minValue && minValue !== Infinity) {

        filteredProducts = productsData.filter(product => product.rating >= minValue);

        this.setState({ ratingvalues: modifiedData });
      }
    } else {
      filteredProducts = productsData;
    }
    this.setState({ products: filteredProducts });

  }

  handlePageClick = page => {
    this.setState({ page })
  }

  render() {
    const { history } = this.props
    const { discountData, products, page, totalPage } = this.state
    return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
        <Breadcrumbs title="Ecoomerce" breadcrumbItems={this.state.breadcrumbItems} />
          <Row>
            <Col lg="4" xl="3">
              <Card>
                <CardHeader className="bg-transparent border-bottom">
                  <h5 className="mb-0">Filters</h5>
                </CardHeader>

                <CardBody>
                  <h5 className="font-size-14 mb-3">Categories</h5>
                  <div className="accordion ecommerce" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={ this.state.isCategoryOpen1 ? 'accordion-button' : 'accordion-button collapsed'}
                          onClick={this.filtercategorytoggle1}
                          data-bs-toggle="collapse"
                        >
                          <i className="mdi mdi-desktop-classic font-size-16 align-middle me-2"></i>{" "}
                          Electronic
                        </button>
                      </h2>
                      <Collapse
                        isOpen={this.state.isCategoryOpen1}
                        className="accordion-collapse"
                      >
                        <div className="accordion-body">
                          <ul className="list-unstyled categories-list mb-0">
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Mobile
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Mobile accessories
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Computers
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Laptops
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Speakers
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingtwo">
                        <button
                          className={ this.state.isCategoryOpen2 ? 'accordion-button' : 'accordion-button collapsed'}
                          onClick={this.filtercategorytoggle2}
                          data-bs-toggle="collapse"
                        >
                          <i className="mdi mdi-hanger font-size-16 align-middle me-2"></i>{" "}
                          Fashion
                        </button>
                      </h2>
                      <Collapse
                        isOpen={this.state.isCategoryOpen2}
                        className="accordion-collapse"
                      >
                        <div className="accordion-body">
                          <ul className="list-unstyled categories-list mb-0">
                            <li className="active">
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Clothing
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Footwear
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Watches
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="mdi mdi-circle-medium me-1"></i>{" "}
                                Sportswear
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className={ this.state.isCategoryOpen3 ? 'accordion-button' : 'accordion-button collapsed'}
                          onClick={this.filtercategorytoggle3}
                          data-bs-toggle="collapse"
                        >
                          <i className="mdi mdi-pinwheel-outline font-size-16 align-middle me-2"></i>{" "}
                          Baby & Kids
                        </button>
                      </h2>
                      <Collapse
                        isOpen={this.state.isCategoryOpen3}
                        className="accordion-collapse"
                      >
                        <div className="accordion-body">
                          <ul className="list-unstyled categories-list mb-0">
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Clothing</Link></li>
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Footwear</Link></li>
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Toys</Link></li>
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Baby care</Link></li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className={ this.state.isCategoryOpen4 ? 'accordion-button' : 'accordion-button collapsed'}
                          onClick={this.filtercategorytoggle4}
                          data-bs-toggle="collapse"
                        >
                          <i className="mdi mdi-dumbbell font-size-16 align-middle me-2"></i>{" "}
                          Fitness
                        </button>
                      </h2>

                      <Collapse
                        isOpen={this.state.isCategoryOpen4}
                        className="accordion-collapse"
                      >
                        <div className="accordion-body">
                          <ul className="list-unstyled categories-list mb-0">
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Gym equipment</Link></li>
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Yoga mat</Link></li>
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Dumbbells</Link></li>
                              <li><Link to="#"><i className="mdi mdi-circle-medium me-1"></i> Protein supplements</Link></li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>

                  </div>
                </CardBody>

                <CardBody className="border-top">
                  <div>
                    <h5 className="font-size-14 mb-4">Price</h5>
                    <br />
                    <Nouislider
                      range={{ min: 0, max: 600 }}
                      tooltips={true}
                      start={[100, 500]}
                      connect
                      onSlide={this.state.onUpdate}
                    />
                  </div>
                </CardBody>

                <div className="custom-accordion">

                <CardBody className="border-top">
                  <div>
                    <h5 className="font-size-14 mb-0">
                      <Link
                        to="#"
                        onClick={this.filterdiscountstoggle}
                        className="text-dark d-block"
                        data-bs-toggle="collapse"
                      >
                        Discount{" "}
                        <i className="mdi mdi-minus float-end accor-plus-icon"></i>
                      </Link>
                    </h5>
                    <Collapse
                      isOpen={this.isFilterProductDiscountOpen}
                      id="filterprodductcolor-collapse"
                    >
                      <div className="mt-4">
                        {discountData.map((discount, i) => (
                          <div
                            className="form-check mt-2"
                            key={"_discount_" + i}
                          >
                            <Input
                              type="checkbox"
                              value={discount.value}
                              className="form-check-input"
                              id={i}
                              onChange={this.onSelectDiscount}
                            />
                            <Label className="form-check-label" htmlFor={i}>
                              {discount.label}
                            </Label>
                          </div>
                        ))}
                       </div>
                    </Collapse>
                  </div>
                </CardBody>

                <CardBody class="border-top">
                  <div>
                      <h5 class="font-size-14 mb-0">
                        <Link to="#" class="text-dark d-block" data-bs-toggle="collapse" onClick={this.filtersizetoggle}>Size <i class="mdi mdi-minus float-end accor-plus-icon"></i></Link></h5>

                        <Collapse
                        isOpen={this.isFilterProductSizeOpen}
                        id="filterprodductcolor-collapse"
                        data-bs-toggle="collapse"
                      >

                          <div class="mt-4">
                              <div class="form-check mt-2">
                                <Input
                                  type="checkbox"
                                  value="x-large"
                                  className="form-check-input"
                                  id="productsizeRadio1"
                                />
                                <Label className="form-check-label" htmlFor="productsizeRadio1">
                                X-Large
                                </Label>
                              </div>
                              <div class="form-check mt-2">
                                <Input
                                  type="checkbox"
                                  value="x-large"
                                  className="form-check-input"
                                  id="productsizeRadio2"
                                />
                                <Label className="form-check-label" htmlFor="productsizeRadio2">
                                Large
                                </Label>
                              </div>
                              <div class="form-check mt-2">
                                <Input
                                  type="checkbox"
                                  value="x-large"
                                  className="form-check-input"
                                  id="productsizeRadio3"
                                />
                                <Label className="form-check-label" htmlFor="productsizeRadio3">
                                Medium
                                </Label>
                              </div>
                              <div class="form-check mt-2">
                                <Input
                                  type="checkbox"
                                  value="x-large"
                                  className="form-check-input"
                                  id="productsizeRadio4"
                                />
                                <Label className="form-check-label" htmlFor="productsizeRadio4">
                                Small
                                </Label>
                              </div>
                          </div>

                      </Collapse>
                  </div>
              </CardBody>

                  <CardBody className="border-top">
                    <div>
                      <h5 className="font-size-14 mb-0">
                        <Link
                          to="#"
                          onClick={this.filterratingtoggle}
                          className="collapsed text-dark d-block"
                        >
                          Customer Rating{" "}
                          <i className="mdi mdi-minus float-end accor-plus-icon"></i>
                        </Link>
                      </h5>
                      <Collapse
                        isOpen={this.isFilterProductRatingOpen}
                        id="filterprodductcolor-collapse"
                        data-bs-toggle="collapse"
                      >
                        <div className="mt-4">
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck1"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  this.onChangeRating(4);
                                } else {
                                  this.onUncheckMark(4);
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck1"
                            >
                              4 <i className="mdi mdi-star text-warning"></i> &
                              Above
                            </Label>
                          </div>
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck2"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  this.onChangeRating(3);
                                } else {
                                  this.onUncheckMark(3);
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck2"
                            >
                              3 <i className="mdi mdi-star text-warning"></i> &
                              Above
                            </Label>
                          </div>
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck3"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  this.onChangeRating(2);
                                } else {
                                  this.onUncheckMark(2);
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck3"
                            >
                              2 <i className="mdi mdi-star text-warning"></i> &
                              Above
                            </Label>
                          </div>
                          <div className="form-check mt-2">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="productratingCheck4"
                              onChange={(e) => {
                                if (e.target.checked) {
                                  this.onSelectRating(1);
                                } else {
                                  this.onUncheckMark(1);
                                }
                              }}
                            />
                            <Label
                              className="form-check-label"
                              htmlFor="productratingCheck4"
                            >
                              1 <i className="mdi mdi-star text-warning"></i>
                            </Label>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </CardBody>

                  
                </div>
              </Card>
            </Col>

            <Col lg="8" xl="9">
              <Card>
                <CardBody>
                  <div>
                    <Row>
                      <Col md="6">
                        <div>
                          <h5>Clothes & Accessories</h5>
                          <ol class="breadcrumb p-0 bg-transparent mb-2">
                            <li class="breadcrumb-item"><Link to="#">Fashion</Link></li>
                            <li class="breadcrumb-item"><Link to="#">Clothing</Link></li>
                            <li class="breadcrumb-item active">T-shirts</li>
                          </ol>
                        </div>
                      </Col>

                      <Col md="6">
                        <div className="form-inline float-md-end">
                          <div className="search-box ms-2">
                            <div className="position-relative">
                              <Input
                                type="text"
                                className="form-control rounded"
                                placeholder="Search..."
                              />
                              <i class="mdi mdi-magnify search-icon"></i>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <ul class="list-inline my-3 ecommerce-sortby-list">
                        <li class="list-inline-item"><span class="fw-medium font-family-secondary">Sort by:</span></li>
                        <li class="list-inline-item active"><Link to="#">Popularity</Link></li>
                        <li class="list-inline-item"><Link to="#">Newest</Link></li>
                        <li class="list-inline-item"><Link to="#">Discount</Link></li>
                    </ul>

                    <Row className="g-0">
                      {!isEmpty(products) &&
                        products.map((product, key) => (
                          <Col xl="4" sm="6" key={"_col_" + key}>
                            <div
                              className="product-box"
                              onClick={() =>
                                history.push(
                                  `/ecommerce-product-detail/${product.id}`
                                )
                              }
                            >
                              <div className="product-img">
                                {product.islable ? (
                                  <div className="product-ribbon badge bg-warning">
                                    {product.lable}
                                  </div>
                                ) : null}
                                {product.isOffer ? (
                                  <div className="product-ribbon badge bg-danger">
                                    {`-${product.offer}%`}
                                  </div>
                                ) : null}
                                <div class="product-like">
                                    <Link to="#">
                                        <i class={product.islike ? 'mdi mdi-heart text-danger' : 'mdi mdi-heart-outline'}></i>
                                    </Link>
                                </div>
                                <img
                                  src={product.image}
                                  alt=""
                                  className="img-fluid mx-auto d-block"
                                />
                              </div>

                              <div className="text-center">

                              <p className="text-muted font-size-13">
                                  {product.extrades}
                                </p>
                                <h5 class="font-size-15">
                                  <Link
                                    to={
                                      "/ecommerce-product-detail/" + product.id
                                    }
                                    className="text-dark"
                                  >
                                    {product.name}{" "}
                                  </Link>
                                </h5>

                                <h5 className="mt-3 mb-0">
                                  <span className="text-muted me-2">
                                    <del>${product.oldprice}</del>
                                  </span>
                                  <b>${product.newprice}</b>
                                </h5>

                              </div>
                            </div>
                          </Col>
                        ))}
                    </Row>
                    <Row className="mt-4">
                      <Col sm="6">
                        <div>
                          <p className="mb-sm-0">Page 2 of 84</p>
                        </div>
                      </Col>
                      <Col sm="6">
                        <div className="float-sm-end">
                          <Pagination className="pagination pagination-rounded mb-sm-0">
                            <PaginationItem disabled={page === 1}>
                              <PaginationLink
                                previous
                                to="#"
                                onClick={() => this.handlePageClick(page - 1)}
                              />
                            </PaginationItem>
                            {map(Array(totalPage), (item, i) => (
                              <PaginationItem
                                active={i + 1 === page}
                                key={"_pagination_" + i}
                              >
                                <PaginationLink
                                  onClick={() => this.handlePageClick(i + 1)}
                                  to="#"
                                >
                                  {i + 1}
                                </PaginationLink>
                              </PaginationItem>
                            ))}
                            <PaginationItem disabled={page === totalPage}>
                              <PaginationLink
                                next
                                to="#"
                                onClick={() => this.handlePageClick(page + 1)}
                              />
                            </PaginationItem>
                          </Pagination>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
     )
    }
  }

EcommerceProducts.propTypes = {
  products: PropTypes.array,
  onGetProducts: PropTypes.func,
}

const mapStateToProps = state => ({
  products: state.Ecommerce.products,
})

const mapDispatchToProps = dispatch => ({
  onGetProducts: () => dispatch(getProducts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceProducts))