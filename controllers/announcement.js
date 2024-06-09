const Announcement = require('../models/announcement');
const fs = require('fs');

exports.getAll = async (req,res)=>{
    const datas = await Announcement.findAll();
    const anc = datas.map((a)=>a.dataValues) ;
    return anc;
}

exports.addAnc = async(req,res)=>{
    const imgDir = 'public/img/anc/';
    if (!fs.existsSync(imgDir)) {
      fs.mkdirSync(imgDir);
    }
    let uploadedImage = req.files.photo;
    let uploadPath = __dirname + '/../public/img/anc/' + uploadedImage.name;
  
    uploadedImage.mv(uploadPath, async () => {
      const newAnc = await Announcement.create({
        title: req.body.title,
        image: uploadedImage.name,
        content: req.body.content,
      });
      console.log(newAnc);
      return newAnc;
    }); 
}

exports.deleteAnc = async (req,res)=>{
    const deleted = await Announcement.findByPk(req.body.ancid);
    let deletedPhoto = __dirname + '/../public/img/anc/' + deleted.image;
    fs.unlinkSync(deletedPhoto);
    await deleted.destroy();
    return `${deleted.image} silindi`;
}

exports.editAnc = async (req,res)=>{
    const edited = await Announcement.findByPk(req.body.ancid);
    edited.title = req.body.title;
    //edited.image = req.body.image;
    edited.content = req.body.content;
    edited.save();
    return edited;

}