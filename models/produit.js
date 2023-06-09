const mongoose = require('mongoose')

const schemaProduit = new mongoose.Schema({
    titre: {
        type: String,
        trim: true,
        unique: true
    },
    image: {
        type: String
    },
    categorie: {
        type: String
    },
    description: {
        type: String
    },
    prix: {
        type: String
    }
}) 
const Produit = mongoose.model('Produit', schemaProduit, 'produits')
module.exports = Produit;