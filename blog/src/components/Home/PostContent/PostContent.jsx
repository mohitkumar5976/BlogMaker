import React, { useState, useEffect } from "react";
import "./PostContent.css";
import web1 from "../web1.jpg";
import web2 from "../web2.png";
import web3 from "../web3.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../Home.css";
import axios from "axios";

import Sidebar from "../Sidebar/Sidebar";

import { useParams } from "react-router";
function PostContent() {
  const { id } = useParams();

  const [post, setPost] = useState([]);
  const [getComment, setComment] = useState([]);
  const [GetImage, setGetImage] = useState([]);
  useEffect(() => {
    getdata();
    postData();
  });

  const postData = async () => {
    await axios.get(`/posts/${id}`).then((res) => {
      if (res.data.msg) {
        alert(res.data.msg);
      } else {
        console.log(res);
        setPost(res.data);
      }
    });
  };
  const getdata = async () => {
    await axios.get("/comment").then((res) => {
      setComment(res.data);
    });
  };

  {
    /*
      const Submit = (e) => {
    e.preventDefault();

    const comment = {
      text: Text,
    };
    axios.post("/comment", comment).then((res) => {
      if (res.data.msg) {
        alert(res.data.msg);
      } else {
        alert("Comment Posted");
      }
    });
  };

    */
  }

  return (
    <>
      <div className="card home-body">
        <div className="home-body-wrapper">
          <div className="main-header card">
            <Header />
          </div>

          <div className="post-body">
            <div className="post-content">
              <div className="post-content-wrapper card">
                {post.map((data) => (
                  <div className="main-post-content" key={data.id}>
                    <div className="post-content-blog-title">
                      {data.post_title}
                    </div>
                    <h5 className="post-content-date">March 12,2021</h5>
                    <div className="post-content-img">
                      <img
                        className="post-content-image"
                        src={data.newpost_image}
                        alt=""
                        width="150px"
                        height="100px"
                      />
                    </div>

                    <div className="post-content-desc">
                      {data.post_description}
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              {/* <div>
                  <form onSubmit={Submit} className="post-content-comment">
                    <div>
                      <textarea
                        type="text"
                        placeholder="Comment here..."
                        rows="3"
                        value={Text}
                        name="Text"
                        onChange={(e) => setText(e.target.value)}
                        className="post-content-input"
                      />
                    </div>
                    <div className="post-content-input-button">
                      <button type="submit">
                        <img
                          src="http://3.bp.blogspot.com/-n2JisQMpBQk/Tbbs53Y_hKI/AAAAAAAAHYU/0aHtnssq4Wc/s200/forward.gif"
                          width="100%"
                          height="100%"
                          className="post-content-input-image"
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
                  

                <div className="post-comment-list">
                  {getComment.map((data) => (
                    <ul className="post-comment-ul" key={data.id}>
                      <li className="post-comment-li">{data.comment}</li>
                    </ul>
                  ))}
                </div>*/}
              <div className="postcontent-suggested-post card">
                <div className="main-post-body-title">
                  <div className="main-content-title">
                    You might Read these:
                  </div>
                </div>

                <div className="main-content-row2">
                  <div className="main-content-row2-block">
                    <div className="main-content-row2-img">
                      <img src={web2} alt="" width="100%" height="100%" />
                    </div>
                    <div className="main-content-row2-title">
                      This is web development post content
                    </div>
                  </div>
                  <div className="main-content-row2-block">
                    <div className="main-content-row2-img">
                      <img src={web1} alt="" width="100%" height="100%" />
                    </div>
                    <div className="main-content-row2-title">
                      This is web development post content
                    </div>
                  </div>
                  <div className="main-content-row2-block">
                    <div className="main-content-row2-img">
                      <img src={web3} alt="" width="100%" height="100%" />
                    </div>
                    <div className="main-content-row2-title">
                      This is web development post content
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="post-sidebar card">
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

export default PostContent;
