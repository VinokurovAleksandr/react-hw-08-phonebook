import React from 'react'; 
import style from './contactList.module.css'
import PropTypes from 'prop-types';

const ContactList = ({ visibleCont, deliteContacts }) => {
   
    return (
        <ul
        className={style.list}>
            {visibleCont.map(
                ({ name,
                    id,
                    number }) => <li
                        className={style.item}
                        key={id}><p>
                        {name}: {number}
                    </p>
                        <button className='btn' onClick={() => deliteContacts(id)}>delete</button>
                    </li>)}
            
        </ul>
    )


};

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