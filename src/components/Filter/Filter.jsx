import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    
    return (
        <label
            className={style.find_contacts}
        type='name'
        value={value}
        onChange={onChange}
    >Find contacts by name2
        <input />
    </label>  
    )

 
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

