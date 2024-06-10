const express = require('express');
const router = express.Router();
const sitemapController = require('../controllers/sitemapController');

// Site haritası rotası
router.get('/sitemap.xml', sitemapController.getSitemap);

module.exports = router;
