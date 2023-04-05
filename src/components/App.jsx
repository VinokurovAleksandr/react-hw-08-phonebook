import React, { Component } from "react";
import style from './style.module.css';
// import { useId } from 'react';
import { nanoid } from 'nanoid';


class App extends Component {
  FormInputId = nanoid();

  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: '',
  }

  // deliteContacts = (contactId) => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }))
  // };
  
  handleChangeAddContacts = e => {
    const { name, number } = e.currentTarget;
    this.setState({[name]: number,});
  };

  handleChangeContacts = e => {
    e.preventDefault();

    this.setState({ filter: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
    
  }

  render() {
    
    
    return (
      <div className={style.phonebook}>
         <h2>
          Phonebook
        </h2>
        <form
          className={style.form_phonebook}
          onSubmit={this.handleSubmit}
        >
          <label
            className={style.label_name}
            htmlFor={this.FormInputId}
          >Name
            <input
            type="text"
              value={this.state.name}
              onChange={this.handleChangeAddContacts}
              id={this.FormInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
          <label
          htmlFor={this.FormInputId}
          >
            Number
           <input
              type="tel"
              id={this.FormInputId}
              value={this.state.number}
              onChange={this.handleChangeAddContacts}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          
          <button className={style.formBtn} type="button">Add contact</button>  
        </form>
            <div>
          <h2>Contacts</h2>
          <label type='text'
            value={this.filter}
            onChange={this.handleChangeContacts}
          >Find contacts by number
          <input/>
          </label>
          <ul>
            {this.state.contacts.map(({name, id ,number}) => <li key={id}><p>
              {name}: {number}
            </p>
              {/* <button onClick={() => this.deliteContacts(id)}>delete</button> */}
            </li> )}
            
          </ul>
      </div>
         </div>
  
      
    
    )
  }
};

export default App;