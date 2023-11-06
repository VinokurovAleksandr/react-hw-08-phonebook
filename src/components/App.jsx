import React, { useEffect } from "react";
import { lazy, Suspense } from 'react';
import { Routes, Route, } from "react-router-dom";

import style from './style.module.css';

import HomeView from "./Views/HomeView";
import LoginView from "./Views/LoginViews/LoginView";
import { Layout } from './Layout/Layout';
// import Container from '../components/Container/Container';
import { RegisterView } from './Views/RegisterViews/RegisterView';
import { ContactsView } from './Views/ContactsView/ContactsView';
import { useDispatch } from "react-redux";

import {fetchCurrentUser} from './redux/auth/auth-operation';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);

  return (
    <>
      {/* <AppBar /> */}
      {/* <Navigation/> */}
          <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<HomeView/>} />
              <Route path="/login" element={<LoginView/>}/>
              <Route path="/register" element={<RegisterView />} />
              <Route path="/contacts" element={ <ContactsView/>} /> 
          </Route>
       
            {/* <Route path="/register"  />
            <Route path="/login" component={<LoginView/>}/>
            <Route path="/contacts"/> */}
        </Routes>
      
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
