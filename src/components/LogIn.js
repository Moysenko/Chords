import React, {useState} from 'react';

export function LogIn() {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
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
                            <input type="login" className="login-input" onChange={e => setLogin(e.target.value)}/>
                        </div>
                        <div className="login-password-box">
                            <div className="password valign-text-middle alfaslabone-normal-black-30px">
                                Password
                            </div>
                            <input type="password" className="password-field"
                                   onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <button
                        className="create-an-account valign-text-middle alfaslabone-normal-white-30px"
                        type="submit">Log me in!
                    </button>
                </form>
            </div>
        </>
    );
}