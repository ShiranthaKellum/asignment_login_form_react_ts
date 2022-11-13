import { Link, useLocation } from 'react-router-dom'

export default function HomePage(props: any) {
    const location = useLocation();
    const data = location.state?.data;
    console.log(props)
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Welcome {data.username}</h3>
            <Link to='/'>
                <input type='submit' value='Log out' />

            </Link>

        </div>
    )
}
// Resorce : https://www.youtube.com/watch?v=9cwQa5hdjs8