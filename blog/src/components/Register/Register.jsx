import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Register.css";
import fire from "../../Fire";
export default function Register() {
  const history = useHistory();
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  {
    /*
 const history = useHistory();

  const [file, setFile] = useState();
  const [Filename, setFilename] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
    */
  }

  const Submit = async (e) => {
    e.preventDefault();
    if (email && password === cpassword) {
      await fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          history.push("/login");
        })
        .catch((error) => {
          this.setState({ error: error });
        });
    } else {
      alert("Wrong Email or Password");
    }

    {
      /*


    if (email && password) {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);
      formData.append("CPassword", cpassword);
      formData.append("profile", file);
      formData.append("filename", Filename);

      await axios.post("/register", formData).then((res) => {
        alert("User Registered");
        history.push("/login");
      });
    } else {
      alert("Invalid Email or Password");
    }

      */
    }
    {
      /*
const rNGfm99RfAqifzEoqjYY9NPszcDnpChRWu = async (name, email, password) => {
      try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").add({
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        });
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };
  
  */
    }
  };

  return (
    <>
      <div className="Register-body">
        <div className="Register-wrapper">
          <div className="Register-blogname">
            <p className="Register-title">BlogMaker</p>
          </div>

          <form className="Register-form " onSubmit={Submit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={name}
                name="name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="text"
                className="form-control"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm-Password</label>
              <input
                type="password"
                className="form-control"
                name="CPassword"
                value={cpassword}
                onChange={(e) => setcPassword(e.target.value)}
              />
            </div>
            <div className="Register-footer">
              <div className="Register-button">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>

              {/*image
              <div className="profile-picture">
                <input
                  type="file"
                  name="profile"
                  accept="profile/*"
                  onChange={saveFile}
                />
              </div>
              */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
