'use strict'
var AccessControl = require('accesscontrol');


var grantList = [

    {
        role: ['DEVELOPER', 'ADMIN'],
        resources: '*',
        action: ['create:any', 'read:any', 'update:any', 'delete:any'],
        attributes: ['*']
    },
    // { role: 'DEVELOPER', resource: '*', action: 'create:any', attributes: ['*'] },
    // { role: 'DEVELOPER', resource: '*', action: 'read:any', attributes: ['*'] },
    // { role: 'DEVELOPER', resource: '*', action: 'update:any', attributes: ['*'] },
    // { role: 'DEVELOPER', resource: '*', action: 'delete:any', attributes: ['*'] },
    //
    // { role: 'ADMIN', resource: '*', action: 'create:any', attributes: ['*'] },
    // { role: 'ADMIN', resource: '*', action: 'read:any', attributes: ['*'] },
    // { role: 'ADMIN', resource: '*', action: 'update:any', attributes: ['*'] },
    // { role: 'ADMIN', resource: '*', action: 'delete:any', attributes: ['*'] },

    {
        role: ['CLIENT', 'GUEST'],
        resource: [
            'restaurant', 'restaurants',
            'event', 'event',
            'menu', 'menus',
            'category', 'categories',
            'cupon', 'cupons',
            'review', 'reviews', 'aadReview',
            'Rate', 'Rates', 'addRate'
        ],
        action: ['read:any', 'create:any'],
        attributes: ['*']
    },
    {
        role: ['CLIENT', 'GUEST'],
        resource: [
            'order', 'addOrder',
            'editReview', 'deleteReview',
            'editRate', 'deleteRate',
            'user', 'editUser'
        ],
        action: ['read:own', 'create:own', 'update:own', 'delete:own'],
        attributes: ['*']
    },
    {
        role: 'OWNER',
        resource: [
            'restaurant', 'restaurants',
            'category', 'categories',
            'product_type', 'product_types'
        ],
        action: 'read:any', attributes: ['*']
    },

    {
        role: 'OWNER',
        resource: [
            'editRestaurant',
            'event', 'events', 'addEvent', 'editEvent', 'deleteEvent',
            'menu', 'menus', 'addMenu', 'editMenu', 'deleteMenu',
            'order', 'orders', 'addOrder', 'editOrder', 'deleteOrder',
            'cupon', 'cupons', 'addCupon', 'editCupon', 'deleteCupon',
            'view', 'views',
            'Rate', 'Rates',
            'expenditure', 'expenditures', 'addExpenditure', 'editExpenditure', 'deleteExpenditure',
            'product', 'products', 'addProduct', 'editProduct', 'deleteProduct',
            'user', 'users', 'addUser', 'deleteUser'
        ],
        action: [
            'read:Restaurant', 'read:own',
            'create:Restaurant', 'create:own',
            'update:own', 'delete:own'],
        attributes: ['*']
    },
    {
        role: 'MANAGER',
        resources: [
            'restaurant',
            'event', 'events', 'addEvent', 'editEvent', 'deleteEvent',
            'menu_category', 'menu_categories',
            'product_type', 'product_types'
        ],
        action: ['read:any', 'create:any', 'update:any', 'delete:any'],
        attributes: ['*']
    },
    {
        role: 'MANAGER',
        resources: [
            'editRestaurant',
            'menu', 'menus', 'addMenu', 'editMenu', 'deleteMenu',
            'order', 'orders', 'addOrder', 'editOrder', 'deleteOrder',
            'cupon', 'cupons', 'addCupon', 'deleteCupon',
            'review', 'reviews', 'Rate', 'Rates',
            'expenditure', 'expenditures', 'addExpenditure', 'editExpenditure', 'deleteExpenditure',
            'product', 'products', 'addProduct', 'editProduct', 'deleteProduct',
            'user', 'users', 'addUser', 'editUser', 'deleteUser'
        ],
        action: [
            'read:Restaurant', 'read:own',
            'create:Restaurant', 'create:own',
            'update:Restaurant', 'update:own',
            'delete:Restaurant', 'delete:own'],
        attributes: ['*']
    },
    {
        role: 'WORKER',
        resources: [
            'menu_category', 'menu_categories',
            'product_type', 'product_types'
        ],
   action: 'read:any',
        attributes: ['*']
    },
    {
        role: 'WORKER',
        resources: [
            'restaurant',
            'menu', 'menus',
            'order', 'orders', 'addOrder', 'editOrder', 'deleteOrder',
            'cupon', 'cupons',
            'review', 'reviews', 'Rate', 'Rates',
            'product', 'products',
            'user', 'editUser'

        ],
   action: [
            'read:Restaurant',
            'read:own',
            'update:Restaurant',
            'update:own'
        ],
        attributes: ['*']
    }
];
var ac = new AccessControl(grantList);

export default ac; 