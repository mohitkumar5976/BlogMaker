import React, { useState } from "react";
import img from "../../Login/Login.jpg";
import "./SidebarPost.css";
import Carousel from "react-bootstrap/Carousel";
import web1 from "../web1.jpg";
import web2 from "../web2.png";
import web3 from "../web3.jpg";
function SidebarPost() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="sidebar-post-section">
        <div className="sidebar-post">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100" src={web1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={web1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={web1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <ul className="sidebar-posts-ul">
          <li className="sidebar-posts-li">
            <div className="sidebar-posts-li-img">
              <img src={web3} width="100%" height="100%" alt="" />
            </div>
            <div className="sidebar-posts-title">
              This is sidebar post title. This is sidebar post title
            </div>
          </li>
          <li className="sidebar-posts-li">
            <div className="sidebar-posts-li-img">
              <img src={web2} width="100%" height="100%" alt="" />
            </div>
            <div className="sidebar-posts-title">
              This is sidebar post title. This is sidebar post title
            </div>
          </li>
          <li className="sidebar-posts-li">
            <div className="sidebar-posts-li-img">
              <img src={web1} width="100%" height="100%" alt="" />
            </div>
            <div className="sidebar-posts-title">
              This is sidebar post title. This is sidebar post title
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SidebarPost;
