import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavContainer = styled.nav`

`;
export const LinkElem = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2A363B;
    hover

       &.active {
        color: white;
    }

        &:hover, :focus {
            color: white;
        }
`;

