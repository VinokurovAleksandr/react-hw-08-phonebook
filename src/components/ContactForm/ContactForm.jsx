import React, { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';

import style from '../ContactForm/style.module.css';
import {selectContacts} from '../redux/selectors'
import {addContact} from '../redux/operations';

import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';




export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  
   const handleSubmit = e => {
     e.preventDefault();

     const contact = { id: nanoid(), name, number };
     
     if (contacts.find(({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase())) {
       Notiflix.Notify.warning(
         `Conatct ${name} is already in your cotacts list`
       );
       return;
    }

     dispatch(addContact(
       contact
     ));

        resetForm();
    };

  const resetForm = () => {
    setName('');
    setNumber('');
    };
  
  const handleChangeAddContacts = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;

      default:
        return;
    }
  };
  
  
  return ( 
             <form
          className={style.form_phonebook}
          onSubmit={handleSubmit}
        >
          <label
            className={style.label_name}
            htmlFor={name}
          >
        <input
          className={style.input_style}
            type="text"
              value={name}
              onChange={handleChangeAddContacts}
              // id={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
           placeholder=" Name "
          />
          </label>
            <label
              className={style.label_name}
          htmlFor={number}
          >
           
        <input
          className={style.input_style}
              type="tel"
              // id={number}
              value={number}
              onChange={handleChangeAddContacts}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder=" Number "
            />
          </label>
          
          <button
            className={style.formBtn}
            type="submit">Add contact</button>  
        </form>
         );
  
};
