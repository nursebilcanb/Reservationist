const Contact = require('../models/contact');


exports.getContacts = async (req, res) => {
    const contacts = await Contact.findAll();
    const contactData = contacts.map((contact) => contact.dataValues);
    //console.log(contactData);
    return contactData;
};
  exports.editContact = async (req, res) => {
    const editedContact = await Contact.findOne({
      where: { id: req.body.contactid },
    });
    editedContact.fullName = req.body.fullName;
    editedContact.email = req.body.email;
    editedContact.telNo = req.body.telNo;
    editedContact.subject = req.body.subject;
    editedContact.message = req.body.message;
    editedContact.save();
    return editedContact;
  };

  exports.deleteContact = async (req,res)=>{
    const deletedContact = await Contact.findOne({
      where: { id: req.body.contactid },
    });
    console.log(deletedContact);
    deletedContact.destroy();
    return `${deletedContact.fullName} silindi`;
  }
  exports.addContact = async (req,res)=>{
    const newContact = await Contact.create({
      fullName: req.body.fullName,
      email: req.body.email,
      telNo: req.body.telNo,
      subject: req.body.subject,
      message: req.body.message
    });
    console.log(`İletişim eklendi: ${newContact.fullName}` );
    return newContact;
  }
  
 
