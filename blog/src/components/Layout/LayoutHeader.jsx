import React from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

export default function LayoutHeader() {
  return (
    <>
      <div className="layout-wrapper card">
        <div className="template-logo-name card ">
          <div className="logo-name-data">
            <div className="logo-name">
              <h4>Blog Name</h4>
            </div>

            <div className="logo-edit">
              <Link>
                <button className="btn btn-primary">
                  <i className="fa fa-edit">
                    <b>Edit</b>
                  </i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="template-social-icons card">
          <div className="template-social-links">
            <ul className="template-social-links-ul">
              <li className="template-social-links-li">
                <div className="template-social-links-name">
                  <h4 className="social-name">
                    <i className="fa fa-facebook"> </i> Facebook
                  </h4>
                </div>
                <div className="template-social-links-change">
                  <Link>
                    <button className="btn btn-primary">
                      <i className="fa fa-edit">
                        <b>Edit</b>
                      </i>
                    </button>
                  </Link>
                </div>
              </li>
              <li className="template-social-links-li">
                <div className="template-social-links-name">
                  <h4 className="social-name">
                    <i className="fa fa-twitter"> </i>Twitter
                  </h4>
                </div>
                <div className="template-social-links-change">
                  <Link>
                    <button className="btn btn-primary">
                      <i className="fa fa-edit">
                        <b>Edit</b>
                      </i>
                    </button>
                  </Link>
                </div>
              </li>
              <li className="template-social-links-li">
                <div className="template-social-links-name">
                  <h4 className="social-name">
                    <i className="fa fa-youtube-play"> </i>Youtube
                  </h4>
                </div>
                <div className="template-social-links-change">
                  <Link>
                    <button className="btn btn-primary">
                      <i className="fa fa-edit">
                        <b>Edit</b>
                      </i>
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
