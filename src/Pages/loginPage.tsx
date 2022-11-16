import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
    const initData = {
        username: '',
        password: '',

    }
    // data set
    const [data, setData] = useState(initData);
    const { username, password } = data;

    const navigate = useNavigate();
    // errors
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === '') {
            setUserNameError(true);

        } else {
            if (password === '') {
                setPasswordError(true);

            } else {
                if (username === 'admin' && password === 'password') {
                    navigate('/homepage', { state: { username: username } });

                }
            }
        }
    }
    return (
        <div>
            <h1>Login Page</h1>
            <h2>Login Form</h2>
            <form onSubmit={e => { handleSubmit(e) }}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}

                />
                <br />
                {userNameError ?
                    <label
                        style={{
                            color: 'red',

                        }}

                    >Username can not be empty!

                    </label> : ''
                }
                <br />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}

                />
                <br />
                {passwordError ?
                    <label
                        style={{
                            color: 'red',

                        }}

                    >Password can not be empty!

                    </label> : ''
                }
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
// Resourse: https://github.com/john-smilga/react-router-6-tutorial.git