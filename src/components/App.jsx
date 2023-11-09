import React, { useEffect } from "react";
import { lazy, Suspense } from 'react';
import { Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { refreshCurrentUser } from './redux/auth/auth-operation';
import { useDispatch, useSelector } from "react-redux";

import style from './style.module.css';
import { authSelectors } from './redux/auth';
import GrowExample from './Loader/Loader';
// import HomeView from "./Views/HomeView";
// import LoginView from "./Views/LoginViews/LoginView";
// import { Layout } from './Layout/Layout';
// import Container from '../components/Container/Container';
// import { RegisterView } from './Views/RegisterViews/RegisterView';
// import { ContactsView } from './Views/ContactsView/ContactsView';




const Layout = lazy(() => import('./Layout/Layout'));
const RegisterView = lazy(() => import('./Views/RegisterViews/RegisterView'));
const ContactsView = lazy(() => import('./Views/ContactsView/ContactsView'));
const HomeView = lazy(() => import('./Views/HomeView'));
const LoginView = lazy(() => import('./Views/LoginViews/LoginView'));
const PrivateRoute = lazy(() => import('./AuthBar/PrivateRoute'));
const PublicRoute = lazy(() => import('./AuthBar/PublicRoute'));



export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(authSelectors.getRefreshCurrentUser);

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch]);

  return isRefreshingUser ? (
    <GrowExample />
  ) : (
              <Suspense fallback={<GrowExample/>}>
      <Routes>
        
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomeView />} />
               {/* <Route path="/login" element={<LoginView/>}/> */}
            <Route
              path="login"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  
                  component={<LoginView />} />} />
            
            <Route
              path="register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  component={<RegisterView />} />} />
           
            {/* <Route path="/register" element={<RegisterView />} /> */}
             {/* <Route path="/contacts" element={<ContactsView />} />  */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />} 
                />} /> 
            {/* <Route path="*" element={<Layout />}/> */}
          
          </Route>
           </Routes>
             </Suspense>
    )
  };
