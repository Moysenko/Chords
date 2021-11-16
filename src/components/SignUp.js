import React, {useState} from 'react';

export function SignUp() {
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [repeat_password, setRepeatPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
    }

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