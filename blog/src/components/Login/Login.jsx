import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const Submit = (e) => {
    e.preventDefault();

    const login = {
      email: email,
      password: password,
    };
    axios.post("/login", login).then((res) => {
      if (res.data.msg) {
        alert(res.data.msg);
      } else {
        console.log(res.data);

        history.push(`/adminpanel`);
      }
    });
  };

  return (
    <>
      <div className="Login-body">
        <div className="Login-wrapper">
          <div className="Login-blogname">
            <p className="Login-title">BlogMaker</p>
          </div>

          <form className="login-form" onSubmit={Submit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-footer">
              <div className="login-button">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="login-next-button">
                Don't have an account?
                <Link to="/register">Register Here</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
