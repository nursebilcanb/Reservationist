const express = require("express");
const router = express.Router();
const pageControllers = require('../controllers/pageControllers');
const contactControllers = require('../controllers/contact');

router.get('/index',pageControllers.homePage);
router.get('/about',pageControllers.aboutPage);
router.get('/service',pageControllers.servicePage);
router.get('/menu',pageControllers.menuPage);
router.get('/contact',pageControllers.contactPage);
router.post('/contact',contactControllers.createContact);
router.get('/booking',pageControllers.bookingPage);
router.get('/team',pageControllers.teamPage);
router.get('/testimonial',pageControllers.testimonialPage);

module.exports=router;






