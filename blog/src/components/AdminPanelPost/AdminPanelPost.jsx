import React, { useState, useEffect } from "react";
import "./AdminPanelPost.css";
import { Link } from "react-router-dom";

import axios from "axios";
export default function AdminPanelPost() {
  const [GetData, setData] = useState([]);

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    await axios.get("/sendposts").then((res) => {
      if (res.data.msg) {
        alert(res.data.msg);
      } else {
        console.log(res);
        setData(res.data);
      }
    });
  };

  const deletePost = async (Postid) => {
    await axios
      .post(`/adminpost/${Postid}`)
      .then((result) => {
        get();
      })
      .catch(() => {
        alert("Error in the Code");
      });
  };

  return (
    <>
      {GetData.map((data) => (
        <div className="card adminpanel-post" key={data.id}>
          <div className="adminpanel-post-wrapper">
            <div className="adminpanel-post-image">
              <img
                src={data.newpost_image}
                alt=""
                width="150px"
                height="100px"
              />
            </div>
            <div className="adminpanel-post-content">
              <div className="adminpanel-post-title">{data.post_title}</div>
            </div>
            <div className="adminpanel-post-links">
              <ul className="adminpanel-post-ul">
                <li className="adminpanel-post-li">
                  <Link to={`/adminpostEdit/${data.id}`}>
                    <button className="btn btn-primary">
                      <i className="fa fa-edit"></i>
                    </button>
                  </Link>
                </li>
                <li className="adminpanel-post-li">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      const ans = window.confirm(
                        "Do you want to delete this Post?"
                      );
                      if (ans === true) {
                        deletePost(data.id);
                      } else {
                        alert("Can't Delete this Post, Try Again");
                      }
                    }}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
