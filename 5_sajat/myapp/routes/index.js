var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Dashboard'
    });
});

/* GET products listing. */
router.get('/products', function (req, res, next) {
    var productsHandler = require('../model/products');
    productsHandler.getAll({}, function (data) {
        res.render('products', {
            title: 'Products',
            products: data
        });
    });
});

/* GET orders listing. */
router.get('/orders', function (req, res, next) {
    res.render('orders', {
        title: 'Orders'
    });
});

/* GET users listing. */
router.get('/users', function (req, res, next) {
    var userHandler = require('../model/user');
    userHandler.getAll({}, function (data) {
        if (!data) data = [];
        res.render('users', {
            title: 'Users',
            users: data
        });
    });
});

/* GET one product. */
router.get('/products/:id', function (req, res, next) {
    var productsHandler = require('../model/products');
    productsHandler.getOne({
        '_id': req.params.id
    }, function (data) {
        res.render('product', {
            data: data
        });
    });
});

module.exports = router;