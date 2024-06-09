const data = require('../models/data');
const customerControllers = require('./customer');
const reservationControllers = require('./reservation');
const contactControllers = require('./contact');
const depositControllers = require('./deposit');
const photoControllers = require('./photo');
const announcementControllers = require('./announcement');

exports.getPanel = async (req, res) => {
  const csrfToken = req.csrfToken();
  res.render('admin/adminPanel.ejs', {
    pageTitle: 'Admin Panel',
    contentTitle: 'Admin Paneli',
    data: await customerControllers.getCustomers(req, res),
    csrfToken:csrfToken
  });
};
exports.getCustomerData = async (req, res) => {
  const csrfToken = req.csrfToken();

  res.render('admin/customerData.ejs', {
    contentTitle: 'Kullanıcılar',
    pageTitle: 'Admin Panel',
    data: await customerControllers.getCustomers(req, res),
    csrfToken:csrfToken
  });
};
exports.getReservationData = async (req, res) => {
  const csrfToken = req.csrfToken();

  res.render('admin/reservationData.ejs', {
    contentTitle: 'Reservasyon Yaptıranlar',
    pageTitle: 'Admin Panel',
    data: await reservationControllers.getReservations(req, res),
    csrfToken: csrfToken
  });
};
exports.getContactData = async (req, res) => {
  const csrfToken = req.csrfToken();

  res.render('admin/contactData.ejs', {
    contentTitle: 'İletişime Geçenler',
    pageTitle: 'Admin Panel',
    data: await contactControllers.getContacts(req, res),
    csrfToken: csrfToken
  });
};

exports.getGalleryData = async (req, res) => {
  const csrfToken = req.csrfToken();

  res.render('admin/galleryData.ejs', {
    contentTitle: 'Galeri Fotoğrafları',
    pageTitle: 'Admin Page',
    data: await photoControllers.getGalleryPhotos(req, res),
    csrfToken: csrfToken
  });
};
exports.getBreakfastData = async (req, res) => {
  const csrfToken = req.csrfToken();

  res.render('admin/breakfastData.ejs', {
    contentTitle: 'Kahvaltı Fotoğrafları',
    pageTitle: 'Admin Page',
    data: await photoControllers.getBreakfastPhotos(req, res),
    csrfToken: csrfToken
  });
};
exports.getDinnerData = async (req, res) => {
  const csrfToken = req.csrfToken();

  res.render('admin/dinnerData.ejs', {
    contentTitle: 'Akşam Yemeği Fotoğrafları',
    pageTitle: 'Admin Page',
    data: await photoControllers.getDinnerPhotos(req, res),
    csrfToken: csrfToken
  });
};

exports.getAnnouncementData = async (req,res)=>{
  const csrfToken = req.csrfToken();

  res.render('admin/ancData.ejs',{
    contentTitle:'Duyuru',
    pageTitle:'Admin',
    data: await announcementControllers.getAll(req,res),
    csrfToken: csrfToken
  })
}
exports.getTotalDepositByDate = async (req, res) => {
  const csrfToken = req.csrfToken();

  const procCompleted = await depositControllers.getTotalDepositByDate(
    req,
    res
  );
  console.log('total deposit by date : ' + procCompleted);
  res.render('admin/cashDesk.ejs', {
    contentTitle: 'Kasa',
    pageTitle: 'Admin Panel',
    data: await depositControllers.getTotalDepositByDate(req, res),
    csrfToken: csrfToken
  });
};

exports.editCustomer = async (req, res) => {
  const procCompleted = await customerControllers.editCustomer(req, res);
  console.log('Kullanici basariyla duzenlendi : ' + procCompleted);
  // res.render('admin/customer-edit.ejs',{pageTitle:'Admin Panel',contentTitle:'Kullanıcı Düzenle',data:procCompleted});
  res.redirect('/admin/panel/customerData');
};
exports.editContact = async (req, res) => {
  const procCompleted = await contactControllers.editContact(req, res);
  console.log('Iletisim basariyla duzenlendi : ' + procCompleted);
  res.redirect('/admin/panel/contactData');
};

exports.editReservation = async (req, res) => {
  const procCompleted = await reservationControllers.editReservation(req, res);
  console.log('Rezervasyon bilgileri basariyla duzenlendi : ' + procCompleted);
  res.redirect('/admin/panel/reservationData');
};

