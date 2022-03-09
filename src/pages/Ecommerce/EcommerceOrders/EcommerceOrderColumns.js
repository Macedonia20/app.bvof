import React from "react"
import { Link } from "react-router-dom"
import { Badge } from "reactstrap"

const EcommerceOrderColumns = () => [
  {
    text: "id",
    dataField: "id",
    sort: true,
    hidden: true,
    formatter: (cellContent, row) => (
      <>
        {row.id}
      </>
    ),
  },
  {
    dataField: "orderId",
    text: "Order ID",
    sort: true,
    formatter: (cellContent, row) => (
      <Link to="#" className="text-body fw-bold">
        {row.orderid}
      </Link>
    ),
  },
  {
    dataField: "orderdate",
    text: "Date",
    sort: true,
    formatter: (cellContent, row) => (
      row.orderdate
    ),
  },
  {
    dataField: "billingname",
    text: "Billing Name",
    sort: true,
  },
  {
    dataField: "total",
    text: "Total",
    sort: true,
  },
  {
    dataField: "paymentStatus",
    text: "Payment Status",
    sort: true,
    formatter: (cellContent, row) => (
      <Badge
        className={"font-size-12 badge-soft-" + row.badge}
        color={row.badge}
        pill
      >
        {row.paymentStatus}
      </Badge>
    ),
  },
  {
    dataField: "invoice",
    isDummyField: true,
    text: "Invoice",
    formatter: (cellContent) => (
      <>
        <button className="btn btn-light btn-rounded">Invoice <i className="mdi mdi-download ms-2"></i></button>
      </>
    ),
  },
  {
    dataField: "action",
    isDummyField: true,
    text: "Action",
    formatter: (cellContent) => (
      <React.Fragment>
        <Link to="#" className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
        <Link to="#" className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
      </React.Fragment>
    ),
  },
]

export default EcommerceOrderColumns
