const Gallery = require('../models/gallery');
const Breakfast = require('../models/breakfast');
const Dinner = require('../models/dinner');
const Announcement = require('../models/announcement');

const fs = require('fs');
const counterFile = '../counter.txt'

exports.aboutPage = async (req, res) => {
  const datas = await Gallery.findAll();
  const galleryData = datas.map((g)=>g.dataValues);
  console.log(galleryData)
  res.render('about.ejs',{pageTitle:'About Us',location:'ABOUT',data:galleryData});
};
exports.homePage = async (req,res)=>{
  const csrfToken = req.csrfToken();
  const datas = await Announcement.findAll();
  const ancData = datas.map((a)=>a.dataValues);
  res.render('index.ejs',{data:ancData,csrfToken:csrfToken});
}

exports.homePage = async (req,res)=>{
  fs.readFile(counterFile,'utf-8', (err,data)=>{
    if(err){
      console.error('Sayaç dosyası okunamadı: ',err);
      return res.status(500).send('Bir hata oluştu');
    }
    const visitorCount = parseInt(data);
    res.render("index.ejs",{visitorCount:visitorCount});
  });
}

exports.servicePage = (req,res)=>{
  res.render('service.ejs',{pageTitle:'Service',location:'SERVICE'});
}
exports.menuPage = async (req,res)=>{
  const bdatas = await Breakfast.findAll();
  const ddatas = await Dinner.findAll();
  const dinnerData = ddatas.map((d)=>d.dataValues);
  const breakfastData = bdatas.map((b)=>b.dataValues);
  res.render('menu.ejs', {pageTitle:'Menu',location:'MENU',breakfast:breakfastData,dinner:dinnerData});
}
exports.contactPage = async (req,res)=>{
  const csrfToken = req.csrfToken();

  // if(req.body != null){
  //   console.log(req.body);
  //   await Contact.create(req.body);
  //   //res.redirect('index');
  // }
  res.render('contact.ejs',{pageTitle:'Contact',location:'CONTACT',csrfToken:csrfToken});
}
exports.bookingPage = (req,res)=>{
  res.render('booking.ejs');
}
exports.teamPage = (req,res)=>{
  res.render('team.ejs');
}
exports.testimonialPage = (req,res)=>{
  res.render('testimonial.ejs');
}
