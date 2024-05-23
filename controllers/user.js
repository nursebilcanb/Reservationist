const { Op, STRING, INTEGER } = require('sequelize');

const Contact = require('../models/contact');
const Reservation = require('../models/reservation');
const { error, data } = require('jquery');

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

exports.createContact = async (req, res) => {
  try {
    console.log(req.body);
    await Contact.create({ ...req.body });
    res.render('contact-success.ejs');
  } catch (error) {
    console.error('Form gönderilirken bir hata oluştu:', error);
    res.status(500).send('Form gönderilirken bir hata oluştu.');
  }
};
exports.createReservation = async (req, res) => {
  try {
    const success = true;
    const message = 'Rezervasyonunuz Oluşturuldu';
    const error = 'Rezervasyonunuz Oluşturulamadı';

    await Reservation.create({ ...req.body });
    res.send({ data: success, message: message, error: error });

    //res.render("reservation-success.ejs");
  } catch (error) {
    console.error('Form gönderilirken bir hata oluştu:', error);
    res.status(500).send('Form gönderilirken bir hata oluştu.');
  }
};

exports.controlReservation = async (req, res) => {
  const splitedTime = req.body.time.split(':');
  const hourString = splitedTime[0];
  const minString = splitedTime[1];

  let min = parseInt(minString, 10);
  let hour = parseInt(hourString, 10);

  const nextMin = min + 45;
  //const pastMin = min -45;

  console.log('nextmin :  ' + nextMin);

  if (nextMin > 60) {
    hour = hour + 1;
    min = nextMin - 60;
  } else {
    min = nextMin;
  }
  const newTime = [hour, min].join(':');
  console.log('newTime  :  ' + newTime);

  const isExist = await Reservation.findOne({
    where: {
      tableNo: req.body.tableNo,
      date: req.body.date,
      time: { [Op.between]: [req.body.time, newTime] },
    },
  });

  const success = true;
  if (isExist != null) {
    console.log('müsait değil');
    success = false;
    return res.send({ data: success });
  }
  return res.send({ data: success });
};
