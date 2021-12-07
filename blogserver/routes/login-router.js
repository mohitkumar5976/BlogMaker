const express = require("express");
const router = express.Router();
const db = require("../database");
/* GET users listing. */

router.post("/login", function (req, res) {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;

  let login = `Select * from user where email=${email} and password=${password}`;
  db.query(login, (err, result) => {
    if (err) {
      res.send({ msg: err });
    } else {
      if (result.length > 0) {
        return res.send(result);
      } else {
        res.send({
          msg: "Wrong Username or Passoword",
        });
      }
    }
  });
});

module.exports = router;
