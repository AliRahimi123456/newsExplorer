const express = require("express");

const auth = require("../middlewares/auth");
const newsArticles = require("./newsArticles");
const userRoutes = require("./users");
const NotFoundError = require("../errors/not-found-error");
const { validateLogin, validateSignup } = require("../middlewares/validation");
const { login, createUser } = require("../controllers/users");

const router = express.Router();

router.post(
  "/signin",
  validateLogin,

  login
);
router.post(
  "/signup",
  validateSignup,

  createUser
);
router.use(auth);

router.use("/articles", newsArticles);
router.use("/users", userRoutes);

router.use((req, res, next) => {
  next(new NotFoundError("Route not found"));
});
module.exports = router;
