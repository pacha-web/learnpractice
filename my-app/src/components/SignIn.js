// src/components/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with real auth
    if (email === "user@example.com" && pw === "password") {
      // e.g. localStorage.setItem("token", "…");
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F8FAFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          padding: "30px",
        }}
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
        >
          ← Back
        </button>

        <h2
          style={{
            marginBottom: "20px",
            textAlign: "center",
            color: "#1e3a8a",
            fontSize: "1.8rem",
          }}
        >
          Sign In
        </h2>

        <form onSubmit={handleSubmit} style={{ display: "grid", rowGap: "15px" }}>
          <input
            type="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />

          <input
            type="password"
            required
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#1e3a8a",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#555",
          }}
        >
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            style={{
              color: "#1e3a8a",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
