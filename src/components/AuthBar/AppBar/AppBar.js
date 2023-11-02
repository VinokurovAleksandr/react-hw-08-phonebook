import { Navigation } from '../Navigation/Navigation';
import {AuthNav} from '../AuthBar/AuthBar'
import { HeaderContainer } from './AppBar.styled';
import {UserMenu} from '../UserMenu/UserMenu';

export const AppBar = () => {

    return (
    <HeaderContainer>
            <Navigation />
            <AuthNav />
             <UserMenu/>
            
    </HeaderContainer>

    )
};


