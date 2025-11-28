import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedin")) navigate("/");
  },[]);

  const logout = () => {
    localStorage.removeItem("loggedin");
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#6a11cb,#2575fc)",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ fontSize: "35px", marginBottom: "20px" }}>
          Welcome to Home 🎉
        </h1>

        <button
          onClick={logout}
          style={{
            padding: "12px 25px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#fff",
            color: "#2575fc",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;