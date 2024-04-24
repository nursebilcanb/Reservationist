const Reservation = require('../models/reservation');

exports.getReservations = async (req, res) => {
  const reservations = await Reservation.findAll();
  const reservationData = reservations.map(
    (reservation) => reservation.dataValues
  );
  console.log(reservationData);
  return reservationData;
};

exports.editReservation = async (req, res) => {
    const editedReservation = await Reservation.findOne({
      where: { id: req.params.id },
    });
    editedReservation.people = req.body.people;
    editedReservation.reservationDate = req.body.reservationDate;
    editedReservation.tableNo = req.body.tableNo;
    editedReservation.specialRequest = req.body.specialRequest;
    editedReservation.save();
    return editedReservation;
  };