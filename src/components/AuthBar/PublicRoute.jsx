import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {authSelectors} from '../redux/auth';


function PublicRoute({
    // restricted = false,
    component: Component,
    redirectTo='/'
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // const refreshUser = useSelector(authSelectors.getRefreshCurrentUser);
    
    // const shouldPublicRedirect = isLoggedIn && restricted;

    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PublicRoute;