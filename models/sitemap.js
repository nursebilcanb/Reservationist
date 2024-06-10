const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// Dinamik olarak oluşturmak istediğiniz URL'leri burada tanımlayın
const links = [
  { url: '/page/', changefreq: 'daily', priority: 1.0 },
  // Diğer URL'ler
];

const generateSitemap = async () => {
  const stream = new SitemapStream({ hostname: 'https://localhost:3000' });
  const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());
  return xmlString;
};

module.exports = { generateSitemap };
