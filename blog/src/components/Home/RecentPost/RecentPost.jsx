import React, { useState, useEffect } from "react";
import "./RecentPost.css";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

function RecentPost() {
  const [index, setIndex] = useState(0);
  const [GetRecent, setGetRecent] = useState([]);

  useEffect(() => {
    loadRecentPost();
  }, []);

  const loadRecentPost = async () => {
    await axios.get("/recentposts").then((res) => {
      console.log(res.data);
      setGetRecent(res.data);
    });
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="recentpost-body">
        <div className="recentpost-carousel">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {GetRecent.map((data) => (
              <Carousel.Item key={data.id}>
                <img
                  className="d-block w-100"
                  src={data.newpost_image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3
                    className="recentpost-h3"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    {data.post_title}
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="recentpost-block-right"></div>

        <ul className="recentpost-block-ul">
          {GetRecent.map((data) => (
            <li className="recentpost-block-li" key={data.id}>
              <p className="recentpost-block-tag">{data.categories}</p>
              <img
                src={data.newpost_image}
                className="recentpost-block-img"
                width="100%"
                height="100%"
                alt=""
              />
              <h4 className="recentpost-block-title">{data.post_title}</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RecentPost;
