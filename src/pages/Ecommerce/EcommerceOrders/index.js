import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { isEmpty, size } from "lodash"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"

import * as moment from 'moment';

import { Button, Card, CardBody, Col, Container, Row} from "reactstrap"

import EcommerceOrderColumns from "./EcommerceOrderColumns"

//Import Breadcrumb
import Breadcrumbs from '../../../components/Common/Breadcrumb';

import {
  getOrders
} from "../../../store/actions"

class EcommerceOrders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewmodal: false,
      modal: false,
      orders: [],
      breadcrumbItems : [
        { title : "Ecommerce", link : "#" },
        { title : "Orders", link : "#" },
    ],
    }

    this.handleOrderClick = this.handleOrderClick.bind(this)
    this.toggle = this.toggle.bind(this)
    this.handleValidOrderSubmit = this.handleValidOrderSubmit.bind(this)
    this.handleOrderClicks = this.handleOrderClicks.bind(this)
    this.toLowerCase1 = this.toLowerCase1.bind(this)
  }

  toLowerCase1(str) {
      return str.toLowerCase();
  }

  componentDidMount() {

    const { orders, onGetOrders } = this.props

    if (orders && !orders.length) {
      onGetOrders()
    }
    this.setState({ orders })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { orders } = this.props
    if (!isEmpty(orders) && size(prevProps.orders) !== size(orders)) {
      this.setState({ orders: {}, isEdit: false })
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  handleOrderClicks = () => {
    this.setState({ orders: '', isEdit: false })
    this.toggle()
  }

  // eslint-disable-next-line no-unused-vars
  handleTableChange = (type, { page, searchText }) => {
    const { orders } = this.props
    this.setState({
      orders: orders.filter(order =>
        Object.keys(order).some(
          key =>
            typeof order[key] === "string" &&
            order[key].toLowerCase().includes(searchText.toLowerCase())
        )
      ),
    })
  }

  toggleViewModal = () => {
    this.setState(prevState => ({
      viewmodal: !prevState.viewmodal,
    }))
  }

  /* Insert,Update Delete data */

  handleDeleteOrder = (order) => {
    const { onDeleteOrder } = this.props
    onDeleteOrder(order)
  }

  handleOrderClick = arg => {
    
    const order = arg

    this.setState({
      orders: {
        id: order.id,
        orderId: order.orderId,
        billingName: order.billingName,
        orderdate: order.orderdate,
        total: order.total,
        paymentStatus: order.paymentStatus,
        paymentMethod: order.paymentMethod,
        badgeclass: order.badgeclass
      },
      isEdit: true,
    })

    this.toggle()

  }

  /**
   * Handling submit Order on Order form
   */
  handleValidOrderSubmit = (e, values) => {
    const { onAddNewOrder, onUpdateOrder } = this.props
    const { isEdit, orders } = this.state

    if (isEdit) {
      const updateOrder = {
        id: orders.id,
        orderId: values.orderId,
        billingName: values.billingName,
        orderdate: values.orderdate,
        total: values.total,
        paymentStatus: values.paymentStatus,
        paymentMethod: values.paymentMethod,
        badgeclass: values.badgeclass
      }

      // update Order
      onUpdateOrder(updateOrder)
    } else {

      const newOrder = {
        id: Math.floor(Math.random() * (30 - 20)) + 20,
        orderId: values["orderId"],
        billingName: values["billingName"],
        orderdate: values["orderdate"],
        total: values["total"],
        paymentStatus: values["paymentStatus"],
        paymentMethod: values["paymentMethod"],
        badgeclass: values['badgeclass']
      }
      // save new Order
      onAddNewOrder(newOrder)
    }
    this.setState({ selectedOrder: null })
    this.toggle()
  }

  handleValidDate = (date) => {
    const date1 = moment(new Date(date)).format('DD MMM Y');
    return date1;
  }

  render() {
    const { orders } = this.props

    const { SearchBar } = Search

    //pagination customization
    const pageOptions = {
      sizePerPage: 10,
      totalSize: 15, // replace later with size(Order),
      custom: true,
    }

    const defaultSorted = [{
      dataField: 'orderId',
      order: 'desc'
    }];

    const selectRow = {
      mode: 'checkbox',
    };

    return (
      <React.Fragment>
        <div className="page-content">
          
          <Container fluid>
          <Breadcrumbs title="Orders" breadcrumbItems={this.state.breadcrumbItems} />
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      data={orders}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={orders}
                          columns={EcommerceOrderColumns()}
                          bootstrap4
                          search
                        >
                          
                          {toolkitProps => (
                            <React.Fragment>
                              
                              <Row className="mb-2">
                                <Col sm="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">
                                    <Button
                                      type="button"
                                      color="success"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.handleOrderClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" />{" "}
                                      Add New Order
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
                              <div className="table-responsive">

                                <BootstrapTable
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                  responsive
                                  bordered={false}
                                  striped={false}
                                  defaultSorted={defaultSorted}
                                  selectRow={selectRow}
                                  classes={
                                    "table align-middle table-nowrap table-check"
                                  }
                                  headerWrapperClasses={"table-light"}
                                />
                                
                              </div>
                              <div className="pagination pagination-rounded justify-content-end mb-2">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </div>
                            </React.Fragment>
                          )}
                        </ToolkitProvider>
                      )}
                    </PaginationProvider>
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

EcommerceOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func
}

const mapStateToProps = state => ({
  orders: state.Ecommerce.orders,
})

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getOrders())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceOrders))