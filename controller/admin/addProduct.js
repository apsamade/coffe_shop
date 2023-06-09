const Produit = require('../../models/produit')

exports.getAddProduct = (req, res, next)=>{
    const user = req.session.user
    let isAdmin = false;
    if((user.email === 'bouderga.abdessamade@gmail.com') || (user.email === 'lazard_0@protonmail.com' )){
        isAdmin = true;
        res.render('addProduct', {user, isAdmin})
    }else{
      isAdmin = false;
        res.sendStatus(401)
    }
}
exports.postAddProduct = async (req, res, next)=>{
    const { titre, description, categorie, prix, image } = req.body
    const produit = new Produit({
        titre: titre,
        image: image,
        categorie: categorie,
        description: description,
        prix: prix
    })
    produit.save()
        .then(()=>{
            console.log(`produits ${titre} bien enregistrer !`)
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err)
            res.redirect('/add-product')
        })
    
}