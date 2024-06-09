const Deposit = require('../models/deposit');

// exports.addDeposit = async(req,res)=>{
//     const newDeposit = await Deposit.create({quantity :  req.body.quantity, date: req.body.date});
//     console.log("Depozito eklendi : " + newDeposit.quantity);
//     return newDeposit;
// }

exports.getTotalDepositByDate = async (req,res)=>{
    const deposits = await Deposit.findAll();
    const totalsByDate = deposits.reduce((acc, deposit) => {
    const date = deposit.date.toISOString().split('T')[0]; // YYYY-MM-DD formatında tarih
      
        if (!acc[date]) {
          acc[date] = 0;
        }
      
        acc[date] += deposit.quantity;
        return acc;
      }, {});
     console.log(totalsByDate);
      return totalsByDate;
}