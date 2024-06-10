const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Dinamik URL'leri eklemek için örnek veri kaynağı (örneğin, veritabanı sorgusu)
const getDynamicUrls = async () => {
  // Bu örnekte statik veriler kullanıyoruz, gerçek uygulamada veritabanından çekmeniz gerekecek

  const dynamicUrls = [];



  return dynamicUrls;
};

// Site haritası oluşturma işlevi
exports.getSitemap = async (req, res) => {
  try {
    // Statik URL'ler
    const staticUrls = [
        { url: '/admin/panel', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/customerData', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/reservationData', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/contactData', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/depositData', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/galleryData', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/breakfastData', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/dinnerData', changefreq: 'weekly', priority: 1.0 },
        { url: '/admin/panel/ancData', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/customerData/add', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/customerData/edit', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/customerData/delete', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/contactData/add', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/contactData/edit', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/contactData/delete', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/reservationData/add', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/reservationData/edit', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/reservationData/delete', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/galleryData/add', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/galleryData/edit', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/galleryData/delete', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/breakfastData/add', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/breakfastData/edit', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/breakfastData/delete', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/dinnerData/add', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/dinnerData/edit', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/dinnerData/delete', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/ancData/add', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/ancData/edit', changefreq: 'daily', priority: 1.0 },
        { url: '/admin/panel/ancData/delete', changefreq: 'daily', priority: 1.0 },
        { url: '/page/index', changefreq: 'daily', priority: 1.0 },
        { url: '/page/about', changefreq: 'daily', priority: 1.0 },
        { url: '/page/service', changefreq: 'daily', priority: 1.0 },
        { url: '/page/menu', changefreq: 'daily', priority: 1.0 },
        { url: '/page/contact', changefreq: 'daily', priority: 1.0 },
        { url: '/user/contact/add', changefreq: 'daily', priority: 1.0 },
        { url: '/user/reservation/add', changefreq: 'daily', priority: 1.0 },
        { url: '/user/deposit/add', changefreq: 'daily', priority: 1.0 },
        { url: '/auth/login', changefreq: 'daily', priority: 1.0 },
        { url: '/auth/signout', changefreq: 'daily', priority: 1.0 },




    ];

    // Dinamik URL'leri alın
    const dynamicUrls = await getDynamicUrls();

    // Tüm URL'leri birleştirin
    const urls = [...staticUrls, ...dynamicUrls];

    // SitemapStream'i kullanarak site haritası oluşturun
    const stream = new SitemapStream({ hostname: 'http://localhost:3000' });

    // URL'leri akışa yazın
    const xmlString = await streamToPromise(Readable.from(urls).pipe(stream)).then(data => data.toString());

    // Yanıt başlıklarını ayarlayın ve site haritasını gönderin
    res.header('Content-Type', 'application/xml');
    res.send(xmlString);
  } catch (error) {
    console.error('Site haritası oluşturulurken hata oluştu:', error);
    res.status(500).end();
  }
};