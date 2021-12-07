const express = require("express");
const router = express.Router();
const db = require("./../dbConfig/dbConfig");
const multer = require("multer");
const path = require("path");
const { emit } = require("process");

let storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/postImages/"); // './public/images/' directory name where save the file
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({
  storage: storage,
});

router.post("/register", upload.single("profile"), function (req, res) {
  console.log(req.body);

  let email = req.body.email;
  let password = req.body.password;

  // check unique email address

  let sql = `INSERT INTO user(password,email) values(?,?)`;
  db.query(sql, [password, email], function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});
module.exports = router;
