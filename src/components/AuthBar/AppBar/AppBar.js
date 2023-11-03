import { Navigation } from '../Navigation/Navigation';
import {AuthNav} from '../AuthBar/AuthBar'
import { HeaderContainer } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import {authSelectors} from '../../redux/auth';
import { useSelector } from 'react-redux';


export const AppBar = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
    <HeaderContainer>
            <Navigation />
            {isLoggedIn ? <UserMenu/> :  <AuthNav />}
           
             
            
    </HeaderContainer>

    )
};


