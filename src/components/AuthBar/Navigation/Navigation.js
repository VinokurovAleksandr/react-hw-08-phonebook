import React from 'react';
// import { NavLink } from 'react-router-dom';
import {NavContainer, LinkElem} from './Navigation.styled'



export const Navigation = () => (
  <NavContainer>
    <LinkElem to="/" exact >
      Главная
    </LinkElem>

    <LinkElem
      to="/contacts"
      exact
    //   style={styles.link}
    //   activeStyle={styles.activeLink}
    >
      Заметки
    </LinkElem>
  </NavContainer>
);
