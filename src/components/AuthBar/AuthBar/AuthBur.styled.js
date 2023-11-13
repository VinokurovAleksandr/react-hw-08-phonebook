import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`

`;

export const AuthNavLink = styled(NavLink)`
     display: inline-block;
     text-decoration: none;
     padding: 12px;
     font-weight: 700px;
    color: #2A363B;


    &.active {
        color: white;
    }

    &:hover {
         color: white;   
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