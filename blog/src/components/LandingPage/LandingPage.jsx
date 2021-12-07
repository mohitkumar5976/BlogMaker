import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="LandingPage-body">
        <div className="LandingPage-wrapper">
          <div className="LandingPage-title">BlogMaker</div>
          <div className="LandingPage-Subtitle">
            Share your Knowledge with the world and chase your passion by
            writing your own blog.
          </div>
          <div className="LandingPage-Buttons">
            <button className="LandingPage-Login-button btn btn-primary">
              <Link to="/login" className="landing-button-links1">
                <h1>Login</h1>
              </Link>
            </button>
            <button className="LandingPage-SignUp-button btn btn-warning">
              <Link to="/register" className="landing-button-links2">
                <h1>SignUp</h1>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
