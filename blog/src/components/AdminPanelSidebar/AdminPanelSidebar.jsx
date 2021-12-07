import React from "react";
import "./AdminPanelSidebar.css";
import img from "../Login/Login.jpg";
import { Link } from "react-router-dom";
export default function AdminPanelSidebar(email) {
  return (
    <>
      <div
        class="d-flex flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: "250px" }}
      >
        <Link
          to="/adminpanel"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img src={email.profile} alt="" className="admin-profile" />
          <span class="fs-4 dashboard">Mohit kumar</span>
        </Link>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <Link
              to="/adminpanel"
              class="nav-link text-light"
              aria-current="page"
            >
              <i class="fa fa-home"></i>
              <span class="ms-2"> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/newpost" class="nav-link text-white">
              <i class="fa fa-edit"></i>
              <span class="ms-2"> New Post</span>
            </Link>
          </li>
          <li>
            <Link to="/feedback" class="nav-link text-white">
              <i class="fa fa-comments-o"></i>
              <span class="ms-2"> FeebBack</span>
            </Link>
          </li>
          <li>
            <Link to="/layout" class="nav-link text-white">
              <i class="fa fa-table"></i>
              <span class="ms-2"> Layout</span>
            </Link>
          </li>
          <li>
            <Link to="/home" class="nav-link text-white">
              <i class="fa fa-eye"></i>
              <span class="ms-2"> View Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/login" class="nav-link text-white">
              <i class="fa fa-sign-out"></i>
              <span class="ms-2"> Logout</span>
            </Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
