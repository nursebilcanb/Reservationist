const { data } = require('jquery');
const Contact = require('../models/contact');
const Reservation = require('../models/reservation');

// exports.addContact = async (req, res) => {
//   const newContact = await Contact.create({
//     fullName: req.body.fullName,
//     email: req.body.email,
//     telNo: req.body.telNo,
//     subject: req.body.subject,
//     message: req.body.message,
//   });
//   console.log(`İletişim eklendi: ${newContact.fullName}`);
//   return newContact;
// };

exports.createContact = async(req,res)=>{
  try {
    console.log(req.body);
    await Contact.create({...req.body});
    res.render('contact-success.ejs');
  } catch (error) {
    console.error('Form gönderilirken bir hata oluştu:', error);
    res.status(500).send('Form gönderilirken bir hata oluştu.');
  }
}
exports.createReservation = async (req,res)=>{
  try{
    const success = true;
    const message = "Rezervasyonunuz Oluşturuldu";
    const error =  "Rezervasyonunuz Oluşturulamadı";
    await Reservation.create({...req.body});
    res.send({data:success,message:message,error:error});
   //res.render("reservation-success.ejs");
  }catch(error){
    console.error('Form gönderilirken bir hata oluştu:', error);
    res.status(500).send('Form gönderilirken bir hata oluştu.');
  }
}