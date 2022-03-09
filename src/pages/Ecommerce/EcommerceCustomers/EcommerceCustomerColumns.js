import React from "react"
import { Link } from "react-router-dom"

const EcommerceCustomerColumns = () => [
  {
    dataField: "username",
    text: "Customer",
    sort: true,
  },
  {
    text: "Email",
    dataField: "email",
    sort: true,
    formatter: (cellContent, row) => (
      <>
        <p className="mb-0">{row.email}</p>
      </>
    ),
  },
  {
    text: "Phone",
    dataField: "phone",
    sort: true,
  },
  {
    text: "Wallet Balance",
    dataField: "walletBalance",
    sort: true,
  },
  {
    dataField: "joiningDate",
    text: "Join Date",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: () => (
      <>
        <Link to="#" className="me-3 text-primary"><i className="mdi mdi-pencil font-size-18"></i></Link>
        <Link to="#" className="text-danger"><i className="mdi mdi-trash-can font-size-18"></i></Link>
      </>
    ),
  },
]

export default EcommerceCustomerColumns
