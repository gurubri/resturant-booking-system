const express = require("express");
const bodyParse = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const multer = require("multer");
const CridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const app = express();
const { Resturant } = require("./models/resturant");
const { User } = require("./models/user");
const { Book } = require("./models/booking");

const { auth, auth1 } = require("./middleware/auth");

// mongoD conn
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/resturant_info", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

// Init gfs
let gfs;

// registering middlewares
app.use(bodyParse.json());

app.use(cookieParser());

// GET
app.get("/api/get_Resturants", (req, res) => {
  Resturant.find({}, (err, rest) => {
    if (err) return res.status(400).send(err);
    res.status(200).send(rest);
  });
});

app.get("/api/get_resturant", (req, res) => {
  let id = req.query.id;
  Resturant.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
});

app.get("/api/users", (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).send(err);

    res.status(200).send(users);
  });
});

app.get("/api/auth", auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
  });
});

app.get("/api/auth_owner", auth1, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
    details: req.user.details,
    number: req.user.number,
    description: req.user.description,
    imgUrl: req.user.resturantImgUrl,
  });
});

app.get("/api/logout", auth, (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
});

app.get("/api/logout_user", auth1, (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err);
    res.sendStatus(200);
  });
});
// UPDATE

app.post("/api/update_Resturant", (req, res) => {
  Resturant.findByIdAndUpdate(
    req.body.id,
    req.body,
    { new: true },
    (err, doc) => {
      if (err) return res.status(400).send(err);
      res.json({
        success: true,
        doc,
      });
    }
  );
});

// DELETE

// POST
app.post("/api/addResturant", (req, res) => {
  const resturant = new Resturant(req.body);

  resturant.save((err, doc) => {
    if (err) return res.status(400).send(err);

    res.status(200).json({
      post: true,
      resId: doc.id,
    });
  });
});

app.post("/api/reservation", (req, res) => {
  const book = new Book(req.body);

  book.save((err, doc) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({
      post: true,
      resId: doc.id,
    });
  });
});
app.get("/api/getReservatinInfo", (req, res) => {
  Book.find({ userid: req.query.id }, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json({
      success: true,
      doc,
    });
  });
});

app.get("/api/getReservations", (req, res) => {
  Book.find({ id: req.query.id }, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json({
      success: true,
      doc,
    });
  });
});
app.get("/api/getUserInfo", (req, res) => {
  let id = req.query.id;
  User.findById(id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.send(doc);
  });
});
app.post("/api/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({ isAuth: false, message: "Invalid email address" });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          isAuth: false,
          message: "wrong password",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("auth", user.token).json({
          isAuth: true,
          id: user._id,
          email: user.email,
        });
      });
    });
  });
});

app.post("/api/login_owner", (req, res) => {
  Resturant.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({ isAuth: false, message: "Invalid email address" });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          isAuth: false,
          message: "wrong password",
        });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("auth", user.token).json({
          isAuth: true,
          id: user._id,
          email: user.email,
          name: user.name,
          number: user.number,
          details: user.details,
          description: user.description,
          imgUrl: user.resturantImgUrl,
        });
      });
    });
  });
});

app.post("/api/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    res.status(200).json({
      success: true,
      user: doc,
    });
  });
});

app.get("/api/getUser", (req, res) => {
  User.findById(req.query.id, (err, doc) => {
    if (err) return res.status(400).send(err);
    res.json({
      name: doc.name,
      lastname: doc.lastname,
      email: doc.email,
    });
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("server running on port 3001");
});
