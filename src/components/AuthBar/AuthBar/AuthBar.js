import React from 'react';
import {AuthNavContainer, AuthNavLink} from './AuthBur.styled';



export const AuthNav = () => (
  <AuthNavContainer>
    <AuthNavLink
      to="/register"
      // exact
    //   style={styles.link}
    //   activeStyle={styles.activeLink}
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

