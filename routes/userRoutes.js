const express = require("express");
const {
  getAllUsers,
  getUser,
  createSubDomain,
  deleteUser,
  updateUser,
} = require("../controlllers/userController");

const {
  login,
  signup,
  protectAllUsers,
  protect,
  protectDelete,
  protectRoleUpdate,
} = require("../controlllers/authController");

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
router.route("/users").get(protectAllUsers, getAllUsers);
router
  .route("/users/:subdomain")
  .get(protect, getUser)
  .delete(protectDelete, deleteUser)
  .patch(protectRoleUpdate, updateUser);

module.exports = router;
