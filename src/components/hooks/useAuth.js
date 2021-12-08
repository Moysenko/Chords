import { useNavigate } from 'react-router-dom';

export function useAuth(setIsLogin, setError) {
    const navigate = useNavigate();

    const onAuth = async (login, password) => {
        const response = await fetch('http://localhost:8000/api/token/', {
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
        console.log("Inside onAuth: ", data);

        if (!response.ok) {
            setError(data.detail);
            return;
        }
        console.log("Logged in!");

        setIsLogin(true);
        window.localStorage.setItem('ACCESS', data.access);
        window.localStorage.setItem('REFRESH', data.refresh);
        navigate('/');
    };

    return { onAuth };
}
