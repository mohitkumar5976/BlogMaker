import React from "react";
import SidebarCategory from "./SidebarCategory";
import img from "../../Login/Login.jpg";
import android from "../android.jpg";
import android2 from "../android2.png";
import android3 from "../android3.jpg";
import dsa1 from "../dsa1.jpg";
import dsa2 from "../dsa2.png";
import dsa3 from "../dsa3.jpg";
import web1 from "../web1.jpg";
import web2 from "../web2.png";
import web3 from "../web3.jpg";
import SidebarPost from "./SidebarPost";
import SidebarTabs from "./SidebarTabs";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar-wrapper card">
        <div className="main-post-body-title">
          <div className="main-content-title"> Programming</div>
        </div>
        <div className="coding-posts">
          <ul className="coding-posts-ul">
            <li className="coding-posts-li">
              <img
                src={dsa1}
                alt=""
                className="coding-posts-li-img"
                width="100%"
                height="100%"
              />
              <p className="coding-posts-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="coding-posts-li">
              <img
                src={dsa2}
                alt=""
                className="coding-posts-li-img"
                width="100%"
                height="100%"
              />
              <p className="coding-posts-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="coding-posts-li">
              <img
                src={dsa3}
                alt=" "
                className="coding-posts-li-img"
                width="100%"
                height="100%"
              />
              <p className="coding-posts-li-title">
                This is java section.This is java section.
              </p>
            </li>
          </ul>
        </div>

        <SidebarTabs />
        <div className="sidebar-title">
          <div className="sidebar-content-title">Category </div>
        </div>
        <SidebarCategory />
        <div className="sidebar-title">
          <div className="sidebar-content-title">Web Dev</div>
        </div>
        <SidebarPost />
        <div className="main-post-body-title">
          <div className="main-content-title">Top Videos</div>
        </div>
        <div className="videos">
          <div
            id="carouselExampleControls"
            className="carousel slide sidebar-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/iwz3qZOb1oo"
                ></iframe>
              </div>
              <div className="carousel-item">
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/v92rvZ9MftA"
                ></iframe>
              </div>
              <div className="carousel-item">
                <iframe
                  width="420"
                  height="315"
                  src="https://www.youtube.com/embed/oioEQ0wtSQg"
                ></iframe>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="main-post-body-title">
          <div className="main-content-title"> Technologies</div>
        </div>
        <div className="coding-posts">
          <ul className="coding-posts-ul">
            <li className="coding-posts-li">
              <img
                src={img}
                alt=""
                className="coding-posts-li-img"
                width="100%"
                height="100%"
              />
              <p className="coding-posts-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="coding-posts-li">
              <img
                src={img}
                alt=""
                className="coding-posts-li-img"
                width="100%"
                height="100%"
              />
              <p className="coding-posts-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="coding-posts-li">
              <img
                src={img}
                alt=" "
                className="coding-posts-li-img"
                width="100%"
                height="100%"
              />
              <p className="coding-posts-li-title">
                This is java section.This is java section.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
