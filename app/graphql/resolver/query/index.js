import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
import ac from './../acl';
import { Error1, Error2, Error3, Error4 } from './../error';
const specialcase = require("./../specialcase")
const pubsub = new PubSub();

import _ from 'lodash';

var Restaurant = require('../../../models/models').Restaurant
var RestaurantType = require('../../../models/models').RestaurantType
var Event1 = require('../../../models/models').RestaurantEvent
var Menu = require('../../../models/models').Menu
var MenuCategory = require('../../../models/models').Menu_category
var Order = require('../../../models/models').Order
var User = require('../../../models/models').User
var Cupon = require('../../../models/models').Cupon
var Review = require('../../../models/models').Review
var Rate = require('../../../models/models').Rate
var OrderMenu = require('../../../models/models').OrderMenu
var Expenditure = require('../../../models/models').Expenditure
var Product = require('../../../models/models').Product
var ProductType = require('../../../models/models').ProductType
var Reservation = require('../../../models/models').Reservation

var testuser = {
  "level": "ADMIN",
  "working_restaurant": [
    {
      "position": "RES_WORKER",
      "restaurant_id":"12345"
    }
  ]
}


export const Query = {
    restaurants: (a, b, context, info) => {

      //ເຊັກເລເວວຂອງຢູເຊີ
      var lv = specialcase.checkLevel(testuser, "12345")
      //ເຊັກຄວາມສາມາດເຂົ້າເຖິງຂອງຢູເຊີ
      var permission = ac.can(lv.position).readAny("restaurants");
         
      if(permission.granted){ 
        return Restaurant.find();
      }else{ throw new Error1()}

    },
    restaurant: (root, { id }, context, info) => {
      //ເຊັກເລເວວຂອງຢູເຊີ
      var lv = specialcase.checkLevel(testuser, "12345")
      //ເຊັກຄວາມສາມາດເຂົ້າເຖິງຂອງຢູເຊີ
      var permission = ac.can(lv.position).readAny("restaurant");
      var case1 = specialcase.case1(testuser, info.path.key, id)
    
      if(permission.granted){
        if(case1){
          return Restaurant.findById(id);
        } else {
          throw new Error1()
        }
      }else{
        throw new Error1()
      }
    
    },
    restaurant_types: () => {
      var lv = specialcase.checkLevel(test, "12345")  // context is user obj
      var permission = ac.can(lv.position).readAny("restaurant");
      var case1 = specialcase.case1(test, info.path.key, id)  // TODO: change info
    
      if(permission.granted){
        if(case1){
          return RestaurantType.find();
        } else {
          throw new Error1()
        }
      }else{
        throw new Error1()
      }
    
    
    },
    restaurant_type: (root, { id }) => {
      return RestaurantType.findById(id);
    },
    events: (a, b, context, info) => {
      var lv = specialcase.checkLevel(testuser, "12345")  // context is user obj
      var permission = ac.can(lv.position).readAny("events");
      var case1 = specialcase.case1(testuser, info.path.key, "12345")
      if(permission.granted){
        if(case1){
          return Event1.find();
        } else {
          throw new Error1()
        }
      }else{
        throw new Error1()
      }
    },
    event: (root, { id },context, info) => {
      var lv = specialcase.checkLevel(testuser, "12345")  // context is user obj
      var permission = ac.can(lv.position).readAny("event");
      var case1 = specialcase.case1(testuser, info.path.key,id)
      if(permission.granted){
        if(case1){
          return Event1.findById(id);
        } else {
          throw new Error1()
        }
      }else{
        throw new Error1()
      }
     },
    menus: (a, b, context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("menus");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          console.log("permitted!")
          return Menu.find();
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Menu.find();
    },
    menu: (root, { id },context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("menu");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return Menu.findById(id);
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Menu.findById(id);
    },
    menu_categories: () => {
      return MenuCategory.find();
    },
    menu_category: (root, { id }) => {
      return MenuCategory.findById(id);
    },
    orders: (a, b, context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("orders");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          console.log("orders permitted!")
          return Order.find();
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Order.find();
    },
    order: (root, { barcode_id },context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="CLIENT" || lv.position=="GUEST"){
          var permission = ac.can(lv.position).readAny("order");
          var case2 = specialcase.case2(testuser,info.path.key,barcode_id)
          if(case2){
            console.log("case2 you are permitted!")
            return Order.findOne({'barcode_id':barcode_id});
          }else {
            throw new Error1()
          }

      }else{
        var permission = ac.can(lv.position).readAny("order");
        var case1 = specialcase.case1(testuser,info.path.key,barcode_id)
        console.log("id:",barcode_id)
        console.log("info.path.key:",info.path.key)
        if (permission.granted) {
          if(case1){
            console.log("orders permitted!")
            return Menu.findOne({'barcode_id':barcode_id});
          }else {
            throw new Error1()
          }
        }else {
          throw new Error1()
        }
      }

      //return Order.findById(id);
    },
    users: (a, b, context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("users");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      console.log(permission.granted)
      if (permission.granted) {
        if(case1){
          return User.find()
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      return User.find();
    },
    user: (root, { id },context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("user");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      var case2 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return User.findById(id);
        }else {
          throw new Error1()
        }
        if (case2) {
          return User.findById(id);
        } else {

        }
      }else {
        throw new Error1()
      }
      //return User.findById(id);
    },
    cupons: (a, b, context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("cupons");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          return Cupon.find()
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Cupon.find();
    },
    cupon: (root, { id },context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("cupon");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
           return Cupon.findById(id);
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Cupon.findById(id);
    },
    reviews: (a, b, context, info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("reviews");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          return Review.find();
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Review.find();
    },
    review: (root, { id },context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("review");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return Review.findById(id);
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Review.findById(id);
    },
    rate: (root, { id },context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("rate");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return Rate.findById(id);
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Rate.findById(id);
    },
    expenditures: (a,b,context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("expenditures");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          return Expenditure.find();
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Expenditure.find();
    },
    expenditure: (root, { id },context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("expenditure");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return Expenditure.findById(id);
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Expenditure.findById(id);
    },
    products: (a,b,context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("products");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          return Product.find();
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Product.find();
    },
    product: (root, { id },context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("product");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return Product.findById(id);
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Product.findById(id);
    },
    product_types: (a,b,context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("product_types");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          return ProductType.find();
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return ProductType.find();
    },
    product_type: (root, { id },context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("product_type");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return ProductType.findById(id);
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return ProductType.findById(id);
    },
    reservations: (a,b,context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("reservations");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){
          return Reservation.find();
        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Reservation.find();
    },
    reservation: (root, { id }) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("reservation");
      var case1 = specialcase.case1(testuser,info.path.key,id)
      if (permission.granted) {
        if(case1){
          return Reservation.findById(id);
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return Reservation.findById(id);
    },
  }
