import { useEffect } from 'react'; 
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import {selectContacts, selectFilter} from '../redux/selectors'
import {deleteContact, fetchContacts} from '../redux/operations';
import style from './contactList.module.css'


const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const getFilter = useSelector(selectFilter);
    
    const dispatch = useDispatch();
   

  
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    

    //  const OnDeleteContacts = (id) => dispatch(deleteContact(id));

// const visibleCont = contacts.filter(contact => {
//     if (typeof contact.name === 'string') {
//         const normalizedName = contact.name.toLowerCase();
//         return normalizedName.includes(filter) ||
//             contact.number.includes(filter);
//     }
//     return false; 
// });

//       const visibleCont = contacts?.filter(
//     contact =>
//       contact?.name?.toLowerCase().includes(filter.toLowerCase()) ||
//       contact?.number?.includes(filter)
//   );

    //   const visibleContacts = () => {
    //   const normalizedContacts = onChangeFilter.toLowerCase();
      
    //   return items.filter(item =>
    //       item.name &&
    //       typeof item.name === 'string'
    //       && item.name.toLowerCase().includes(normalizedContacts))

    // return contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedContacts))
    // };
    
    // const visibleContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(getFilter.toLowerCase())
    // );

      const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(getFilter.toLowerCase())
  );
 
        

    //     if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return "Error: " + error;
    // }


    return (
        <>
            {/* {contacts.isLoading && <b> Loading...</b>}
            {contacts.error && <b>{contacts.error}</b>} */}
            <div>
                  <ul
        className={style.list}>
            {visibleContacts.map(
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
                            onClick={() => dispatch(deleteContact(id)) }>
                            delete
                        </button>
                    </li>

                )
                
            )}
        </ul>
            </div>          
        </>
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

// ContactList.propType = {
//     visibleCont: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         }).isRequired,
//     ),
//     deliteContacts: PropTypes.func.isRequired,
// };