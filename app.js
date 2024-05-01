const express = require("express");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require('body-parser');
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
app.use(bodyParser.urlencoded({ extended: true }));



// ROUTES 
app.use("/user", pageRouter);
app.use("/admin",adminRouter);


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
