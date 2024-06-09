const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/admin');
// const authController = require('../controllers/auth.js');

// router.get('/panel/register',authController.postRegisterPage);
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });

// // CSRF middleware'ini sadece admin rotaları için etkinleştirin
// router.use(csrfProtection);

router.get('/panel', adminControllers.getPanel);
router.get('/panel/customerData', adminControllers.getCustomerData);
router.get('/panel/reservationData', adminControllers.getReservationData);
router.get('/panel/contactData', adminControllers.getContactData);
router.get('/panel/depositData',adminControllers.getTotalDepositByDate);
router.get('/panel/galleryData',adminControllers.getGalleryData);
router.get('/panel/breakfastData',adminControllers.getBreakfastData);
router.get('/panel/dinnerData',adminControllers.getDinnerData);
router.get('/panel/ancData',adminControllers.getAnnouncementData);

router.post('/panel/customerData/add', adminControllers.addCustomer);
router.post('/panel/customerData/edit', adminControllers.editCustomer);
router.post('/panel/customerData/delete', adminControllers.deleteCustomer);
// router.post('/panel/depositData/add',adminControllers.addDeposit);

router.post('/panel/contactData/add', adminControllers.addContact);
router.post('/panel/contactData/edit', adminControllers.editContact);
router.post('/panel/contactData/delete', adminControllers.deleteContact);

router.post('/panel/reservationData/edit', adminControllers.editReservation);
router.post(
  '/panel/reservationData/delete',
  adminControllers.deleteReservation
);
router.post('/panel/reservationData/add', adminControllers.addReservation);

// router.use(require('express-fileupload')());

router.post('/panel/galleryData/add',adminControllers.addGalleryPhoto);
router.post('/panel/galleryData/delete',adminControllers.deleteGalleryPhoto);
router.post('/panel/galleryData/edit',adminControllers.editGallery);

router.post('/panel/breakfastData/add',adminControllers.addBreakfastPhoto);
router.post('/panel/breakfastData/delete',adminControllers.deleteBreakfastPhoto);
router.post('/panel/breakfastData/edit',adminControllers.editBreakfast);

router.post('/panel/dinnerData/add',adminControllers.addDinnerPhoto);
router.post('/panel/dinnerData/delete',adminControllers.deleteDinnerPhoto);
router.post('/panel/dinnerData/edit',adminControllers.editDinner);

router.post('/panel/ancData/add',adminControllers.addAnc);
router.post('/panel/ancData/delete',adminControllers.deleteAnc);
router.post('/panel/ancData/edit',adminControllers.editAnc);

module.exports = router;
