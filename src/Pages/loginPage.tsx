import { ChangeEvent, FormEvent, useState } from "react";
import { NavLink } from 'react-router-dom'

export default function LoginPage() {
    const initData = {
        username: '',
        password: '',

    };
    const [data, setData] = useState(initData);
    const { username, password } = data;
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginDetailStatus, setLoginDetailStatus] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    }

    const handleData = (e: FormEvent<HTMLFormElement>) => {
        if (data.username === '') {
            setUserNameError(true);
            console.log('username error ', userNameError);

        } else {
            setUserNameError(false);
            console.log('username error ', userNameError);

        }
        if (data.password === '') {
            setPasswordError(true);
            console.log('password error ', passwordError);

        } else {
            setPasswordError(false);
            console.log('password error ', passwordError);
            
        }
        if (data.username === 'admin' && data.password === 'password') {
            setLoginDetailStatus(true);
            console.log('login detail status ', loginDetailStatus);

        }
        e.preventDefault();
        // console.log(userNameError, passwordError, loginDetailStatus);

    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={e => { handleData(e) }}>
                <label htmlFor='username'>User name</label>
                <input
                    type='text'
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={e => { onChange(e) }}
                    // autoComplete='off'

                />
                <br />
                {userNameError ?
                    <label
                        style={{
                            color: 'red',

                        }}
                    >
                        User name can not be empty!

                    </label> : ""

                }
                <br></br>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => { onChange(e) }}
                    // autoComplete='off'

                />
                <br />
                {passwordError ?
                    <label
                        style={{
                            color: 'red',

                        }}
                    >
                        Password can not be empty!

                    </label> : ""

                }
                <br />
                {userNameError || passwordError || !loginDetailStatus ?
                    <input
                        type='submit'
                        value='Log in'

                    /> :
                    <NavLink to='/homepage' state={{ data: data }}>
                        <input
                            type='submit'
                            value='Log in'
                        />

                    </NavLink>
                }
            </form>
        </div>

    )
}
// Resource: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbl9DS2JjUDM3akQzbDJfYlZDSW84azJhZDNiQXxBQ3Jtc0tsZHBGWWNCOXhCZ2psMnlNUG9hU2tnSUt6SlFDQW1PUWZMdjZDMUFWWVZtLWNRbHN3OHN1UFRreXFrNDB1LUxPOFU5ZGNFSWk3UURnSjRyMlNTMzdqM2UxRmZVTXRxV0stUF9tLVZaOUtQOWN2YmpOWQ&q=https%3A%2F%2Fbit.ly%2F3jM8jzV&v=U5662baGfRM