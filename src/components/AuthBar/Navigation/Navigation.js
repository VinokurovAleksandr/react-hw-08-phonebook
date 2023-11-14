import React from 'react';
import { NavContainer, LinkElem } from './Navigation.styled';
import {authSelectors} from '../../redux/auth/'
import { useSelector } from 'react-redux';
;

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

    
)};
