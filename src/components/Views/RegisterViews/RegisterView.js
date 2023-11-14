import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import {
  RegisterContainer,
  RegisterTitle,

} from './RegisterViews.styled';

import {register} from '../../redux/auth/auth-operation';


 const RegisterView = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value)
      case 'email':
        return setEmail(value)
      case 'password':
        return setPassword(value)
      default:
        return;
    }
  };


    const handleSubmit = e => {
      e.preventDefault();

      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
    };



   return (
     <>
       <RegisterTitle>Registration form</RegisterTitle>
    <RegisterContainer>
      
         
          <Form
        onSubmit={handleSubmit}
        autoComplete="off">
      <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            type="text"
            placeholder="Enter name" 
            name="name"
            value={name}
            onChange={handleChange}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email" 
            name="email"
            value={email}
            onChange={handleChange}
            />
              <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password" 
            name="password"
            value={password}
            onChange={handleChange}
            />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </RegisterContainer>
     </>

  );

};

export default RegisterView;
