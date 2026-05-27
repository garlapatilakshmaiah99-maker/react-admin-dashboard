import { Link } from "react-router-dom";

import { useState } from "react";

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);

    return (

        <nav className="navbar">

            <h1 className="logo">
                React App
            </h1>

            {/* Hamburger */}

            <div
                className="hamburger"

                onClick={() =>
                    setShowMenu(!showMenu)
                }
            >
                ☰
            </div>

            {/* Nav Links */}

            <ul className={
                showMenu
                ? "nav-links active"
                : "nav-links"
            }>

                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                </li>

                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>

                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;