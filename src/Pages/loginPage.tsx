import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const initialLoginData = {
        username: '',
        password: '',
    }
    // data set
    const [loginData, setLoginData] = useState<{ username: string; password: string; }>(initialLoginData);
    // errors
    const [userNameError, setUserNameError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const { username, password } = loginData;

    const navigate = useNavigate();
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value.length);
        setLoginData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === '') setUserNameError(true);
        if (password === '') setPasswordError(true);
        if (username === 'admin' && password === 'password') {
            navigate('/homepage', { state: { username: username } });
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={onChange}
                />
                <br />
                {userNameError && <label style={{color: 'red',}}>Username can not be empty!</label>}
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                />
                <br />
                {passwordError && <label style={{color: 'red',}}>Password can not be empty!</label>}
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
// Resourse: https://github.com/john-smilga/react-router-6-tutorial.git