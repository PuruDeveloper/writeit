const Userwrites = require("../model/userModel");

//GET ALL USER DATA
exports.getAllUsers = async (req, res) => {
  try {
    let users = await Userwrites.find();
    res.status(200).json({
      status: "success",
      datalength: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//GET INDIVIDUAL USER BY SUBDOMAIN
exports.getUser = async (req, res) => {
  try {
    const subdomain = req.params.subdomain;
    const user = await Userwrites.find({ subdomain: subdomain });
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: "Domain does not exists",
    });
  }
};

//CREATE NEW SUB DOMAIN
exports.createSubDomain = async (req, res) => {
  try {
    const newUser = await Userwrites.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const subdomain = req.params.subdomain;
    const user = await Userwrites.findOneAndDelete({ subdomain: subdomain });
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
