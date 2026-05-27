import { useNavigate } from "react-router-dom";

function LogoutNavbar() {
    const navigate = useNavigate();

    function logout() {
        alert("Logout successful");
        navigate("/");
    }

    return (
        <nav className="navbar">
            <h2 className="logo">MAIN - Dashboard</h2>

            <button onClick={logout}>
                Logout
            </button>
        </nav>
    );
}

export default LogoutNavbar;