import { useSelector } from "react-redux";
import { Route, Navigate, Routes } from "react-router-dom";
import {authSelectors} from '../redux/auth';


function PrivateRoute ({  component: Component, redirectTo = '/' }) {
     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
     const refresh = useSelector(authSelectors.getRefreshCurrentUser)
     const shouldRedirect = !isLoggedIn && !refresh;
    
     return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
          
         
    
};


export default PrivateRoute;