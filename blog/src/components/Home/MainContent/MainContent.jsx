import React, { useState, useEffect } from "react";
import "./MainContent.css";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
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
import axios from "axios";
function MainContent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [GetLatestPost, setGetLatestPost] = useState([]);

  useEffect(() => {
    loadLatestPost();
  });

  const loadLatestPost = async () => {
    await axios.get("/loadLatestPosts").then((res) => {
      setGetLatestPost(res.data);
    });
  };
  return (
    <>
      <div className="main-post-body-title">
        <div className="main-content-title"> Latest Posts</div>
      </div>

      <div className="main-content-row1">
        {GetLatestPost.map((data) => (
          <div className="main-content-recentpost-block-1" key={data.id}>
            <div className="main-content-recentpost-block-1-img">
              <Link to={`/postcontent/${data.id}`} className="dataLink">
                <img
                  src={data.newpost_image}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </Link>
            </div>
            <div className="latestpost-content">
              <Link to={`/postcontent/${data.id}`}>
                <p className="main-content-recentpost-block-1-title">
                  {data.post_title}
                </p>
              </Link>

              <div className="main-post-content">{data.post_description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="main-post-body-title">
        <div className="main-content-title"> Web Development</div>
      </div>
      <div className="main-content-row2">
        {GetLatestPost.map((data) => (
          <div className="main-content-row2-block" key={data.id}>
            <div className="main-content-row2-img">
              <img src={data.newpost_image} alt="" width="100%" height="100%" />
            </div>
            <div className="main-content-row2-title">{data.post_title}</div>
          </div>
        ))}
      </div>
      <div className="main-content-ads1">
        <img src={img} width="100%" height="100%" alt="" />
      </div>
      <div className="main-post-body-title">
        <div className="main-content-title"> Top Section</div>
      </div>
      <div className="main-content-row3">
        <div className="main-content-row3-block1">
          <div className="main-content-row3-tag">Android</div>
          <div className="main-content-row3-img1">
            <img src={android3} width="100%" height="100%" alt="" />
          </div>
          <div className="main-content-row3-title">This is android section</div>
          <ul className="main-content-row3-ul">
            <li className="main-content-row3-li">
              <img
                src={android2}
                alt=""
                className="main-content-row3-li-img"
                width="100%"
                height="100%"
              />
              <p className="main-content-row3-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="main-content-row3-li">
              <img
                src={android3}
                alt=""
                className="main-content-row3-li-img"
                width="100%"
                height="100%"
              />
              <p className="main-content-row3-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="main-content-row3-li">
              <img
                src={android}
                alt=" "
                className="main-content-row3-li-img"
                width="100%"
                height="100%"
              />
              <p className="main-content-row3-li-title">
                This is java section.This is java section.
              </p>
            </li>
          </ul>
        </div>

        <div className="main-content-row3-block2">
          <div className="main-content-row3-tag">Java</div>
          <div className="main-content-row3-img2">
            <img src={web2} width="100%" height="100%" alt="" />
          </div>
          <div className="main-content-row3-title">This is java section.</div>
          <ul className="main-content-row3-ul">
            <li className="main-content-row3-li">
              <img
                src={web1}
                alt=""
                className="main-content-row3-li-img"
                width="100%"
                height="100%"
              />
              <p className="main-content-row3-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="main-content-row3-li">
              <img
                src={img}
                alt=""
                className="main-content-row3-li-img"
                width="100%"
                height="100%"
              />
              <p className="main-content-row3-li-title">
                This is java section.This is java section.
              </p>
            </li>
            <li className="main-content-row3-li">
              <img
                src={img}
                alt=" "
                className="main-content-row3-li-img"
                width="100%"
                height="100%"
              />
              <p className="main-content-row3-li-title">
                This is java section.This is java section.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-post-body-title">
        <div className="main-content-title"> Coding Section</div>
      </div>
      <div className="main-content-row4">
        <div className="main-content-row4-block1">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="d-block w-100" src={dsa1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={dsa2} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={dsa3} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="main-content-row4-block2">
          <ul className="main-content-row4-ul">
            <li className="main-content-row4-li">
              <img
                src={web3}
                className="main-content-row4-li-img"
                alt=""
                width="100%"
                height="100%"
              />
              <p className="main-content-row4-block2-title">
                This is coding seciton.This is coding seciton.
              </p>
            </li>
            <li className="main-content-row4-li">
              <img
                src={android3}
                className="main-content-row4-li-img"
                alt=""
                width="100%"
                height="100%"
              />
              <p className="main-content-row4-block2-title">
                This is coding seciton.This is coding seciton.
              </p>
            </li>
            <li className="main-content-row4-li">
              <img
                src={dsa3}
                className="main-content-row4-li-img"
                alt=""
                width="100%"
                height="100%"
              />
              <p className="main-content-row4-block2-title">
                This is coding seciton.This is coding seciton.
              </p>
            </li>
          </ul>
        </div>
        <div className="main-content-ads1">
          <img src={img} width="100%" height="100%" alt="" />
        </div>
      </div>
    </>
  );
}

export default MainContent;
