exports.aboutPage = (req, res) => {
  res.render('about.ejs');
};
exports.homePage = (req,res)=>{
  res.render('index.ejs');
}
exports.servicePage = (req,res)=>{
  res.render('service.ejs');
}
exports.menuPage = (req,res)=>{
  res.render('menu.ejs');
}
exports.contactPage = async (req,res)=>{
  // if(req.body != null){
  //   console.log(req.body);
  //   await Contact.create(req.body);
  //   //res.redirect('index');
  // }
  res.render('contact.ejs');
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
