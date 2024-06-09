module.exports = (req,res,next)=>{
    res.locals.csrfToken = req.csrfToken(); // Local değişken bütün ejsler erişim sağlar
    next();
}