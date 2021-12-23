const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  subdomain: {
    type: String,
    required: [true, "A subdomain is needed for you."],
    unique: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
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

userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return candidatePassword === userPassword;
};

const Userwrite = mongoose.model("Userwrite", userSchema);

module.exports = Userwrite;
