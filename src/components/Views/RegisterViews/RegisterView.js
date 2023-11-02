import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  RegisterContainer,
  RegisterForm,
  Registerlabel,
  RegisterBtn,
  RegisterTitle,
  RegisterInput
} from './RegisterViews.styled';
// import { authOperations } from '../redux/auth';


export const RegisterView = () => {
  //   state = {
  //     name: '',
  //     email: '',
  //     password: '',
  //   };

  //   handleChange = ({ target: { name, value } }) => {
  //     this.setState({ [name]: value });
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();

  //     this.props.onRegister(this.state);

  //     this.setState({ name: '', email: '', password: '' });
  //   };



  return (
    <RegisterContainer>
      <RegisterTitle>Страница регистрации</RegisterTitle>

      <RegisterForm
        //   onSubmit={this.handleSubmit}
         
        autoComplete="off"
      >
        <Registerlabel>
          Имя
          <RegisterInput
            type="text"
            name="name"
          //   value={name}
          //   onChange={this.handleChange}
          />
        </Registerlabel>

        <Registerlabel >
          Почта
          <RegisterInput
            type="email"
            name="email"
          //   value={email}
          //   onChange={this.handleChange}
          />
        </Registerlabel>

        <Registerlabel>
          Пароль
          <RegisterInput
            type="password"
            name="password"
          //   value={password}
          //   onChange={this.handleChange}
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