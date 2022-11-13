import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from 'react-router-dom'

export default function LoginPage() {
    const initData = {
        username: '',
        password: '',

    };
    const [data, setData] = useState(initData);
    const { username, password } = data;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    }

    const handleData = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        setData(initData);

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
                    onChange={e => {onChange(e)}}

                /><br></br>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => {onChange(e)}}

                /><br />
                <Link to='/homepage' state={{data: data}}>
                    <input
                        type='submit'
                        value='Log in'
                    />

                </Link>
            </form>
        </div>

    )
}
// Resource: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbl9DS2JjUDM3akQzbDJfYlZDSW84azJhZDNiQXxBQ3Jtc0tsZHBGWWNCOXhCZ2psMnlNUG9hU2tnSUt6SlFDQW1PUWZMdjZDMUFWWVZtLWNRbHN3OHN1UFRreXFrNDB1LUxPOFU5ZGNFSWk3UURnSjRyMlNTMzdqM2UxRmZVTXRxV0stUF9tLVZaOUtQOWN2YmpOWQ&q=https%3A%2F%2Fbit.ly%2F3jM8jzV&v=U5662baGfRM