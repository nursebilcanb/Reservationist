const express = require("express");
const router = express.Router();
const adminControllers= require('../controllers/admin');

router.get('/panel',adminControllers.getPanel);
router.get('/panel/customerData',adminControllers.getCustomerData);
router.get('/panel/reservationData',adminControllers.getReservationData);
router.get('/panel/contactData',adminControllers.getContactData);


module.exports=router;