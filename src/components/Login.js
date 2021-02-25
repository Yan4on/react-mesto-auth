import React, { useState, memo } from 'react';
import { useHistory } from 'react-router-dom';
import FormSign from './FormSign';
import * as auth from '../utils/auth';

const Login = memo(({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    // Обработчик ввода данных в поля
    function handleChange(e) {

        const { name, value } = e.target;

        //обновляем значение поля после каждого ввода символа
        name === "email" ?
            setEmail(value) :
            setPassword(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            return;
        }

        auth.authorize(email, password)
            .then((data) => {
                if (data) {
                    setEmail('');
                    setPassword('');
                    handleLogin(email);
                    history.push('/');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <FormSign
            name="sign-in"
            title="Вход"
            btnName="Войти"
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
});

export default Login;