const Contact = require('../models/contact');

exports.createContact = async(req,res)=>{
  try {
    console.log(req.body);
    await Contact.create({...req.body});
    res.render('contact-success.ejs',{pageTitle:'Contact Success'});
  } catch (error) {
    console.error('Form gönderilirken bir hata oluştu:', error);
    res.status(500).send('Form gönderilirken bir hata oluştu.');
  }
}
exports.getContacts = async (req, res) => {
    const contacts = await Contact.findAll();
    const contactData = contacts.map((contact) => contact.dataValues);
    console.log(contactData);
    return contactData;
};
  exports.editContact = async (req, res) => {
    const editedContact = await Customer.findOne({
      where: { id: req.params.id },
    });
    editedContact.fullName = req.body.fullName;
    editedContact.email = req.body.email;
    editedContact.telNo = req.body.telNo;
    editedContact.subject = req.body.subject;
    editedContact.message = req.body.message;
    editedContact.save();
    return editedContact;
  };