const express = require("express");
const router = express.Router();
const adminControllers= require('../controllers/admin');

router.get('/panel',adminControllers.getCustomerData);

module.exports=router;