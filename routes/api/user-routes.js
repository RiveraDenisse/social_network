const router = require("express").Router();
const {
  getAllUsers,
  getUserbyId,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");
// Set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/user/:id
router.route("/:userId").get(getUserbyId).put(updateUser).delete(deleteUser);

module.exports = router;
