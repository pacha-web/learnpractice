import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";

const videoIds = {
  python: "rfscVS0vtbw",
  javascript: "PkZNo7MFNFg",
  c: "KJgsSFOSQv0",
  java: "eIrMbAQSU34",
  "c++": "vLnPwxZdW4Y",
};

function LearnPage() {
  const { language } = useParams();
  const navigate = useNavigate();
  
  if (!language) return <h1 style={{ color: "red", textAlign: "center" }}>Error: Language Not Found</h1>;

  const lowerCaseLanguage = language.toLowerCase();
  const videoId = videoIds[lowerCaseLanguage] || "dQw4w9WgXcQ"; 
  const compilerUrl = `https://replit.com/@replit/${lowerCaseLanguage}?lite=true`;

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#FFFFFF", // White background
      display: "flex",
    }}>
      
      {/* Sidebar with Back Button at the Top */}
      <div style={{
        width: "350px", // Sidebar width
        backgroundColor: "#1e3a8a", // Light gray color for the back button
        // Sidebar color
        color: "white",
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Back Button (Arrow Symbol Only) */}
        <button 
          onClick={() => navigate(-1)} 
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            alignSelf: "flex-start", // Aligns to the top-left
            marginBottom: "20px"
          }}
        >
          ←
        </button>

        <h3 style={{ textAlign: "center" }}>Lessons in {language}</h3>
        <ul style={{ listStyleType: "none", padding: "0", whiteSpace: "nowrap" }}>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}>Introduction</li>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}>Basics</li>
          <li style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}>Advanced Concept</li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", textAlign: "center" }}>
        <h1 style={{ color: "#1e3a8a" }}>Learn {language.toUpperCase()}</h1>

        {/* Video & Compiler Section (Side by Side) */}
        <div style={{
          backgroundColor: "#E3F2FD", // Center background color
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px"
        }}>
          {/* Video Player */}
          <div>
            <h2 style={{ color: "#1e3a8a", marginBottom: "10px" }}>Learn {language.toUpperCase()} - Video Tutorial</h2>
            <YouTube videoId={videoId} opts={{ width: "600", height: "350" }} />
          </div>

          {/* Compiler Section */}
          <div>
            <h2 style={{ color: "#1e3a8a", marginBottom: "10px" }}>{language.toUpperCase()} Compiler</h2>
            <iframe
              src={compilerUrl}
              width="600"
              height="350"
              style={{ border: "1px solid black", borderRadius: "5px" }}
              title={`${language} Compiler`}
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}

export default LearnPage;