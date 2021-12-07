import React, { useState, useEffect } from "react";

import "./Post.css";
import axios from "axios";

function Post(id) {
  const [Text, setText] = useState("");
  const [post, setPost] = useState([]);
  const [getComment, setComment] = useState([]);

  useEffect(() => {
    getdata();
    postData();
  }, []);

  const postData = async () => {
    await axios.get(`/posts/:${id}`).then((res) => {
      setPost(res.data);
    });
  };
  const getdata = async () => {
    await axios.get("/comment").then((res) => {
      setComment(res.data);
    });
  };

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

  return (
    <>
      <div className="post-content-wrapper card">
        {post.map((post) => {
          return (
            <>
              <div className="main-post-content" key={post.id}>
                <div className="post-content-blog-title">{post.post_title}</div>
                <h5 className="post-content-date">March 12,2021</h5>
                <div className="post-content-desc">{post.text}</div>
              </div>
            </>
          );
        })}

        <hr />
        <div>
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
        </div>
        <hr />
        <div className="main-post-body-title">
          <div className="main-content-title"> You might Read these:</div>
        </div>
      </div>
    </>
  );
}

export default Post;
