const Produit = require('../../models/produit')
exports.getHome = async (req, res, next)=>{
    const user = req.session.user
    let isAdmin = false;
    if(user){
        if((user.email === 'bouderga.abdessamade@gmail.com') || (user.email === 'lazard_0@protonmail.com' )){
            isAdmin = true;
        }else{
            isAdmin = false;
        }
    }
    try {
        const produits = await Produit.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
        res.render('home', { user, isAdmin, produits });
      } catch (err) {
        console.log(err);
      }
}
exports.postHome = (req, res, next)=>{
    
}