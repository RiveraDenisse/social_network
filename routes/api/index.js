const router = require("express").Router();
const userRoutes = require("./user-routes");

// add prefix of `/usser` to routes created in `user-routes.js`
router.use("/user", userRoutes);

module.exports = router;
