import React, { useState } from "react";
import style from '../ContactForm/style.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function ContactForm({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const FormInputId = nanoid();
  
  const handleChangeAddContacts = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;

      default:
        return;
    }
  };
  
   const handleSubmit = e => {
        e.preventDefault();

        onSubmit({id: nanoid(), name, number})
        resetForm();
    };

  const resetForm = () => {
    setName('');
    setNumber('');
    };
  
  return ( 
             <form
          className={style.form_phonebook}
          onSubmit={handleSubmit}
        >
          <label
            className={style.label_name}
            htmlFor={name}
          >Name
            <input
            type="text"
              value={name}
              onChange={handleChangeAddContacts}
              id={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          </label>
            <label
              className={style.label_name}
          htmlFor={number}
          >
            Number
           <input
              type="tel"
              id={number}
              value={number}
              onChange={handleChangeAddContacts}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          
          <button
            className={style.formBtn}
            type="submit">Add contact</button>  
        </form>
         );
  
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


// class ContactForm extends Component {
 
//     state = {
//         name: '',
//         number: '',
//     };

//     handleChangeAddContacts = e => {
//     const { name, value } = e.target;
//     this.setState({[name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();

//         const { onSubmit } = this.props;
//         onSubmit(this.state)
//         this.resetForm();
//     };

//     resetForm = () => {
//         this.setState(() => ({
//             name: '',
//             number: '',
//         }))
//     };
    
//     render() { 
//         return ( 
//              <form
//           className={style.form_phonebook}
//           onSubmit={this.handleSubmit}
//         >
//           <label
//             className={style.label_name}
//             htmlFor={this.FormInputId}
//           >Name
//             <input
//             type="text"
//               value={this.state.name}
//               onChange={this.handleChangeAddContacts}
//               id={this.FormInputId}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           </label>
//             <label
//               className={style.label_name}
//           htmlFor={this.FormInputId}
//           >
//             Number
//            <input
//               type="tel"
//               id={this.FormInputId}
//               value={this.state.number}
//               onChange={this.handleChangeAddContacts}
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
          
//           <button
//             className={style.formBtn}
//             type="submit">Add contact</button>  
//         </form>
//          );
//     }
// };
 
// export default ContactForm;
