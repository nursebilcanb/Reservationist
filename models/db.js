const {Sequelize}=require("sequelize"); 
const config = require('../config/config.json')
const Breakfast = require('./breakfast');

const db = new Sequelize(config.database,config.username,config.password,{
    host:config.development.host,
    dialect:config.development.dialect
});
const sequelize = new Sequelize(config.development);
async function syncDatabase() {
    try {
      await sequelize.authenticate();
      console.log('Veritabanına başarılı bir şekilde bağlanıldı.');
  
      // Modelinizi senkronize edin
      await Breakfast.sync({ alter: true });
      console.log('Breakfast tablosu senkronize edildi.');
  
    } catch (error) {
      console.error('Veritabanına bağlanırken bir hata oluştu:', error);
    }
  }

async function connect(){
    try {
        await db.authenticate();
        console.log('Veri tabanına Bağlandı');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
syncDatabase();
//connect();
module.exports = db;