exports.editBreakfast = async (req,res)=>{
  const procCompleted = await photoControllers.editBreakfast(req,res);
  console.log('Breakfast bilgileri basariyla guncellendi: ' + procCompleted);
  res.redirect('/admin/panel/breakfastData');
}
exports.editDinner = async (req,res)=>{
  const procCompleted = await photoControllers.editDinner(req,res);
  console.log('Dinner bilgileri basariyla guncellendi: ' + procCompleted);
  res.redirect('/admin/panel/dinnerData');
}

exports.editGallery = async (req,res)=>{
  const procCompleted = await photoControllers.editGallery(req,res);
  console.log('Gallery bilgileri basariyla guncellendi: ' + procCompleted);
  res.redirect('/admin/panel/galleryData');
}

exports.editAnc = async(req,res)=>{
  const procCompleted = await announcementControllers.editAnc(req,res);
  console.log('Duyuru güncellendi' + procCompleted);
  res.redirect('/admin/panel/ancData');
}
exports.deleteCustomer = async (req, res) => {
  const procCompleted = await customerControllers.deleteCustomer(req, res);
  console.log('Kullanici basariyla silindi : ' + procCompleted);
  res.redirect('/admin/panel/customerData');
};

exports.deleteContact = async (req, res) => {
  const procCompleted = await contactControllers.deleteContact(req, res);
  console.log('Iletisim basariyla silindi : ' + procCompleted);
  res.redirect('/admin/panel/contactData');
};

exports.deleteReservation = async (req, res) => {
  const procCompleted = await reservationControllers.deleteReservation(
    req,
    res
  );
  console.log('Rezervasyon basariyla silindi : ' + procCompleted);
  res.redirect('/admin/panel/reservationData');
};
exports.deleteGalleryPhoto = async (req, res) => {
  const procCompleted = await photoControllers.deleteGalleryPhoto(req, res);
  console.log('Gallery photo silindi' + procCompleted);
  res.redirect('/admin/panel/galleryData');
};
exports.deleteBreakfastPhoto = async (req, res) => {
  const procCompleted = await photoControllers.deleteBreakfastPhoto(req, res);
  console.log('Breakfast photo silindi' + procCompleted);
  res.redirect('/admin/panel/breakfastData');
};
exports.deleteDinnerPhoto = async (req, res) => {
  const procCompleted = await photoControllers.deleteDinnerPhoto(req, res);
  console.log('Dinner photo silindi' + procCompleted);
  res.redirect('/admin/panel/dinnerData');
};

exports.deleteAnc = async (req,res)=>{
  const procCompleted = await announcementControllers.deleteAnc(req,res);
  console.log('Duyuru silindi ' + procCompleted);
  res.redirect('/admin/panel/ancData');
}
exports.addCustomer = async (req, res) => {
  const procCompleted = await customerControllers.addCustomer(req, res);
  console.log('Kullanici basariyla eklendi : ' + procCompleted);
  res.redirect('/admin/panel/customerData');
};
exports.addContact = async (req, res) => {
  const procCompleted = await contactControllers.addContact(req, res);
  console.log('Iletisim basariyla eklendi : ' + procCompleted);
  res.redirect('/admin/panel/contactData');
};

exports.addReservation = async (req, res) => {
  const procCompleted = await reservationControllers.addReservation(req, res);
  console.log('Rezervasyon basariyla eklendi : ' + procCompleted);
  res.redirect('/admin/panel/reservationData');
};

exports.addGalleryPhoto = async (req, res) => {
  const procCompleted = await photoControllers.addGalleryPhoto(req, res);
  console.log('Gallery fotograf basariyla eklendi : ' + procCompleted);
  res.redirect('/admin/panel/galleryData');
};
exports.addBreakfastPhoto = async (req, res) => {
  const procCompleted = await photoControllers.addBreakfastPhoto(req, res);
  console.log('Breakfast fotograf basariyla eklendi : ' + procCompleted);
  res.redirect('/admin/panel/breakfastData');
};

exports.addDinnerPhoto = async (req, res) => {
  const procCompleted = await photoControllers.addDinnerPhoto(req, res);
  console.log('Dinner fotograf basariyla eklendi : ' + procCompleted);
  res.redirect('/admin/panel/dinnerData');
};

exports.addAnc = async (req,res)=>{
  const procCompleted = await announcementControllers.addAnc(req,res);
  console.log('Duyuru basariyla eklendi' + procCompleted);
  res.redirect('/admin/panel/ancData');
}