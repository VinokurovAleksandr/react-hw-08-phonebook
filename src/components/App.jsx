import React, { useEffect } from "react";
import { lazy, Suspense } from 'react';
import { Routes, Route, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import style from './style.module.css';

// import HomeView from "./Views/HomeView";
// import LoginView from "./Views/LoginViews/LoginView";
// import { Layout } from './Layout/Layout';
// import Container from '../components/Container/Container';
// import { RegisterView } from './Views/RegisterViews/RegisterView';
// import { ContactsView } from './Views/ContactsView/ContactsView';
import { useDispatch } from "react-redux";

import {refreshCurrentUser} from './redux/auth/auth-operation';

const Layout = lazy(() => import('./Layout/Layout'));
const RegisterView = lazy(() => import('./Views/RegisterViews/RegisterView'));
const ContactsView = lazy(() => import('./Views/ContactsView/ContactsView'));
const HomeView = lazy(() => import('./Views/HomeView'));
const LoginView = lazy(() => import('./Views/LoginViews/LoginView'));
const PrivateRoute = lazy(() => import('./AuthBar/PrivateRoute'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch]);

  return (
    <>
     
      <Suspense fallback={<p>... Loading </p>}>
      <Routes>
        
          <Route path="/" element={<Layout/>}>
              <Route index element={<HomeView/>} />
              <Route path="/login" element={<LoginView/>}/>
              <Route path="/register" element={<RegisterView />} />
            {/* <Route path="/contacts" element={<ContactsView />} />  */}
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<ContactsView />} 
                />} /> 
            <Route path="*" element={<HomeView />}/>
          
          </Route>
           </Routes>
             </Suspense>
      
     </>
         

    
      
   
    
   
    
     
      

         
      // {/* <div className={style.phonebook}>
      //    <h2>
      //     Phonebook
      //   </h2>
      //   <ContactForm />
        
      //       <div>
      //     <h2 className={style.name}>Contacts</h2>
      //     <Filter  />
      //     <ContactList
      //     />
         
      // </div>
      //    </div> */}
    
  
      
    )
  };
