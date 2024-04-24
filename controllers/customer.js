const Customer = require('../models/customer');

exports.getCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  const customerData = customers.map((customer) => customer.dataValues);
  console.log(customerData);
  return customerData;
};
exports.editCustomer = async (req, res) => {
  const editedCustomer = await Customer.findOne({
    where: { id: req.params.id },
  });
  editedCustomer.fullName = req.body.fullName;
  editedCustomer.email = req.body.email;
  editedCustomer.telNo = req.body.telNo;
  editedCustomer.save();
  return editedCustomer;
};
