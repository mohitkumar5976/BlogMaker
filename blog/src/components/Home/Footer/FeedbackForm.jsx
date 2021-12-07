import React, { useState } from "react";
import "./FeedbackForm.css";
import axios from "axios";
function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");

  const Submit = async (e) => {
    e.preventDefault();

    let feedback = {
      email: email,
      textArea: textArea,
    };
    await axios.post("/feedbackform", feedback).then((res) => {
      if (res.data.msg) {
        alert(res.data.msg);
      } else {
        alert("Submitted");
      }
    });
  };

  return (
    <>
      <form onSubmit={Submit}>
        <div className="mb-3 feedback-form">
          <input
            type="email"
            className="form-control"
            value={email}
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          type="text"
          placeholder="Write here..."
          rows="7"
          className="footer-textarea"
          value={textArea}
          name="textArea"
          onChange={(e) => setTextArea(e.target.value)}
        />
        <button className="btn btn-primary feedback-form-button">Submit</button>
      </form>
    </>
  );
}

export default FeedbackForm;
