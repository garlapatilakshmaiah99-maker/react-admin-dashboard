import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

function AddDetails() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    function handleAddUser(event) {
        event.preventDefault();

        const newErrors = {};

                                                                                                   // validations

        if (name === "") {
            newErrors.name = "Name is required";
        }

        if (email === "") {
            newErrors.email = "Email is required";
        }

        if (mobile === "") {
            newErrors.mobile =
                "Mobile number is required";
        }

        if (password === "") {
            newErrors.password =
                "Password is required";
        }

        if (confirmPassword === "") {
            newErrors.confirmPassword =
                "Confirm password is required";
        }
        if (
            email !== "" &&

            (!email.includes("@") ||
                !email.includes("."))
        ) {

            newErrors.email =
                "Please enter valid email";
        }
        if (
            mobile !== "" &&

            (isNaN(mobile) || mobile.length !== 10)
        ) {

            newErrors.mobile =
                "Please enter valid 10 digits mobile number";
        }

        // Password match validation

        if (
            password !== "" &&
            confirmPassword !== "" &&

            password !== confirmPassword
        ) {

            newErrors.confirmPassword =
                "Passwords do not match";
        }

        if (Object.keys(newErrors).length > 0) {

            setErrors(newErrors);

            return;
        }

        setErrors({});

        const users = JSON.parse(localStorage.getItem("users")) || [];
         
                                                                                                  // Check existing email

        const emailExists = users.find(function (user) {

            return (
                (user.email || "").toLowerCase().trim()
                ===
                email.toLowerCase().trim()
            );
        });

        if (emailExists) {

            setErrors({
                email: "Email already exists"
            });
            return;
        }

        

        const mobileExists = users.find(function (user) {

            return (
                (user.mobile || "").trim()
                ===
                mobile.trim()
            );
        });

        if (mobileExists) {

            setErrors({
                mobile: "Mobile number already exists"
            });
            return;
        }

        const newUser = {
            name: name,
            email: email,
            mobile: mobile,
            password: password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("User added successfully");

        navigate("/dashboard");
    }

    function cancelAdding() {
        navigate("/dashboard");
    }

    return (
        <div>
            {/* <Navbar /> */}

            <div className="auth-page">
                <form className="auth-card" onSubmit={handleAddUser}>
                    <h2>Add User</h2>

                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                        <span className="error-msg">
                            {errors.name}
                        </span>
                    )}

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                        <span className="error-msg">
                            {errors.email}
                        </span>
                    )}

                    <label>Mobile Number</label>
                    <input
                        type="text"
                        placeholder="Enter mobile number"
                        maxLength="10"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    {errors.mobile && (
                        <span className="error-msg">
                            {errors.mobile}
                        </span>
                    )}

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && (
                        <span className="error-msg">
                            {errors.password}
                        </span>
                    )}

                    <label>Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Re-enter password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && (
                        <span className="error-msg">
                            {errors.confirmPassword}
                        </span>
                    )}

                    <div className="add-user-buttons">

                        <button type="submit">
                            Save Details
                        </button>

                        <button
                            type="button"
                            onClick={cancelAdding}
                        >
                            Cancel Adding
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default AddDetails;