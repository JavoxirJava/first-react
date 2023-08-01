import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
     Collapse,
     Navbar,
     NavbarToggler,
     NavbarBrand,
     Nav,
     NavItem,
     Container,
} from 'reactstrap';
import "./nav.css"

function UserNav() {
     const [isOpen, setIsOpen] = useState(false);

     const toggle = () => setIsOpen(!isOpen);

     return (
          <Container>
               <Navbar expand="sm">
                    <NavbarBrand href="/">Front end 1</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                         <Nav className="me-auto navbar-links" navbar>
                              <NavItem>
                                   <Link to="/category">Category</Link>
                              </NavItem>
                              <NavItem>
                                   <Link to="/product">Product</Link>
                              </NavItem>
                         </Nav>
                         
                    </Collapse>
               </Navbar>
          </Container>
     )
}
export default UserNav;