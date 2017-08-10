'use strict'
var AccessControl = require('accesscontrol');


 var grantList = [

    // DEVELOPER, ADMIN acess list
     {
        role: 'DEVELOPER',
        resource: ['*'],
        action: 'read:any',
        attributes: ['*']
    },
    {
       role: 'ADMIN',
       resource: ['addRestaurant','restaurant','restaurants','restaurant_types','restaurant_type','users','events','menus','menu','addOrder','orders','order','*'],
       action: 'read:any',
       attributes: ['*']
   },
     // Client access list
    {
        role: 'CLIENT',
        resource: [
            'restaurant', 'restaurants',
            'events', 'event',
            'menu', 'menus',
            'category', 'categories',
            'order', 'addOrder',
            'cupon', 'cupons',
            'review', 'reviews', 'aadReview',
            'editReview', 'deleteReview',
            'Rate', 'Rates', 'addRate',
            'editRate', 'deleteRate',
            'user', 'editUser'
        ],
        action: 'read:any',
        attributes: ['*']
    },

    //Guest access list
    {
        role: 'GUEST',
        resource: [
            'restaurant', 'restaurants',
            'events', 'event',
            'menu', 'menus',
            'category', 'categories',
            'order', 'addOrder',
            'cupon', 'cupons',
            'review', 'reviews',
            'Rate', 'Rates'
        ],
        action: 'read:any',
        attributes: ['*']
    },

    // owner access list
    {
        role: 'RES_OWNER',
        resource: [
            'restaurant',
            'product_type', 'product_types',
            'editRestaurant',
            'event', 'events', 'addEvent', 'editEvent', 'deleteEvent',
            'menu', 'menus', 'addMenu', 'editMenu', 'deleteMenu',
            'category', 'categories',
            'order', 'orders', 'addOrder', 'editOrder', 'deleteOrder',
            'cupon', 'cupons', 'addCupon', 'editCupon', 'deleteCupon',
            'view', 'views',
            'Rate', 'Rates',
            'expenditure', 'expenditures', 'addExpenditure', 'editExpenditure', 'deleteExpenditure',
            'product', 'products', 'addProduct', 'editProduct', 'deleteProduct',
            'user', 'users', 'addUser', 'deleteUser'
        ],
        action: 'read:any',
        attributes: ['*']
    },

    // mangaer access list
    {
        role: 'RES_MANAGER',
        resource: [
            'restaurant',
            'event', 'events', 'addEvent', 'editEvent', 'deleteEvent',
            'menu_category', 'menu_categories',
            'editRestaurant',
            'menu', 'menus', 'addMenu', 'editMenu', 'deleteMenu',
            'product_type', 'product_types',
            'order', 'orders', 'addOrder', 'editOrder', 'deleteOrder',
            'cupon', 'cupons', 'addCupon', 'deleteCupon',
            'review', 'reviews', 'Rate', 'Rates',
            'expenditure', 'expenditures', 'addExpenditure', 'editExpenditure', 'deleteExpenditure',
            'product', 'products', 'addProduct', 'editProduct', 'deleteProduct',
            'user', 'users', 'addUser', 'editUser', 'deleteUser'
        ],
        action: 'read:any',
        attributes: ['*']
    },

    // Worker access list
    {
        role: 'RES_WORKER',
        resource: [
            'menu_category', 'menu_categories',
            'product_type', 'product_types',
            'restaurant',
            'menu', 'menus',
            'order', 'orders', 'addOrder', 'editOrder', 'deleteOrder',
            'cupon', 'cupons',
            'review', 'reviews', 'Rate', 'Rates',
            'product', 'products',
            'user', 'editUser'
        ],
        action: 'read:any',
        attributes: ['*']
    }
];



 var ac = new AccessControl(grantList);

export default ac;
