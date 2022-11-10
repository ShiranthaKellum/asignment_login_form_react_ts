import type { FormEvent } from "react";
import HomePage from "./homePage";
import ReactDOM from "react-dom";

const handleData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { username, password } = e.target as typeof e.target & {
        username: { value: string }
        password: { value: string }

    }
    ReactDOM.render(
        <HomePage username={username.value} />,
        document.getElementById('root') as HTMLElement

    )
}

export default function LoginPage() {
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={e => { handleData(e) }}>
                <label htmlFor='username'>User name</label>
                <input type='text' id='username' name="username" placeholder="username" /><br></br>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' name="password" placeholder="password" /><br />
                <input type='submit' value='Log in' />

            </form>
        </div>

    )
}