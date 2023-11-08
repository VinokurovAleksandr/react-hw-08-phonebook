import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {authSelectors} from '../redux/auth';


function PrivateRoute ({  component: Component, redirectTo = '/' }) {
     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
     const refreshUser = useSelector(authSelectors.getRefreshCurrentUser);

     const shouldRedirect = !isLoggedIn && !refreshUser;
    
     return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
          
         
    
};


export default PrivateRoute;