const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  subdomain: {
    type: String,
    required: [true, "A subdomain is needed for you."],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "A password is must to secure your subdomain"],
    trim: true,
    select: false,
  },
  encodedData: {
    type: String,
    trim: false,
    default: "",
  },
});

const Userwrite = mongoose.model("Userwrite", userSchema);

module.exports = Userwrite;
