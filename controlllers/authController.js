const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const Userwrites = require("../model/userModel");

exports.signup = async (req, res, next) => {
  const newUser = await Userwrites.create({
    subdomain: req.body.subdomain,
    password: req.body.password,
  });

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
};

exports.login = async (req, res) => {
  const { subdomain, password } = req.body;

  const user = await Userwrites.findOne({ subdomain: subdomain }).select(
    "+password"
  );

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(401).json({
      status: "fail",
      message: "Incorrect subdomain or password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(200).json({
    status: "success",
    token,
  });
};

exports.protect = async (req, res, next) => {
  //1> Getting token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({
      status: "fail",
      message: "You are not logged in",
    });
  }

  //2> Verification of the token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3> Check if user still exists
  // console.log(subdomain);
  const currentUser = await Userwrites.findById(decoded.id);
  // console.log(currentUser);

  if (!currentUser) {
    return res.status(401).json({
      status: "fail",
      message: "The user no longer exist",
    });
  }

  //4> Check if user changed password after the token  was issued

  //By doing this the user can only access the data of the account he has logged in with
  req.userid = decoded.id;
  next();
};
