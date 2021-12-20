import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-card">
        <h3>WriteIt</h3>
        <a href="/login" alt="">
          <button>Login</button>
        </a>
        <a href="/signup" alt="">
          <button>Sign Up</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
