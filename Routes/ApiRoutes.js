const router = require("express").Router();
const { Router } = require("express");
const campgrounds = require("../controllers/campgrounds")
const user = require("../controllers/user")


router.post("/AddCampgrounds", campgrounds.AddCampgrounds);
router.get("/getCampGrounds" , campgrounds.getCampGrounds);
router.get("/register" , user.register);
router.get("/login" , user.login);
router.get("/contact" , user.sendmailforcontact)
 module.exports = router;


