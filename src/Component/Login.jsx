import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === input.email &&
      savedUser.password === input.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/home");
    } else {
      alert("Wrong Email or Password ❌");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#ff758c,#ff7eb3)",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "30px",
          background: "#fff",
          borderRadius: "15px",
          boxShadow: "0 4px 25px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#333" }}>User Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#ff4d6d",
              color: "white",
              border: "none",
              borderRadius: "8px",
              marginTop: "10px",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Login Now
          </button>
        </form>

        <p style={{ marginTop: "15px", color: "#444" }}>
          Not registered yet?{" "}
          <Link to="/signup" style={{ color: "#ff4d6d", fontWeight: "bold" }}>
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
