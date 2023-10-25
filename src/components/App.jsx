import React from "react";

import style from './style.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";


export default function App ()  {
  return (
      <div className={style.phonebook}>
         <h2>
          Phonebook
        </h2>
        <ContactForm />
        
            <div>
          <h2 className={style.name}>Contacts</h2>
          <Filter  />
          <ContactList
          />
      </div>
         </div>
    )
  };
