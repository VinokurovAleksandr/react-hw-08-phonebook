import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setFilter } from '../redux/filterSlise';
import { selectFilter } from '../redux/selectors';
import {
    FilterContainer,
    FindContacts,
    FilterInput
} from './Filter.styled';

export default function Filter() {
    
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const onChange = e => {
        dispatch(setFilter(e.target.value.trim()))
    };

    return (
        <FilterContainer>
        <FindContacts
            type='name'
            value={filter}
            onChange={onChange}
            >Find contacts by name
            <FilterInput  />
        </FindContacts> 
        </FilterContainer>      
    )
};
