import React from "react";
import MainContent from "../Home/MainContent/MainContent";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Home.css";
import RecentPost from "./RecentPost/RecentPost";
import Sidebar from "./Sidebar/Sidebar";

function Home() {
  return (
    <>
      <div className="card home-body">
        <div className="home-body-wrapper">
          <div className="main-header card">
            <Header />
          </div>
          <div className="recent-posts card">
            <RecentPost />
          </div>
          <div className="main-body">
            <div className="main-content card">
              <MainContent />
            </div>
            <div className="main-sidebar card">
              <Sidebar />
            </div>
          </div>
          <div className="home-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
