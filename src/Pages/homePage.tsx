import ReactDOM from "react-dom"
import LoginPage from "./loginPage"

const logOut = () => {
    ReactDOM.render(
        <LoginPage />,
        document.getElementById('root') as HTMLElement

    )
}

export default function HomePage(props: any) {
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Welcome {props.username}</h3>
            <input type='submit' value='Log out' onClick={logOut} />

        </div>
    )
}