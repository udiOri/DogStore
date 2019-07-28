// CRUD code 
const express = require('express'),
productPageRoute = express.Router();

// Adding the DogStore model
let Product = require('../models/dogStore');

productPageRoute.route("/:id").get((req,res) =>{
    Product.findById(req.params.id, (err, Response) =>{
        if(err) res.status(400).json(err);
        else res.status(200).json(Response);
    });
});

productPageRoute.route("/get").get((req, res) => {
    Product.find((err, products) => {
        if (err) console.log('Could not Get');
        else res.json(products);
    });
});

module.exports = productPageRoute;