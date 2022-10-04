const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users.controller");
const AuthMiddleware = require("../middlewares/auth-middleware");
const userController = new UserController();
const upload = require("../modules/multer");

require("dotenv").config;

router.get("/user/search", AuthMiddleware, userController.searchUser);
router.get("/user/info/:userId", userController.getUserProfileInfo);
router.post("/user/signup", upload.single("image"), userController.signUp);
router.post("/user/check", userController.checkNick);
router.get("/user/rank", AuthMiddleware, userController.getRank);
router.get("/user/myrank", AuthMiddleware, userController.getRank);
router.get("/user/startbtn", AuthMiddleware, userController.startBtn);
router.post(
  "/user/report/post/:postId",
  AuthMiddleware,
  userController.sendPostReport
);
router.post("/user/report/bug", AuthMiddleware, userController.sendBugReport);
router.get("/user/research", AuthMiddleware, userController.getResearch);
router.put("/user/research", AuthMiddleware, userController.changeResearch);
router.get("/user/goal", AuthMiddleware, userController.checkGoal);
router.post("/user/distance", AuthMiddleware, userController.addDistance);
router.get(
  "/user/post/:nickname/:pagenum",
  AuthMiddleware,
  userController.getUserPost
);
router.get("/user/:userId", AuthMiddleware, userController.getUserInfo);
router.delete("/user", AuthMiddleware, userController.deleteUser);

router.post("/user/goal", AuthMiddleware, userController.setGoal);
router.put("/user/goal", AuthMiddleware, userController.changeGoal);
router.put(
  "/user/image",
  AuthMiddleware,
  upload.single("image"),
  userController.changeImage
);
router.put("/user/nickname", AuthMiddleware, userController.changeNickname);
router.post("/user/location", AuthMiddleware, userController.sendLocation);
router.post("/user/endrunning", AuthMiddleware, userController.endRunning);
module.exports = router;
