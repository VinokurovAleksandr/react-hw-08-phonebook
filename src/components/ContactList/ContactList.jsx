import React from 'react'; 
import style from './contactList.module.css'

const ContactList = ({ visibleCont,deliteContacts }) => {
    return (
        <ul>
            {visibleCont.map(
                ({ name,
                    id,
                    number }) => <li key={id}><p>
                        {name}: {number}
                    </p>
                        <button onClick={() => deliteContacts(id)}>delete</button>
                    </li>)}
            
        </ul>
    )


};

export default ContactList;
