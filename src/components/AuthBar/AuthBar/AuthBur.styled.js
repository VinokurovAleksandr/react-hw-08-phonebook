import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`

`;

export const AuthNavLink = styled(NavLink)`
     display: inline-block;
     text-decoration: none;
     padding: 12px;
     fontWeight: 700;
    color: #2A363B;


    &.active {
        color: #E84A5F;
    }
`;



// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };