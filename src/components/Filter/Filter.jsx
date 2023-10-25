import React from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {setFilter } from '../redux/filterSlise';
import {selectFilter} from '../redux/selectors'

export default function Filter() {
    
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const onChange = e => {
        dispatch(setFilter(e.target.value.trim()))
    };

    return (
        <label
        className={style.find_contacts}
        type='name'
        value={filter}
        onChange={onChange}
        >Find contacts by name
        <input className={style.filter_input} />
    </label>  
    )
};
