const express=require("express");
const router=express.Router();
const authController=require("../controllers/auth");

// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });

// // CSRF middleware'ini sadece admin rotaları için etkinleştirin
// router.use(csrfProtection);

router.get("/login",authController.getLogin);

router.post("/login",authController.postLogin);

router.get("/signout",authController.signOut);

module.exports=router;