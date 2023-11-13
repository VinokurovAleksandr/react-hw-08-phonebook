import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavContainer, LinkElem } from './Navigation.styled';
import {authSelectors} from '../../redux/auth/'
import { useSelector } from 'react-redux';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  return (
     <NavContainer>
     <LinkElem to="/"
      // exact
    >
      Home
    </LinkElem>

      {isLoggedIn &&   <LinkElem
      to="/contacts"
    >Contacts
      </LinkElem>} 
        

  </NavContainer>

    //      <>
    
    //   <Navbar bg="primary" data-bs-theme="dark">
    //     <Container>
    //       <Nav className="me-auto">
    //         <Nav.Link href="/" >Home</Nav.Link>
    //        {isLoggedIn &&  <Nav.Link href="contacts">Contacts</Nav.Link>}
    //         {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    //       </Nav>
    //     </Container>
    //   </Navbar>
    // </>
    
)};
