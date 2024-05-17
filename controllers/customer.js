const Customer = require('../models/customer');

exports.getCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  const customerData = customers.map((customer) => customer.dataValues);
  //console.log(customerData);
  return customerData;
};
exports.editCustomer = async (req, res) => {
  const editedCustomer = await Customer.findOne({
    where: { id: req.body.customerid },
  });
  editedCustomer.fullName = req.body.fullName;
  editedCustomer.email = req.body.email;
  editedCustomer.telNo = req.body.telNo;
  console.log(editedCustomer);
  editedCustomer.save();
  return editedCustomer;
};
exports.deleteCustomer = async (req,res)=>{
  const deletedCustomer = await Customer.findOne({
    where: { id: req.body.customerid },
  });
  console.log(deletedCustomer);
  deletedCustomer.destroy();
  return `${deletedCustomer.fullName} silindi`;
};

exports.addCustomer = async (req,res)=>{
  const newCustomer = await Customer.create({
    fullName:req.body.fullName,
    email:req.body.email,
    telNo:req.body.telNo
  });
  console.log(`Kullanıcı eklendi: ${newCustomer.fullName}` );
  return newCustomer;
}