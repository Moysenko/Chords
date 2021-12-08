import React, {useState} from 'react';
import { useAuth } from './hooks/useAuth';

export function SignUp(props) {
    const { setIsLogin } = props;
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeat_password, setRepeatPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const { onAuth } = useAuth(setIsLogin, setError);

    React.useEffect(() => {
        if (error) {
            setError('');
        }
    }, [login, password]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!login) {
            setError('Login is empty');
            return;
        }
        if (!password) {
            setError('Password is empty');
            return;
        }
        if (!repeat_password) {
            setError('Please, repeat password');
            return;
        }
        if (password !== repeat_password) {
            setError('Passwords do not match')
            return;
        }

        const response = await fetch('http://localhost:8000/api/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify({
                username: login,
                password,
            }),
        });
        const data = await response.json();

        console.log(response, data);

        if (!response.ok) {
            setError(data.detail);
            return;
        }

        await onAuth(login, password);
    };

    return (
        <>
            <div className="sign_up-box">
                <form onSubmit={handleSubmit}>
                    <div className="fields-box">
                        <div className="login-box">
                            <div className="login valign-text-middle alfaslabone-normal-black-30px">
                                Login
                            </div>
                            <input type="login" className="login-input" onChange={e => setLogin(e.target.value)}/>
                        </div>
                        <div className="password-box">
                            <div className="password valign-text-middle alfaslabone-normal-black-30px">
                                Password
                            </div>
                            <input type="password" className="password-field"
                                   onChange={e => setPassword(e.target.value)}/>
                            <div className="repeat-password valign-text-middle">Please, repeat password</div>
                            <input type="password" className="repeat-password-input"
                                   onChange={e => setRepeatPassword(e.target.value)}/>
                        </div>
                        <div className='error-text'>{error}</div>
                    </div>
                    <button
                        className="create-an-account valign-text-middle alfaslabone-normal-white-30px"
                        type="submit">Create an account
                    </button>
                </form>
            </div>
            <div className="page-title valign-text-middle alfaslabone-normal-muddy-waters-40px">
                Sign Up
            </div>
        </>
    );
}
