const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.post("/contact/add",userController.createContact);
router.post("/reservation/add",userController.createReservation);
router.post("/deposit/add", userController.addDeposit);

module.exports=router;
