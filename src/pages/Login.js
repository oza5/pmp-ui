// src/pages/Login.js
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const handleLogin = async () => {
    setisLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      const token = data.token;
      if (token !== null) {
        localStorage.setItem("token", token);
        setToken(token);
        onLogin();
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>Health Screening App</h2>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="dense"
        />
        <div className="buttons">
          <Button variant="contained" color="primary" onClick={handleLogin}>
            {isLoading ? "Logging In..." : "Login"}
          </Button>
          <div style={{ padding: "15px" }}></div>
          <Link to="/register">
            <Button variant="contained" color="primary">
              Register
            </Button>
          </Link>
          <div style={{ padding: "15px" }}></div>
          <Link to="/providers-screening">
            <Button variant="contained" color="success">
              Providers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
