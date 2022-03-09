import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//i18n
import { withNamespaces } from "react-i18next";

import Avatar from 'react-avatar';
// import { Link } from 'react-router-dom';

class ProfileMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {

        let username = "Logado";
        let nomeCompleto = '';
        let avatar = '';
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            username = obj.nome.split(' ')[0];
            nomeCompleto = obj.nome;
            avatar = obj.avatar;

        }

        return (
            <React.Fragment>
                <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block user-dropdown">
                    <DropdownToggle tag="button" className="btn header-item waves-effect" id="page-header-user-dropdown">
                        <Avatar className="rounded-circle header-profile-user me-3" name={nomeCompleto} src={avatar} size="50" round={true} maxInitials={2}/>
                        {/* <img className="rounded-circle header-profile-user me-1" src={avatar2} alt="Header Avatar" /> */}
                        <span className="d-none d-xl-inline-block ms-1 text-transform">{username}</span>
                        <i className="mdi mdi-chevron-down d-none ms-1 d-xl-inline-block"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                        {/* <DropdownItem><Link to="/perfil"><i className="ri-user-line align-middle me-1"></i> Perfil</Link></DropdownItem> */}
                        {/* <DropdownItem href="#"><i className="ri-wallet-2-line align-middle me-1"></i> {this.props.t('My Wallet')}</DropdownItem>
                        <DropdownItem className="d-block" href="#"><span className="badge badge-success float-end mt-1">11</span><i className="ri-settings-2-line align-middle me-1"></i> {this.props.t('Settings')}</DropdownItem>
                        <DropdownItem href="#"><i className="ri-lock-unlock-line align-middle me-1"></i> {this.props.t('Lock screen')}</DropdownItem> */}
                        {/* <DropdownItem divider /> */}
                        <DropdownItem className="text-danger" href="/logout"><i className="ri-shut-down-line align-middle me-1 text-danger"></i> Sair</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default withNamespaces()(ProfileMenu);
