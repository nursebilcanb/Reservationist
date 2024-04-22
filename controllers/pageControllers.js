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
exports.contactPage = (req,res)=>{
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
