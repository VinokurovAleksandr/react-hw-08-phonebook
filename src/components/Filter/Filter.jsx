import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../redux/contacts-actions/contacts-actions'

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

const mapStateToProps = (state) => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

