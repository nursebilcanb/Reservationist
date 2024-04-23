const data = require('../models/data');
const customerData = data.customerData;
const reservationData = data.reservationData;
const contactData = data.contactData;

exports.getPanel = ((req,res)=>{
    res.render('admin/adminPanel.ejs',{pageTitle:'Admin Panel',contentTitle:'Admin Paneli',data:customerData});
})
exports.getCustomerData = ((req,res)=>{
    res.render('admin/customerData.ejs',{contentTitle:'Müşteriler',pageTitle:'Admin Panel',data:customerData});
});
exports.getReservationData = ((req,res)=>{
    res.render('admin/reservationData.ejs',{contentTitle:'Reservasyon Yaptıranlar',pageTitle:'Admin Panel',data:reservationData});
});
exports.getContactData = ((req,res)=>{
    res.render('admin/contactData.ejs',{contentTitle:'İletişime Geçenler',pageTitle:'Admin Panel',data:contactData});
});