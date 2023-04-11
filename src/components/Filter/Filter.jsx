import React from 'react';


const Filter = ({ value, onChange }) => {
    return (
         <label type='name'
        value={value}
        onChange={onChange}
    >Find contacts by number
        <input />
    </label>  
    )
 
};

export default Filter;



