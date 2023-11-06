import ContactForm  from '../../ContactForm/ContactForm';
import  Filter  from '../../Filter/Filter';
import  ContactList  from '../../ContactList/ContactList';
// import style from '../style.module.css';
import {ContactsContainer, PhonebookTitle, ContactsTitle, FilterContainer} from './ContactsView.styled';

export const ContactsView = () => {

    return (
        <>
            <ContactsContainer>
                <PhonebookTitle>
                    Phonebook
                </PhonebookTitle>
                <ContactForm />
        
                <FilterContainer>
                    <ContactsTitle>Contacts</ContactsTitle>
                    <Filter />
                    <ContactList
                    />
         
                </FilterContainer>
            </ContactsContainer>
        </>
      
    )
};

