import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [passwordFocused, setPasswordFocused] = useState(false);

    const navigate = useNavigate();

    function handleLogin(event) {

        event.preventDefault();

        if (email === "" || password === "") {

            alert("Please enter login details");

            return;
        }

        const users =
            JSON.parse(localStorage.getItem("users"))
            || [];

        const existingUser =
            users.find(function (user) {

                return user.email === email;

            });

        if (!existingUser) {

            alert("You are a new user, please register first");

            return;
        }

        if (existingUser.password === password) {

            alert("Login successful");

            navigate("/dashboard");

        } else {

            alert("Please enter correct credentials");
        }
    }

    return (

        <div>

            <Navbar />

            <div className="auth-page">

                <form
                    className="auth-card"
                    onSubmit={handleLogin}
                >

                    <h2>Login</h2>

                    {/* Email */}

                    <label>Email</label>

                    <input
                        type="email"

                        placeholder="Enter email"

                        onChange={(e) =>
                            setEmail(e.target.value)}
                    />

                    {/* Password */}

                    <label>Password</label>

                    <div className="password-box">

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }

                            placeholder="Enter password"

                            onFocus={() =>
                                setPasswordFocused(true)}

                            onBlur={() =>
                                setPasswordFocused(false)}

                            onChange={(e) =>
                                setPassword(e.target.value)}
                        />

                        {passwordFocused && (

                            <span
                                onMouseDown={(e) =>
                                    e.preventDefault()}

                                onClick={() =>
                                    setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </span>

                        )}

                    </div>

                    <button type="submit">

                        Login

                    </button>

                    <p>

                        New user?{" "}

                        <Link to="/signup">

                            Signup

                        </Link>

                    </p>

                </form>

            </div>

        </div>
    )
}

export default Login;