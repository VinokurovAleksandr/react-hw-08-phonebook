import React from 'react'; 
import style from './contactList.module.css'
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import contactsActions from '../redux/contacts-actions/contacts-actions';
import { getContacts, deleteContact } from '../redux/contactsSlise';
// import {deleteContact} from '../redux/contactsSlise'
import {getFilter} from '../redux/filterSlise';

const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    // const OnDeleteContacts = id => dispatch(deleteContact(id));


const visibleCont = contacts.filter(contact => {
    if (typeof contact.name === 'string') {
        const normalizedName = contact.name.toLowerCase();
        return normalizedName.includes(filter.toLowerCase()) ||
            contact.number.includes(filter);
    }
    return false; 
});

//       const visibleCont = contacts?.filter(
//     contact =>
//       contact?.name?.toLowerCase().includes(filter.toLowerCase()) ||
//       contact?.number?.includes(filter)
//   );

//       const visibleCont = () => {
//       const normalizedContacts = filter.toLowerCase();
      
//       return contacts.filter(contact =>
//           contact.name &&
//           typeof contact.name === 'string'
//           && contact.name.toLowerCase().includes(normalizedContacts))

//     // return contacts.filter(contact =>
//     //   contact.name.toLowerCase().includes(normalizedContacts))
//   };



    return (
        <ul
        className={style.list}>
            {visibleCont.map(
                ({ name, id, number }) => (
                     <li
                        className={style.item}
                        key={id}>
                    <p>
                        {name}: {number}
                    </p>
                        {/* <button className='btn' onClick={() => deleteContacts(id)}>delete</button> */}
                        <button
                            className='btn'
                            name='delete'
                            onClick={() => dispatch(deleteContact(id))}>
                            delete
                        </button>
                    </li>
                )
                   
            )}
        </ul>
    )
};



//   const visibleContacts = (contacts, filter) => {
//       const normalizedContacts = filter.toLowerCase();
      
//       return contacts.filter(contact =>
//           contact.name &&
//           typeof contact.name === 'string'
//           && contact.name.toLowerCase().includes(normalizedContacts))

//     // return contacts.filter(contact =>
//     //   contact.name.toLowerCase().includes(normalizedContacts))
//   };




// const mapStateToProps = state => {
//     const { filter, items } = state.contacts;
//     const visibleCont = visibleContacts(items, filter);

//     return {
//         visibleCont: visibleCont,
//     }
// };
// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//     contacts: visibleContacts(items, filter)
// });

// const mapStateToProps = state => {
//     const { filter, items } = state.contacts;
//     const visibleCont = visibleContacts(items, filter); // Використовуємо вашу логіку фільтрації тут

//     return {
//         visibleCont: visibleCont,
//     };
// };

// const mapDispatchToProps = dispatch => ({
   
//     deleteContacts: id => dispatch(contactsActions.deleteContacts(id)),

// });





export default ContactList;

ContactList.propType = {
    visibleCont: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ),
    deliteContacts: PropTypes.func.isRequired,
};