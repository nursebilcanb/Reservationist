const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

const pageRouter = require('./routes/page');
const adminRouter = require('./routes/admin');

app.set("view engine", ejs);
app.use((req,res,next)=>{
  next();
})
app.use('/static',express.static(path.join(__dirname,"public")));
app.use(express.static(path.join(__dirname,"node_modules")));
//app.use(express.static("public"));


// PAGES 
app.use("/user", pageRouter);
// app.get("/about.ejs", pageControllers.aboutPage);
// app.get("/service.ejs", pageControllers.servicePage);
// app.get("/menu.ejs", pageControllers.menuPage);
// app.get("/contact.ejs", pageControllers.contactPage);
// app.get("/booking.ejs", pageControllers.bookingPage);
// app.get("/team.ejs", pageControllers.teamPage);
// app.get("/testimonial.ejs", pageControllers.testimonialPage);

// ADMIN PAGEs
app.use("/admin",adminRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
