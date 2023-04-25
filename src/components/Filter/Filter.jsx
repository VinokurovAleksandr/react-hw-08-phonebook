import React from 'react';
import style from './style.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label
            className={style.find_contacts}
        type='name'
        value={value}
        onChange={onChange}
    >Find contacts by number
        <input />
    </label>  
    )
 
};

export default Filter;



