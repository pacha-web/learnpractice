// src/components/HomePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const languages = ["Python", "JavaScript", "C", "Java", "C++"];

export default function HomePage() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null); // Track pressed button

  return (
    <div style={{
      backgroundColor: "#F8FAFC",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      padding: "30px 0"
    }}>

      {/* Navbar */}
      <nav style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
      }}>
        <h2 style={{ color: "#1e3a8a", margin: 0 }}>
          Learn & Practice
        </h2>
        <button
          onClick={() => navigate("/signin")}
          style={{
            padding: "10px 15px",
            fontSize: "1rem",
            backgroundColor: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Sign In
        </button>
      </nav>

      {/* Main Centered Section */}
      <div style={{
        backgroundColor: "#E3F2FD",
        width: "80%",
        maxWidth: "1000px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "50px",
        marginTop: "30px"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          color: "#1e3a8a",
          marginBottom: "10px"
        }}>
          Learn New Skills<br/>with Learn & Practice
        </h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#555",
          maxWidth: "600px",
          marginBottom: "20px"
        }}>
          The best platform to master programming through learning and practice.
        </p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search for tutorials, e.g. Python"
          style={{
            width: "60%",
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "30px",
            border: "1px solid #1e3a8a",
            outline: "none",
            textAlign: "center",
            marginBottom: "20px"
          }}
        />

        {/* Explore Button */}
        <button
          onClick={() => navigate("/learn")}
          style={{
            padding: "12px 20px",
            fontSize: "1.2rem",
            backgroundColor: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Explore All Courses →
        </button>
      </div>

      {/* Popular Courses */}
      <h2 style={{
        marginTop: "50px",
        fontSize: "1.5rem",
        color: "#1e3a8a",
        textAlign: "center"
      }}>
        Popular Courses
      </h2>
      <div style={{
        display: "flex",
        gap: "15px",
        marginTop: "15px",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "80%"
      }}>
        {languages.map(lang => (
          <button
            key={lang}
            onMouseDown={() => setActiveButton(lang)}
            onMouseUp={() => setActiveButton(null)}
            onClick={() => navigate(`/learn/${lang.toLowerCase()}`)}
            style={{
              padding: "15px 20px",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "none",
              backgroundColor: activeButton === lang ? "#162d5e" : "#1e3a8a",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              transform: activeButton === lang ? "scale(0.95)" : "scale(1)",
              transition: "transform 0.1s ease-in-out, background-color 0.1s ease-in-out"
            }}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
