import { useState } from "react";
import { useDispatch } from "react-redux";


const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
        case 'email':
            return setEmail(value);
        case 'password':
            return setPassword(value);
        default:
            return;
    }
};

    const handleSubmit = e => {
        e.prevauntDefault();

        dispatch()

    };

    return (
          <div>
        <h1>Страница логина</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
                <label
                    style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    )
    
};

