const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const csurf = require('csurf');
// const csrf = require('./middleware/csrf');
const fileUpload = require('express-fileupload');

const app = express();

const isAuth = require('./middleware/isAuth');
const configSession = require('./middleware/config_Session');

const pageRouter = require('./routes/page');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

const visitorController = require('./controllers/visitor');


app.set('view engine', ejs);
app.use((req, res, next) => {
  next();
});

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(visitorController.incrementVisitorCount);
app.get('/page',visitorController.getVisitorCount);
//midleware session
app.use(configSession);
app.use(cookieParser());
app.use(csurf());
app.use(express.static("public"));


// ROUTES
app.use('/page', pageRouter);
app.use('/admin',isAuth,adminRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
