import PropTypes from 'prop-types'
import React from "react"
import { Card, Col, Row ,CardBody} from "reactstrap"
import { Link } from "react-router-dom"

const CardShop = props => {
  const { shop } = props

  return (
    <React.Fragment>
      <Col xl="3" sm="6">
        <Card>
          <CardBody>
          <div className="text-center">
              <img src={shop.img} alt="img-1" className="avatar-sm mt-2 mb-4" />
              <div className="flex-1">
                  <h5 className="text-truncate"><Link to={shop.profileLink} className="text-dark">{shop.name}</Link></h5>
                  <p className="text-muted">
                      <i className="mdi mdi-account me-1"></i> {shop.author}
                  </p>
              </div>
          </div>

          <hr className="my-4" />

          <Row className="text-center">
              <div className="col-6">
                  <p className="text-muted mb-2">Products</p>
                  <h5>{shop.product}</h5>
              </div>
              <div className="col-6">
                  <p className="text-muted mb-2">Wallet Balance</p>
                  <h5>${shop.balance}</h5>
              </div>
          </Row>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardShop.propTypes = {
  shop: PropTypes.object
}

export default CardShop
