import ContactForm  from '../../ContactForm/ContactForm';
import  Filter  from '../../Filter/Filter';
import  ContactList  from '../../ContactList/ContactList';
import {ContactsContainer, PhonebookTitle, ContactsTitle, FilterContainer} from './ContactsView.styled';

 const ContactsView = () => {

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

export default ContactsView;
