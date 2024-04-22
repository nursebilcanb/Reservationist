const data = require('../models/data');
const customerData = data.customerData;

exports.getCustomerData = ((req,res)=>{
    res.render('admin/adminPanel.ejs',{contentTitle:'Admin Panel',pageTitle:'Admin Panel',data:customerData});
});