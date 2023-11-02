import React, {useState  } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
  RegisterContainer,
  RegisterForm,
  Registerlabel,
  RegisterBtn,
  RegisterTitle,
  RegisterInput
} from './RegisterViews.styled';

// import { authOperations } from '../redux/auth';
import {register} from '../../redux/auth/auth-operation'


export const RegisterView = () => {

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
    <RegisterContainer>
      <RegisterTitle>Страница регистрации</RegisterTitle>

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
      </RegisterForm>
    </RegisterContainer>
  );

};

// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);