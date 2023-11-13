import { useEffect } from 'react'; 

import { useSelector, useDispatch } from 'react-redux';

import {selectContacts, selectFilter} from '../redux/selectors'
import {deleteContact, fetchContacts} from '../redux/operations';
import {
    Container,
    ContainList,
    ContainItem,
    ContainText,
    BtnList,

} from './ContainList.module';



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
   
            <Container>
                  <ContainList>
            {visibleContacts.map(
                ({ name, id, number }) => (
                     <ContainItem
                        key={id}>
                    <ContainText>
                        {name}: {number}
                    </ContainText>
                        <BtnList
                            name='delete'
                            onClick={() => dispatch(deleteContact(id)) }>
                            delete
                        </BtnList>
                    </ContainItem>
                )
            )}
        </ContainList>
            </Container>          
    )
};

export default ContactList;
