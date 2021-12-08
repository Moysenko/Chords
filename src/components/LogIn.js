import React, {useState} from 'react';
import { useAuth } from './hooks/useAuth';

export function LogIn(props) {
    const { setIsLogin } = props;
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
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

        await onAuth(login, password);
    }

    return (
        <>
            <div className="page-title valign-text-middle alfaslabone-normal-muddy-waters-40px">
                Log In
            </div>
            <div className="log_in-box">
                <form onSubmit={handleSubmit}>
                    <div className="fields-box">
                        <div className="login-box">
                            <div className="login valign-text-middle alfaslabone-normal-black-30px">
                                Login
                            </div>
                            <input type="login" className="login-input"
                                   value={login}
                                   onChange={e => setLogin(e.target.value)}/>
                        </div>

                        <div className="login-password-box">
                            <div className="password valign-text-middle alfaslabone-normal-black-30px">
                                Password
                            </div>
                            <input type="password" className="password-field"
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div className='error-text'>{error}</div>
                    </div>
                    <button
                        className="create-an-account valign-text-middle alfaslabone-normal-white-30px"
                        type="submit" onClick={handleSubmit}>
                        Log me in!
                    </button>
                </form>
            </div>
        </>
    );
}