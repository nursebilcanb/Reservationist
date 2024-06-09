const Visitor = require('../models/visitor');

exports.incrementVisitorCount = async (req, res, next) => {
    try {
      let visitor = await Visitor.findByPk(1);
      if (!visitor) {
        visitor = await Visitor.create({ count: 1 });
      } else {
        visitor.count += 1;
        await visitor.save();
      }
  
      res.locals.visitorCount = visitor.count;
      next();
    } catch (error) {
      console.error('Error incrementing visitor count:', error);
      next(error);
    }
  };
  
  exports.getVisitorCount = async (req, res) => {
    try {
      const visitor = await Visitor.findByPk(1);
      const count = visitor ? visitor.count : 0;
      res.render('index', { visitorCount: count });
    } catch (error) {
      console.error('Error retrieving visitor count:', error);
      res.status(500).send('Error retrieving visitor count.');
    }
  };