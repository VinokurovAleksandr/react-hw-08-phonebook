import React, { useState } from "react";

import { connect, useDispatch } from 'react-redux';
import contactsActions from '.././redux/contacts-actions/contacts-actions';

import style from '../ContactForm/style.module.css';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  // const FormInputId = nanoid();
  
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
  
   const handleSubmit = e => {
     e.preventDefault();
     
     

        onSubmit({id: nanoid(), name, number})
        resetForm();
    };

  const resetForm = () => {
    setName('');
    setNumber('');
    };
  
  return ( 
             <form
          className={style.form_phonebook}
          onSubmit={handleSubmit}
        >
          <label
            className={style.label_name}
            htmlFor={name}
          >Name
            <input
            type="text"
              value={name}
              onChange={handleChangeAddContacts}
              id={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
            <label
              className={style.label_name}
          htmlFor={number}
          >
            Number
           <input
              type="tel"
              id={number}
              value={number}
              onChange={handleChangeAddContacts}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          
          <button
            className={style.formBtn}
            type="submit">Add contact</button>  
        </form>
         );
  
};


const mapDispatchToProps = dispatch => ({
 
  onSubmit: ( {name, number} ) => {
      const id = nanoid();
    const contact = { id, name, number };
    dispatch(contactsActions.addContacts(contact));
  }
});

export default connect(mapDispatchToProps)(ContactForm);


ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};