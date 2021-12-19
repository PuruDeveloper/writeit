const express = require("express");
const {
  getAllUsers,
  getUser,
  createSubDomain,
  deleteUser,
} = require("../controlllers/userController");

const router = express.Router();
router.route("/").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: "done",
  });
});
router.route("/create").post(createSubDomain);
router.route("/users").get(getAllUsers);
router.route("/users/:subdomain").get(getUser).delete(deleteUser).patch();

module.exports = router;
