import React, { Component } from "react";
import { nanoid } from 'nanoid';

import style from './style.module.css';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';



class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  FormInputId = nanoid();

  deliteContacts = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };
  
 

  handleChangeContacts = e => {
    e.preventDefault();

    this.setState({ filter: e.target.value });
  };

  addContact = ({ name, number }) => {
    const blockAddContact = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (blockAddContact) {
       return alert(`${name} is alredy in contacts`)
     }

    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }))
  };

  visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedContacts = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts))
  };
  

  // changeFilter = (e) => {
  //   this.setState({
  //     filter: e.currentTarget.value
  //   });

  // }

  render() {
    const visibleCont = this.visibleContacts();

    // const filterContacts = this.state.contacts.filter(contact =>
    //   contact.name.toLocaleLowerCase().includes(normalizedContacts));
    

    return (
      <div className={style.phonebook}>
         <h2>
          Phonebook
        </h2>
        <ContactForm onSubmit={this.addContact} />
  
            <div>
          <h2>Contacts</h2>
          <Filter value={this.state.filter} onChange={this.handleChangeContacts} />
          {/* <label type='text'
            value={this.filter}
            onChange={this.handleChangeContacts}
          >Find contacts by number
          <input/>
          </label> */}
          <ul>
            {visibleCont.map(
              ({ name,
                id,
                number }) => <li key={id}><p>
              {name}: {number}
            </p>
              <button onClick={() => this.deliteContacts(id)}>delete</button>
            </li> )}
            
          </ul>
      </div>
         </div>
    )
  }
};

export default App;