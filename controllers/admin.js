const data = require('../models/data');
const customerControllers = require('./customer');
const reservationControllers = require('./reservation');
const contactControllers = require('./contact');


exports.getPanel = (async (req,res)=>{
    res.render('admin/adminPanel.ejs',{pageTitle:'Admin Panel',contentTitle:'Admin Paneli',data:await customerControllers.getCustomers(req,res)});
})
exports.getCustomerData = (async (req,res)=>{
    res.render('admin/customerData.ejs',{contentTitle:'Kullanıcılar',pageTitle:'Admin Panel',data:await customerControllers.getCustomers(req,res)});
});
exports.getReservationData = (async (req,res)=>{
    res.render('admin/reservationData.ejs',{contentTitle:'Reservasyon Yaptıranlar',pageTitle:'Admin Panel',data:await reservationControllers.getReservations(req,res)});
});
exports.getContactData = (async(req,res)=>{
    res.render('admin/contactData.ejs',{contentTitle:'İletişime Geçenler',pageTitle:'Admin Panel',data:await contactControllers.getContacts(req,res)});
});

exports.editCustomer = (async(req,res)=>{
    const procCompleted = await customerControllers.editCustomer(req,res);
    console.log("Kullanici basariyla duzenlendi : "+procCompleted);
    res.render('admin/customer-edit.ejs',{pageTitle:'Admin Panel',contentTitle:'Kullanıcı Düzenle',data:procCompleted});
    //res.redirect('/admin/panel/customerData');
})  