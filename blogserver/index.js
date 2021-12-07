const express = require("express");
const db = require("./dbConfig/dbConfig");
const app = express();
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");

const Port = process.env.PORT || 9000;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "./public/postImages")));

app.use(bodyParser.json({ limit: "1000000" }));
app.use(bodyParser.urlencoded({ limit: "1000000", extended: true }));
app.use(express.json());

/*homepost*/
app.get("/loadLatestPosts", (req, res) => {
  db.query("Select * from posts", (err, rows) => {
    if (err) {
      return res.send({
        msg: "error",
      });
    } else {
      return res.send(rows);
    }
  });
});

app.get("/recentposts", (req, res) => {
  db.query("Select * from posts order by id desc LIMIT 3", (err, rows) => {
    if (err) {
      return res.send({
        msg: "error",
      });
    } else {
      return res.send(rows);
    }
  });
});

/*category*/
app.post("/deleteCategory/:id", (req, res) => {
  let id = req.params.id;
  let sql = "Delete from Category where id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.send({
        msg: "error",
      });
    } else {
      return res.send(result);
    }
  });
});

app.get("/getCategory", (req, res) => {
  let sql = "Select * from category";
  db.query(sql, (err, result) => {
    if (err) {
      return res.send({
        msg: "error",
      });
    } else {
      return res.send(result);
    }
  });
});

app.post("/addCategory", (req, res) => {
  console.log(req.body);
  let category = req.body.category;

  db.query(
    `INSERT INTO category(categories) values('${category}')`,
    (err, result) => {
      if (err) {
        return res.send({
          msg: "error",
        });
      } else {
        return res.send(result);
      }
    }
  );
});

/*comment*/

app.get("/comment", (req, res) => {
  db.query("Select * from comment", (err, results) => {
    if (err) {
      alert("Error");
    } else {
      return res.send(results);
    }
  });
});

app.post("/comment", (req, res) => {
  console.log(req.body);
  let Text = req.body.text;

  let comment = `INSERT INTO comment(comment) values('${Text}')`;
  db.query(comment, (err, result) => {
    if (err) {
      res.send({
        msg: "error",
      });
    } else {
      return res.send(result);
    }
  });
});

/*homefeedback*/

app.get("/feedbackform", (req, res) => {
  db.query("Select * from feedback", (err, results) => {
    if (err) {
      return res.send({
        msg: "Error",
      });
    } else {
      return res.send(results);
    }
  });
});

app.post("/feedbackform", (req, res) => {
  console.log(req.body);
  const feedEmail = req.body.email;
  const feedText = req.body.textArea;

  const feed = `INSERT INTO feedback(feed_email,feed_desc) values('${feedEmail}','${feedText}')`;
  db.query(feed, (err, result) => {
    if (err) {
      res.send({
        msg: "error",
      });
    } else {
      return res.send(result);
    }
  });
});

/*adminposts*/

app.put("/updateadminposts/:id", (req, res) => {
  let adminpostid = req.params.id;
  console.log(req.body);
  let title = req.body.Title;
  let description = req.body.Description;
  let category = req.body.Category;

  let sql =
    "Update posts SET post_title=?,post_description=?,categories=? where id=?";
  db.query(sql, [title, description, category, adminpostid], (err, result) => {
    if (err) throw err;

    return res.send(result);
  });
});

app.get("/getadminpostedit/:id", (req, res) => {
  const id = req.params.id;

  const sql = `Select post_title,post_description,categories from posts where id=${id}`;
  db.query(sql, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send({
        title: result[0].post_title,
        description: result[0].post_description,
        category: result[0].categories,
      });
    }
  });
});

app.post("/adminpost/:id", (req, res) => {
  const id = req.params.id;
  const sql = `Delete from posts where id=${id}`;
  db.query(sql, (err, result) => {
    return res.send(result);
  });
});

app.get("/sendposts", (req, res) => {
  let sql = `Select * from posts  `;
  db.query(sql, function (err, result) {
    if (err) {
      return res.send({
        msg: "Error",
      });
    } else {
      return res.send(result);
    }
  });
});

/*newposts*/
app.get("/addnewCategory", (req, res) => {
  db.query("SELECT * From category", (err, result) => {
    if (err) throw err;
    return res.send(result);
  });
});

const newpostImage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/postImages/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().split(":")[0] + file.originalname);
  },
});
const uploadImage = multer({ storage: newpostImage });

app.post("/newpost", uploadImage.single("newpostpicture"), function (req, res) {
  let Title = req.body.title;
  let Category = req.body.Category;
  let Description = req.body.description;
  let image = req.file.filename;
  console.log(req.body);
  // insert query
  let post = `INSERT INTO posts(post_title,post_description,categories,newpost_image) values('${Title}','${Description}','${Category}','${image}')`;
  db.query(post, (err, result) => {
    if (err) {
      res.send({
        msg: "error",
      });
    } else {
      return res.send(result);
    }
  });
});

/*posts*/

app.get("/posts/:id", (req, res) => {
  let sql = `Select * from posts where id=${req.params.id} `;
  db.query(sql, function (err, result) {
    if (err) {
      return res.send({
        msg: "Error",
      });
    } else {
      return res.send(result);
    }
  });
});

app.listen(Port, (err) => {
  console.log("server running at", Port);
});
