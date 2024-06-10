const express = require("express");
const router = express.Router();
const pageControllers = require('../controllers/pageControllers');
const fs = require('fs');
const counterFile = '../counter.txt';

router.get('/index',pageControllers.homePage);
router.get('/index', (req,res)=>{
    fs.readFile(counterFile, 'utf8', (err, data) => {
        if (err) {
          console.error('Sayaç dosyası okunamadı:', err);
          return res.status(500).send('Bir hata oluştu');
        }
    
        const visitorCount = parseInt(data);
        res.render('page/index', { visitorCount:visitorCount });
  });
  
});

router.get('/about',pageControllers.aboutPage);
router.get('/service',pageControllers.servicePage);
router.get('/menu',pageControllers.menuPage);
router.get('/contact',pageControllers.contactPage);

router.get('/booking',pageControllers.bookingPage);
router.get('/team',pageControllers.teamPage);
router.get('/testimonial',pageControllers.testimonialPage);

module.exports=router;






