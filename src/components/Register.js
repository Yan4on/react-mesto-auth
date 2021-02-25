import React, { useState, memo } from 'react';
import { useHistory } from 'react-router-dom';
import FormSign from './FormSign';
import * as auth from '../utils/auth';

const Register = memo(({ changeCurrUrl, onInfoTooltip }) => {

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
        auth.register(email, password)
            .then((res) => {
                if (res.status === 201) {
                    onInfoTooltip('Вы успешно зарегистрировались!', 'ok')
                    history.push('/sign-in');
                    changeCurrUrl('/sign-in');
                    return;
                }
                onInfoTooltip('Что-то пошло не так! Попробуйте ещё раз.', 'error')
                return res;
            })
            .catch((err) => {
                onInfoTooltip('Что-то пошло не так! Попробуйте ещё раз.', 'error');
                console.log(err)
            });
    }

    return (
        <FormSign
            name="sign-up"
            title="Регистрация"
            btnName="Зарегистрироваться"
            onChange={handleChange}
            onSubmit={handleSubmit}
            changeCurrUrl={changeCurrUrl}
        />
    );
});

export default Register;