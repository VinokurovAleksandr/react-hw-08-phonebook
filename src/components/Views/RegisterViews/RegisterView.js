import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import {
  RegisterContainer,
  RegisterForm,
  Registerlabel,
  RegisterBtn,
  RegisterTitle,
  RegisterInput
} from './RegisterViews.styled';

// import { authOperations } from '../redux/auth';
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
      <RegisterTitle>Страница регистрации</RegisterTitle>
    <RegisterContainer>
      

      <Form
        onSubmit={handleSubmit}
        autoComplete="off">
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name" 
            name="name"
            value={name}
            onChange={handleChange}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email" 
            name="email"
            value={email}
            onChange={handleChange}
            />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
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
      
      {/* ------------------------------------------------- */}
      {/* <RegisterTitle>Страница регистрации</RegisterTitle>

      <RegisterForm
          onSubmit={handleSubmit}
         
        autoComplete="off"
      >
        <Registerlabel>
          Имя
          <RegisterInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </Registerlabel>

        <Registerlabel >
          Почта
          <RegisterInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Registerlabel>

        <Registerlabel>
          Пароль
          <RegisterInput
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Registerlabel>

        <RegisterBtn type="submit">Зарегистрироваться</RegisterBtn>
      </RegisterForm> */}
    </RegisterContainer>
     </>
   
  );

};

export default RegisterView;

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);