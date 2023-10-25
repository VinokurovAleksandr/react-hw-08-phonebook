import { useEffect } from 'react'; 

import { useSelector, useDispatch } from 'react-redux';

import {selectContacts, selectFilter} from '../redux/selectors'
import {deleteContact, fetchContacts} from '../redux/operations';
import style from './contactList.module.css';



const ContactList = () => {

    const contacts = useSelector(selectContacts);
    const getFilter = useSelector(selectFilter);
    
    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    

      const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(getFilter.toLowerCase())
  );
 

    return (
        <>
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
                        <button
                            className={style.btn}
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

export default ContactList;
