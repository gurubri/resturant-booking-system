const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SALT_I = 10;

const resturantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1,
  },
  description: {
    type: String,
  },
  coord: {
    lat: { type: Number },
    long: { type: Number },
  },
  details: {
    type: String,
  },
  menu: [String],
  resturantImgUrl: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  token: {
    type: String,
  },
});

resturantSchema.pre("save", function (next) {
  var rest = this;

  if (rest.isModified("password")) {
    bcrypt.genSalt(SALT_I, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(rest.password, salt, (err, hash) => {
        if (err) return next(err);
        rest.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

resturantSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

resturantSchema.methods.generateToken = function (cb) {
  var user = this;
  var token = jwt.sign(user._id.toHexString(), "SUPERSECRET");

  user.token = token;

  user.save(function (err) {
    if (err) return cb(err);
    cb(null, user);
  });
};

resturantSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, "SUPERSECRET", function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

resturantSchema.methods.deleteToken = function (token, cb) {
  var user = this;

  user.updateOne({ $unset: { token: 1 } }, (err, user) => {
    if (err) return cb(err);
    cb(null, user);
  });
};

const Resturant = mongoose.model("Resturant", resturantSchema);

module.exports = { Resturant };
