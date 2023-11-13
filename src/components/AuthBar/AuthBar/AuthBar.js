import React from 'react';
import {AuthNavContainer, AuthNavLink} from './AuthBur.styled';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const AuthNav = () => (
  <AuthNavContainer>
    <AuthNavLink
      to="/register"
      // exact

    >
      Registration
    </AuthNavLink>
    <AuthNavLink
      to="/login"
      // exact
    >
      Log in
    </AuthNavLink>
  </AuthNavContainer>
); 

