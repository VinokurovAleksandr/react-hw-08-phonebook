import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  LoginForm,
  LoginLabel,
  LoginContainer,
  LoginInput,
  LoginBtn,
  LoginTitle,
} from './LoginView.styled';

import {login} from '../../redux/auth/auth-operation';




export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(login({ email, password }));
    setEmail('')
    setPassword('')
  };



    return (
           <LoginContainer>
        <LoginTitle>Страница логина</LoginTitle>

        <LoginForm
          onSubmit={handleSubmit}
          
          autoComplete="off"
        >
          <LoginLabel >
            Почта
            <LoginInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </LoginLabel>

          <LoginLabel >
            Пароль
            <LoginInput
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </LoginLabel>

          <LoginBtn type="submit">Войти</LoginBtn>
        </LoginForm>
      </LoginContainer>
    )
    
};

