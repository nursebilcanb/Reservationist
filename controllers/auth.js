const bcrypt = require('bcrypt');
const Admin = require('../models/admin');

exports.getLogin = (req, res, next) => {
  const csrfToken = req.csrfToken();
  console.log('csrf..', csrfToken);

  res.render('admin/auth/index.ejs', {
    pageTitle: 'Login',
    contentTitle: 'Login',
    message: req.session.message,
    // authInfo: { email, password },
    csrfToken: csrfToken,
  });
};

exports.postRegisterPage = async function (req, res, next) {
  try {
    console.log('registerr');
    const salt = await bcrypt.genSalt(10);
    var usr = {
      name: 'Nursebil',
      surname: 'CANBOLAT',
      email: 'nurs@gmail.com',
      password: await bcrypt.hash('admin', salt),
    };
    created_user = await Admin.create(usr);
    res.status(201).json(created_user);
  } catch (error) {
    let errors2 = {};

    if (error.name === 'SequelizeValidationError') {
      Object.keys(error.errors).forEach((a) => {
        errors2[error.errors[a].path] = error.errors[a].message;
      });
    }

    console.log(errors2);
    res.status(400).json(errors2);
  }
};

exports.postLogin = async (req, res, next) => {
  const admin = await Admin.findAll({
    where: {
      email: req.body.email,
    },
    raw: true,
  });
  console.log('adminn ', admin);

  if (admin.length == 0) {
    req.session.message = { text: 'Email hatalı', class: 'warning' };
    console.log('mesaj1 = ', req.session.message);
    return res.redirect('login');
  }
  console.log(admin[0].password);
  console.log(
    `body password: ${req.body.password} , admin password:  ${admin[0].password}`
  );
  if (await bcrypt.compare(req.body.password, admin[0].password)) {
    // şifre uyuşuyorsa
    req.session.isAuth = 1;
    req.session.adminid = admin[0].id;

    const url = req.query.url || '/admin/panel'; //req.query.url varsa onu yoksa "/admin/panel" url olarak kabul et.
    return res.redirect(url);
  }

  //şifre uyuşmuyorsa
  req.session.message = { text: 'Şifre hatalı', class: 'warning' };
  return res.redirect('login');

};

exports.signOut = async (req, res, next) => {
  await req.session.destroy(); //session temizle
  res.redirect('/admin/panel'); //ana sayfaya git
};
