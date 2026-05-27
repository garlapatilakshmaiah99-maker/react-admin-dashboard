import { useNavigate } from "react-router-dom";

function Sidebar() {
    const navigate = useNavigate();

    return (
        <div className="dashboard-sidebar">
            <h2 onClick={() => navigate("/dashboard")}>
                Dashboard
            </h2>

            <button onClick={() => navigate("/dashboard")}>
                Admin
            </button>

            <button onClick={() => navigate("/users")}>
                User
            </button>

            <button onClick={() => navigate("/products")}>
                Products
            </button>
        </div>
    );
}

export default Sidebar;