import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import FormInput from "../components/FormInput";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  // Error messages
  const [errors, setErrors] = useState({});

  // Show password states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Eye icon focus states
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const navigate = useNavigate();

  function handleSignup(event) {
    event.preventDefault();

    const newErrors = {};

    // validations
    if (formData.name === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email === "") {
      newErrors.email = "Email is required";
    }

    if (formData.mobile === "") {
      newErrors.mobile = "Mobile number is required";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    }

    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Confirm password is required";
    }

    if (formData.email !== "" && !formData.email.includes("@gmail.com")) {
      newErrors.email = "Please enter valid email";
    }

    if (
      formData.mobile !== "" &&
      (isNaN(formData.mobile) || formData.mobile.length !== 10)
    ) {
      newErrors.mobile = "Please enter valid 10 digits mobile number";
    }

    if (
      formData.password !== "" &&
      formData.confirmPassword !== "" &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check existing email
    const emailExists = users.find(function (user) {
      return (
        (user.email || "").toLowerCase().trim() ===
        formData.email.toLowerCase().trim()
      );
    });

    if (emailExists) {
      setErrors({
        email: "Email already exists",
      });

      return;
    }

    // Check existing mobile number
    const mobileExists = users.find(function (user) {
      return (user.mobile || "").trim() === formData.mobile.trim();
    });

    if (mobileExists) {
      setErrors({
        mobile: "Mobile number already exists",
      });

      return;
    }

    setErrors({});

    const newUser = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful");

    navigate("/");
  }

  return (
    <div>
      <Navbar />

      <div className="auth-page">
        <form className="auth-card" onSubmit={handleSignup}>
          <h2>Signup</h2>

          <FormInput
            label="Name"
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <FormInput
            label="Email"
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FormInput
            label="Mobile Number"
            type="text"
            placeholder="Enter mobile number"
            name="mobile"
            value={formData.mobile}
            maxLength="10"
            onChange={handleChange}
            error={errors.mobile}
          />

          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              onChange={handleChange}
            />

            {passwordFocused && (
              <span
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            )}
          </div>

          {errors.password && (
            <span className="error-msg">{errors.password}</span>
          )}

          <label>Confirm Password</label>

          <div className="password-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter password"
              value={formData.confirmPassword}
              onFocus={() => setConfirmPasswordFocused(true)}
              onBlur={() => setConfirmPasswordFocused(false)}
              onChange={handleChange}
            />

            {confirmPasswordFocused && (
              <span
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            )}
          </div>

          {errors.confirmPassword && (
            <span className="error-msg">{errors.confirmPassword}</span>
          )}

          <button type="submit">Signup</button>

          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
