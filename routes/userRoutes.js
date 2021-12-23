const express = require("express");
const {
  getAllUsers,
  getUser,
  createSubDomain,
  deleteUser,
  updateUser,
} = require("../controlllers/userController");

const { login, signup, protect } = require("../controlllers/authController");

const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({
    status: "success",
    message: "done",
  });
});

router.post("/signup", signup);
router.post("/login", login);

router.route("/create").post(createSubDomain);
router.route("/users").get(protect, getAllUsers);
router
  .route("/users/:subdomain")
  .get(protect, getUser)
  .delete(deleteUser)
  .patch(updateUser);

module.exports = router;
