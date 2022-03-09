import React, { Component } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardBody } from 'reactstrap';

class CardHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <CardBody>
                    <UncontrolledDropdown className="float-end">
                        <DropdownToggle tag="i" style={{ cursor: "pointer" }} className="arrow-none">
                            <i className="mdi mdi-dots-vertical m-0 text-muted font-size-20"></i>
                        </DropdownToggle >
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem>Edit</DropdownItem>
                            <DropdownItem>Delete</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="mb-0">{this.props.columnsubtitle}</p>
                </CardBody>
            </React.Fragment>
        );
    }
}

export default CardHeader;