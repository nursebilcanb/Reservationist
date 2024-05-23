const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin');

router.get('/panel', adminControllers.getPanel);
router.get('/panel/customerData', adminControllers.getCustomerData);
router.get('/panel/reservationData', adminControllers.getReservationData);
router.get('/panel/contactData', adminControllers.getContactData);

router.post('/panel/customerData/add', adminControllers.addCustomer);
router.post('/panel/customerData/edit', adminControllers.editCustomer);
router.post('/panel/customerData/delete', adminControllers.deleteCustomer);

router.post('/panel/contactData/add', adminControllers.addContact);
router.post('/panel/contactData/edit', adminControllers.editContact);
router.post('/panel/contactData/delete', adminControllers.deleteContact);

router.post('/panel/reservationData/edit', adminControllers.editReservation);
router.post(
  '/panel/reservationData/delete',
  adminControllers.deleteReservation
);
router.post('/panel/reservationData/add', adminControllers.addReservation);

module.exports = router;
