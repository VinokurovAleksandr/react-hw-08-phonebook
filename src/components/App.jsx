import React from "react";
import { lazy, Suspense } from 'react';
import { Routes, Route, Outlet } from "react-router-dom";

import style from './style.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";
import { UserMenu } from './AuthBar/UserMenu/UserMenu';
import {AppBar} from './AuthBar/AppBar/AppBar';
import HomeView from "./Views/HomeView";
import LoginView from "./Views/LoginView";
import { Layout } from './Layout/Layout';
import Container from '../components/Container/Container';
import {Navigation} from './AuthBar/Navigation/Navigation'


export default function App ()  {
  return (
    <>
      {/* <AppBar /> */}
      {/* <Navigation/> */}
          <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<HomeView/>} />
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
