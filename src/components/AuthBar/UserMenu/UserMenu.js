import { useDispatch, useSelector } from 'react-redux';
import { Container, Avatar, Name, Btn } from './UserMenu.stayled';
// import { authSelectors, authOperations } from '../../redux/auth';
import { authSelectors } from '../../redux/auth';
import {logOut} from '../../redux/auth/auth-operation';


export const UserMenu = () => {
    
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName)

    return (
    <Container>
            <Avatar />
            <Name> Welcome, {name} </Name>
            <Btn type='button' onClick={() => dispatch(logOut())} >
                Logout
            </Btn>
    </Container>
    )
  
};