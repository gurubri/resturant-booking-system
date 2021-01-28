const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    userid: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    noPeople: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookingSchema);

module.exports = { Book };
