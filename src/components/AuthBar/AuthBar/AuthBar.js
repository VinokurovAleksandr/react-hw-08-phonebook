import React from 'react';
import {AuthNavContainer, AuthNavLink} from './AuthBur.styled';


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

