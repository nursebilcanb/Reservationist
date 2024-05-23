const Reservation = require('../models/reservation');

exports.getReservations = async (req, res) => {
  const reservations = await Reservation.findAll();
  const reservationData = reservations.map(
    (reservation) => {
      let date = reservation.dataValues.date;
      reservation.dataValues.formattedDate = date.toISOString().split('T')[0];
      return reservation.dataValues;
    }
    //   {
    //   reservation.id,
    //   reservation.tableNo,
    //   reservation.date,
    //   reservation.time,
    //   reservation.fullName,
    //   reservation.people,
    //   reservation.email,
    //   reservation.telNo,
    //   reservation.specialRequest
    // }
  );
 //console.log(reservationData);
  return reservationData;
};

exports.editReservation = async (req, res) => {
  const editedReservation = await Reservation.findOne({
    where: { id: req.body.reservationid },
  });
  editedReservation.tableNo = req.body.tableNo;
  editedReservation.date = req.body.date;
  editedReservation.time = req.body.time;
  editedReservation.fullName = req.body.fullName;
  editedReservation.people = req.body.people;
  editedReservation.email = req.body.email;
  editedReservation.telNo = req.body.telNo;
  editedReservation.specialRequest = req.body.specialRequest;
  editedReservation.save();
  return editedReservation;
};

exports.deleteReservation = async (req, res) => {
  const deletedReservation = await Reservation.findOne({
    where: { id: req.body.reservationid },
  });
  deletedReservation.destroy();
  return `${deletedReservation.fullName} silindi`;
};
exports.addReservation = async (req,res)=>{
  const newReservation = await Reservation.create({
    tableNo: req.body.tableNo,
    date: req.body.date,
    time: req.body.time,
    fullName:req.body.fullName,
    people: req.body.people,
    email:req.body.email,
    telNo:req.body.telNo,
    specialRequest:req.body.specialRequest
  });
  console.log(`Rezervasyon eklendi: ${newReservation.fullName}` );
  return newReservation;
}