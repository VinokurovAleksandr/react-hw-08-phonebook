import React from 'react'; 
import style from './contactList.module.css'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts-actions/contacts-actions'

const ContactList = ({ visibleCont, deleteContacts }) => {
   
    return (
        <ul
        className={style.list}>
            {visibleCont.map(
                ({ name,
                    id,
                    number }) =>
                    <li
                        className={style.item}
                        key={id}>
                    <p>
                        {name}: {number}
                    </p>
                        {/* <button className='btn' onClick={() => deleteContacts(id)}>delete</button> */}
                        <button className='btn' onClick={() => deleteContacts(id)}>delete</button>
                    </li>)}
        </ul>
    )
};



  const visibleContacts = (contacts, filter) => {
    const normalizedContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts))
  };
  



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

const mapStateToProps = state => {
    const { filter, items } = state.contacts;
    const visibleCont = visibleContacts(items, filter); // Використовуємо вашу логіку фільтрації тут

    return {
        visibleCont: visibleCont,
    };
};

const mapDispatchToProps = dispatch => ({
    deleteContacts: id => dispatch(contactsActions.deleteContacts(id)),
    // visibleCont: () => null,
});





export default connect(mapStateToProps,mapDispatchToProps )(ContactList);

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