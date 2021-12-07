import React from "react";
import "./Footer.css";
import mohit from "./mkk.jpg";
import shilpa from "./shilpa.jpg";
import sakshi from "./sakshi.jpeg";
import FeedbackForm from "./FeedbackForm";

function Footer() {
  return (
    <>
      <div class="bg-dark text-secondary px-4 py-5 text-center">
        <div className="footer-wrapper">
          <div className="footer-header">
            <div className="footer-blog-name">
              Coding Tools
              <div className="footer-blog-subtitle">
                <i>Become Next Coder</i>
              </div>
            </div>

            <ul className="footer-ul">
              <li className="footer-li">
                <a href="">
                  <i className="fa fa-facebook footer-social-links"></i>
                </a>
              </li>
              <li className="footer-li">
                <a href="">
                  <i className="fa fa-twitter footer-social-links"></i>
                </a>
              </li>
              <li className="footer-li">
                <a href="">
                  <i className="fa fa-youtube-play footer-social-links"></i>
                </a>
              </li>
              <li className="footer-li">
                <a href="">
                  <i className="fa fa-pinterest footer-social-links"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-content">
            <div className="footer-about-us">
              <p className="footer-about-us-description">
                Learn coding languages such as c++,java and python etc as well
                as Data structures,Databases and Development Technologies such
                as Web Development and Android Development.Also, you get here
                asked coding questions in Top IT companies such as
                google,microsoft etc. Learn Important subjects for jobs such as
                DBMS,Networking and Computer fundamentals etc.
              </p>
            </div>
            <div className="footer-feedback-form">
              <FeedbackForm />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img
                class="rounded-circle"
                src={mohit}
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2 className="text-light">Mohit Kumar</h2>
              <p className="text-light">ECE,AIACTR</p>
            </div>
            <div class="col-lg-4">
              <img
                class="rounded-circle"
                src={shilpa}
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2 className="text-light">Shilpa Panwar</h2>
              <p className="text-light">ECE,AIACTR</p>
            </div>
            <div class="col-lg-4">
              <img
                class="rounded-circle"
                src={sakshi}
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2 className="text-light">Sakshi Naudiyal</h2>
              <p className="text-light">ECE,AIACTR</p>
            </div>
          </div>
          {/*
          <div className="footer-founders-images">
            <ul className="footer-founders-img-ul">
              <li className="footer-founders-img-li">
                <img
                  src={mohit}
                  className="footer-founders-img"
                  width="100%"
                  height="100%"
                  alt=""
                />
                <p className="footer-founders-names">
                  <h5>
                    <i>Mohit Kumar</i>
                  </h5>
                  <h6>
                    <i>ECE, AIACTR</i>
                  </h6>
                </p>
              </li>
              <li className="footer-founders-img-li">
                <img
                  src={shilpa}
                  className="footer-founders-img"
                  width="100%"
                  height="100%"
                  alt=""
                />
                <p className="footer-founders-names">
                  <h5>
                    <i>Shilpa Panwar </i>
                  </h5>
                  <h6>
                    <i>ECE, AIACTR</i>
                  </h6>
                </p>
              </li>
              <li className="footer-founders-img-li">
                <img
                  src={sakshi}
                  className="footer-founders-img"
                  width="100%"
                  height="100%"
                  alt=""
                />
                <p className="footer-founders-names">
                  <h5>
                    <i>Sakshi Naudiyal</i>
                  </h5>
                  <h6>
                    <i>ECE, AIACTR</i>
                  </h6>
                </p>
              </li>
            </ul>
          </div>
*/}
          <div className="footer-bottom">
            <div className="footer-copy">Copyright@2021</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
