const Gallery = require('../models/gallery');
const Breakfast = require('../models/breakfast');
const Dinner = require('../models/dinner');
const fs = require('fs');

exports.getGalleryPhotos = async (req, res) => {
  const photos = await Gallery.findAll();
  const photoData = photos.map((p) => p.dataValues);
  return photoData;
};
exports.getBreakfastPhotos = async (req, res) => {
  const photos = await Breakfast.findAll();
  const photoData = photos.map((p) => p.dataValues);
  return photoData;
};

exports.getDinnerPhotos = async (req, res) => {
  const photos = await Dinner.findAll();
  const photoData = photos.map((p) => p.dataValues);
  return photoData;
};

exports.addGalleryPhoto = async (req, res) => {
  const imgDir = 'public/img/gallery/';
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
  }
  let uploadedImage = req.files.photo;
  let uploadPath = __dirname + '/../public/img/gallery/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    const newPhoto = await Gallery.create({
      image: uploadedImage.name,
      name: req.body.name,
    });
    console.log(newPhoto);
    return newPhoto;
  });
};

exports.addBreakfastPhoto = async (req, res) => {
  const imgDir = 'public/img/breakfast/';
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
  }
  let uploadedImage = req.files.photo;
  let uploadPath = __dirname + '/../public/img/breakfast/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    const newPhoto = await Breakfast.create({
      image: uploadedImage.name,
      name: req.body.name,
      price: req.body.price,
    });
    console.log(newPhoto);
    return newPhoto;
  });
};

exports.addDinnerPhoto = async (req, res) => {

  const imgDir = 'public/img/dinner/';
  if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
  }
  let uploadedImage = req.files.photo;
  let uploadPath = __dirname + '/../public/img/dinner/' + uploadedImage.name;

  uploadedImage.mv(uploadPath, async () => {
    const newPhoto = await Dinner.create({
      image: uploadedImage.name,
      name: req.body.name,
      price: req.body.price,
    });
    console.log(newPhoto);
    return newPhoto;
  });
};

exports.deleteGalleryPhoto = async (req, res) => {
  const deleted = await Gallery.findByPk(req.body.galleryid);
  let deletedPhoto = __dirname + '/../public/img/gallery/' + deleted.image;
  fs.unlinkSync(deletedPhoto);
  await deleted.destroy();
  return `${deleted.image} silindi`;
};
exports.deleteBreakfastPhoto = async (req, res) => {
  const deleted = await Breakfast.findByPk(req.body.breakfastid);
  let deletedPhoto = __dirname + '/../public/img/breakfast/' + deleted.image;
  fs.unlinkSync(deletedPhoto);
  await deleted.destroy();
  return `${deleted.image} silindi`;
};
exports.deleteDinnerPhoto = async (req, res) => {
  const deleted = await Dinner.findByPk(req.body.dinnerid);
  let deletedPhoto = __dirname + '/../public/img/dinner/' + deleted.image;
  fs.unlinkSync(deletedPhoto);
  await deleted.destroy();
  return `${deleted.image} silindi`;
};

exports.editBreakfast = async (req, res) => {
  const edited = await Breakfast.findOne({
    where: { id: req.body.breakfastid },
  });
  // edited.image = req.body.image;
  edited.name = req.body.name;
  edited.price = req.body.price;
  edited.save();
  return edited;
};

exports.editDinner = async (req, res) => {
  const edited = await Dinner.findOne({
    where: { id: req.body.dinnerid },
  });
  // edited.image = req.body.image;
  edited.name = req.body.name;
  edited.price = req.body.price;
  edited.save();
  return edited;

};

exports.editGallery = async (req, res) => {
  const edited = await Gallery.findOne({
    where: { id: req.body.galleryid },
  });
  // edited.image = req.body.image;
  edited.name = req.body.name;
  edited.save();
  return edited;
};
