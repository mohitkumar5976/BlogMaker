import React, { useEffect, useState } from "react";
import "./Header.css";
import img from "../../Login/Login.jpg";
import About from "./About";
import Contact from "./Contact";
import axios from "axios";
function Header() {
  const [GetCategory, setGetCategory] = useState([]);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    await axios.get("/addnewCategory").then((res) => {
      setGetCategory(res.data);
    });
  };
  return (
    <>
      <div className=" topbar">
        <div className="topbar-left">
          <ul className="topbar-left-links">
            <li className="topbar-left-list">
              <p className="home-home-button">Home</p>
            </li>

            <li className="topbar-left-list">
              <About />
            </li>

            <li className="topbar-left-list">
              <Contact />
            </li>
          </ul>
        </div>
        <div className="topbar-right">
          <ul className="topbar-right-social-links">
            <li className="topbar-right-social-links-list">
              <i className="fa fa-facebook topbar-right-social-links-list-icon"></i>
            </li>

            <li className="topbar-right-social-links-list">
              <i className="fa fa-twitter topbar-right-social-links-list-icon"></i>
            </li>

            <li className="topbar-right-social-links-list">
              <i className="fa fa-pinterest topbar-right-social-links-list-icon"></i>
            </li>
            <li className="topbar-right-social-links-list">
              <i className="fa fa-youtube-play topbar-right-social-links-list-icon"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="header">
        <div className="header-logo">
          <p className="logo">
            Coding Tools
            <div className="header-logo-subtitle">
              <i>Become Next Coder</i>
            </div>
          </p>
        </div>
        <div className="header-responsive-ads">
          <img src={img} alt="" width="100%" height="100%" />
        </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              {GetCategory.map((data) => (
                <li class="nav-item header-category-list" key={data.id}>
                  <a class="nav-link active" aria-current="page" href="#">
                    {data.categories}
                  </a>
                </li>
              ))}
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
