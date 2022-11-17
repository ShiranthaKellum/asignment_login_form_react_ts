import { useLocation, useNavigate } from "react-router-dom"

export default function HomePage() {
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => navigate('/');

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome {location.state.username}</h2>
            <input type="button" value="Logout" onClick={logout} />
        </div>
    )
}