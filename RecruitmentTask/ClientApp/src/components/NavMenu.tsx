import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './NavMenu.css';

const NavMenu: FC = () => {
    
    const [collapsed, setCollapsed] = useState( true );
    
    const toggleNavbar = () => {
        setCollapsed( !collapsed );
    };
    
    return (
        <header>
            <Navbar
                className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
                light
            >
                <Container>
                    <NavbarBrand tag={ Link } to="/">
                        RecruitmentTask
                    </NavbarBrand>
                    <NavbarToggler onClick={ toggleNavbar } className="mr-2"/>
                    <Collapse
                        className="d-sm-inline-flex flex-sm-row-reverse"
                        isOpen={ !collapsed }
                        navbar
                    >
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={ Link } className="text-dark" to="/">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={ Link } className="text-dark" to="/weather">
                                    Weather
                                </NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavMenu;
