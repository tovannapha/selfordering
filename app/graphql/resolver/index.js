import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
import ac from './acl';
import { Error1, Error2, Error3, Error4 } from './error';
const specialcase = require("./specialcase")
const pubsub = new PubSub();

import _ from 'lodash';

var Restaurant = require('../../models/models').Restaurant
var RestaurantType = require('../../models/models').RestaurantType
var Event1 = require('../../models/models').RestaurantEvent
var Menu = require('../../models/models').Menu
var MenuCategory = require('../../models/models').Menu_category
var Order = require('../../models/models').Order
var User = require('../../models/models').User
var Cupon = require('../../models/models').Cupon
var Review = require('../../models/models').Review
var Rate = require('../../models/models').Rate
var OrderMenu = require('../../models/models').OrderMenu
var Expenditure = require('../../models/models').Expenditure
var Product = require('../../models/models').Product
var ProductType = require('../../models/models').ProductType
var Reservation = require('../../models/models').Reservation

var testuser = {
  "level": "ADMIN",
  "working_restaurant": [
    {
      "position": "RES_WORKER",
      "restaurant_id":"12345"
    }
  ]
}


export const resolvers = {
  Query: {
    restaurants: (a, b, context, info) => {
<<<<<<< HEAD
      //ເຊັກເລເວວຂອງຢູເຊີ
      var lv = specialcase.checkLevel(test, "12345")
      //ເຊັກຄວາມສາມາດເຂົ້າເຖິງຂອງຢູເຊີ
      var permission = ac.can(lv.position).readAny("restaurants");
         
      if(permission.granted){ 
        return Restaurant.find();
      }else{ throw new Error1()}
=======
    
      var lv = specialcase.checkLevel(testuser, "12345")
      var permission = ac.can(lv.position).readAny("restaurants");
    
      if(permission.granted){
        return Restaurant.find();
      }else{ throw new Error1()}
    
>>>>>>> a66c66e3ffd74c0d38d16444a58d09d19ad48c8d
    },
    restaurant: (root, { id }, context, info) => {
      //ເຊັກເລເວວຂອງຢູເຊີ
      var lv = specialcase.checkLevel(test, "12345")
      //ເຊັກຄວາມສາມາດເຂົ້າເຖິງຂອງຢູເຊີ
      var permission = ac.can(lv.position).readAny("restaurant");
<<<<<<< HEAD

      var case1 = specialcase.case1(testuser, info.path.key, id)  

=======
      var case1 = specialcase.case1(testuser, info.path.key, id)
    
>>>>>>> a66c66e3ffd74c0d38d16444a58d09d19ad48c8d
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
          return Menu.find();
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
            return Menu.findOne({'barcode_id':barcode_id});
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
  },
  Mutation: {
    addRestaurant: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return Restaurant.create(args.data);
      }else {
        throw new Error1();
      }
      //return Restaurant.create(args.data)
    },
    editRestaurant: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Restaurant.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("editRestaurant");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Restaurant.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
  
      //return await Restaurant.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteRestaurant: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Restaurant.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else {
        throw new Error1;
      }
  
    },
  //
    addRestaurantType: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return RestaurantType.create(args.data)
      }else {
        throw new Error1;
      }
      //return RestaurantType.create(args.data)
    },
    editRestaurantType: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await RestaurantType.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
      }else {
        throw new Error1()
      }
      //return await RestaurantType.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteRestaurantType: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await RestaurantType.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else {
        throw new Error1;
      }
    },

    addEvent: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return Event1.create(args.data)
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER" || lv.position=="RES_WORKER"){
        var permission = ac.can(lv.position).readAny("addEvent");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return Event1.create(args.data);
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return Event1.create(args.data)
    },
    editEvent: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Event1.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER" || lv.position=="RES_WORKER"){
        var permission = ac.can(lv.position).readAny("editEvent");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Event1.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Event1.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
    
    },
    deleteEvent: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await Event1.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          console.log("Admin is ok")
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("deleteEvent");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            await Event1.findByIdAndRemove(args.id, (err,x)=> {
              if(err){
                return "Error on delete"
              }
              var res_msg = "Successfully delete"
              return res_msg
            })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      await Event1.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addMenu: async (root, args,context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return Menu.create(args.data);
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("addMenu");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return Menu.create(args.data);
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return Menu.create(args.data)
    },
    editMenu: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Menu.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("editMenu");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Menu.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Menu.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteMenu: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await Menu.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("deleteMenu");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            await Menu.findByIdAndRemove(args.id, (err,x)=> {
              if(err){
                return "Error on delete"
              }
              var res_msg = "Successfully delete"
              return res_msg
            })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      // await Menu.findByIdAndRemove(args.id, (err,x)=> {
      //   if(err){
      //     return "Error on delete"
      //   }
      //   var res_msg = "Successfully delete"
      //   return res_msg
      // })
    },

    addMenuCategory: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return MenuCategory.create(args.data)
      }else {
        throw new Error1;
      }
      //return MenuCategory.create(args.data)
    },
    editMenuCategory: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await MenuCategory.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else {
        throw new Error1;
      }
      //return await MenuCategory.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteMenuCategory: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await MenuCategory.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else {
        throw new Error1;
      }
      // await MenuCategory.findByIdAndRemove(args.id, (err,x)=> {
      //   if(err){
      //     return "Error on delete"
      //   }
      //   var res_msg = "Successfully delete"
      //   return res_msg
      // })
    },

    addOrder: async (root, args,context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      var permission = ac.can(lv.position).readAny("addOrder");
      var case1 = specialcase.case1(testuser,info.path.key,"12345")
      if (permission.granted) {
        if(case1){

          var orderMenu =[];
          var aaa = await args.data.order_menu_id.forEach(async function(x){
              var orderMenuId = await OrderMenu.create(x)
              orderMenu.push(orderMenuId._id)
               return orderMenu
          })

          console.log(aaa)
          
          //console.log(args.data)
          //return Order.create(args.data);





        }else {
          throw new Error1()
        }
      }else {
        throw new Error1()
      }
      //return Order.create(args.data)
    },
    editOrder: async (root,args,context,info) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Order.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER" || lv.position=="RES_WORKER"){
        var permission = ac.can(lv.position).readAny("editOrder");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Order.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Order.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteOrder: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await Order.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER" || lv.position=="RES_WORKER"){
        var permission = ac.can(lv.position).readAny("deleteOrder");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            await Order.findByIdAndRemove(args.id, (err,x)=> {
              if(err){
                return "Error on delete"
              }
              var res_msg = "Successfully delete"
              return res_msg
            })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
    },

    addUser: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return User.create(args.data);
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("addUser");
        var case3 = specialcase.case3(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return User.create(args.data);
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return User.create(args.data)
    },
    editUser: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Order.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("editUser");
        var case3 = specialcase.case3(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case3){
            return User.create(args.data);
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else if(lv.position=="CLIENT"){
        var permission = ac.can(lv.position).readAny("editUser");
        var case2 = specialcase.case2(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case2){
            return User.create(args.data);
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Order.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteUser: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await Order.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("deleteUser");
        var case3 = specialcase.case3(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case3){
            await Order.findByIdAndRemove(args.id, (err,x)=> {
              if(err){
                return "Error on delete"
              }
              var res_msg = "Successfully delete"
              return res_msg
            })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else{
        throw new Error1();
      }
    },

    addCupon: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return Cupon.create(args.data)
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("addCupon");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return Cupon.create(args.data)
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1
      }
      //return Cupon.create(args.data)
    },
    editCupon: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Cupon.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("editCupon");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Cupon.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1;
      }
      //return await Cupon.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteCupon: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await Cupon.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("deleteCupon");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            await Cupon.findByIdAndRemove(args.id, (err,x)=> {
              if(err){
                return "Error on delete"
              }
              var res_msg = "Successfully delete"
              return res_msg
            })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
    },

    addReview: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER" || lv.position=="CLIENT"){
          return Review.create(args.data)
        }else {
          throw new Error1();
        }
      // return Review.create(args.data)
    },
    editReview: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Review.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
      }else if(lv.position=="CLIENT"){
        var permission = ac.can(lv.position).readAny("editReview");
        var case2 = specialcase.case2(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case2){
            return await Review.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Review.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteReview: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await Review.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else if(lv.position=="CLIENT"){
        var permission = ac.can(lv.position).readAny("deleteReview");
        var case2 = specialcase.case2(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case2){
            await Review.findByIdAndRemove(args.id, (err,x)=> {
              if(err){
                return "Error on delete"
              }
              var res_msg = "Successfully delete"
              return res_msg
            })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
    },

    addRate: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER" || lv.position=="CLIENT"){
          return Rate.create(args.data)
        }else {
          throw new Error1();
        }
      //return Rate.create(args.data)
    },
    editRate: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Rate.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="CLIENT"){
        var permission = ac.can(lv.position).readAny("editRate");
        var case2 = specialcase.case2(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case2){
            return await Rate.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Rate.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteRate: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        await Rate.findByIdAndRemove(args.id, (err,x)=> {
          if(err){
            return "Error on delete"
          }
          var res_msg = "Successfully delete"
          return res_msg
        })
      }else if(lv.position=="CLIENT"){
        var permission = ac.can(lv.position).readAny("deleteRate");
        var case2 = specialcase.case2(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case2){
            await Rate.findByIdAndRemove(args.id, (err,x)=> {
              if(err){
                return "Error on delete"
              }
              var res_msg = "Successfully delete"
              return res_msg
            })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
    },

    addExpenditure: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Rate.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("addExpenditure");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Rate.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return Expenditure.create(args.data)
    },
    editExpenditure: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await Expediture.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("editExpenditure");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Expediture.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Expediture.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteExpenditure: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
          await Expediture.findByIdAndRemove(args.id, (err,x)=> {
            if(err){
              return "Error on delete"
            }
            var res_msg = "Successfully delete"
            return res_msg
          })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("deleteExpenditure");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
              await Expediture.findByIdAndRemove(args.id, (err,x)=> {
                if(err){
                  return "Error on delete"
                }
                var res_msg = "Successfully delete"
                return res_msg
              })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
    },

    addProduct: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
          return Product.create(args.data)
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("addProduct");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return Product.create(args.data);
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return Product.create(args.data)
    },
    editProduct: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
          return await Product.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("editProduct");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
            return await Product.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
      //return await Product.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteProduct: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
          await Product.findByIdAndRemove(args.id, (err,x)=> {
            if(err){
              return "Error on delete"
            }
            var res_msg = "Successfully delete"
            return res_msg
          })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER"){
        var permission = ac.can(lv.position).readAny("deleteProduct");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
              await Product.findByIdAndRemove(args.id, (err,x)=> {
                if(err){
                  return "Error on delete"
                }
                var res_msg = "Successfully delete"
                return res_msg
              })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
    },

    addProductType: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return ProductType.create(args.data)
      }else {
        throw new Error1;
      }
      // return ProductType.create(args.data)
    },
    editProductType: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
        return await ProductType.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      }else {
        throw new Error1;
      }
      //return await ProductType.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteProductType: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
          await ProductType.findByIdAndRemove(args.id, (err,x)=> {
            if(err){
              return "Error on delete"
            }
            var res_msg = "Successfully delete"
            return res_msg
          })
      }else {
        throw new Error1;
      }
    },

    addReservation: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER" || lv.position=="CLIENT"){
        return Reservation.create(args.data)
      }else {
        throw new Error1;
      }
    },
    editReservation: async (root, args) => {
      return await Reservation.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteReservation: async (root, args) => {
      var lv = specialcase.checkLevel(testuser,"12345")
      if(lv.position=="ADMIN" || lv.position=="DEVELOPER"){
          await Reservation.findByIdAndRemove(args.id, (err,x)=> {
            if(err){
              return "Error on delete"
            }
            var res_msg = "Successfully delete"
            return res_msg
          })
      }else if(lv.position=="RES_OWNER" || lv.position=="RES_MANAGER" || lv.position=="RES_WORKER"){
        var permission = ac.can(lv.position).readAny("deleteReservation");
        var case1 = specialcase.case1(testuser,info.path.key,"12345")
        if (permission.granted) {
          if(case1){
              await Reservation.findByIdAndRemove(args.id, (err,x)=> {
                if(err){
                  return "Error on delete"
                }
                var res_msg = "Successfully delete"
                return res_msg
              })
          }else {
            throw new Error1();
          }
        }else {
          throw new Error1();
        }
      }else {
        throw new Error1();
      }
    },
  },
  Menu: {
    restaurant_id: (menu) => {
      console.log("XXXXXXXXXXXXXXXXXXXXXXxx")
      return Restaurant.findById(menu.restaurant_id);
    },
  },

  Event: {
    user_id: (event1) => {
      console.log("XXXXXXXXXXXXXXXXXXXXXXxx")
      return User.findById(event1.user_id);
    },
   },
  /*Order:{
    menus: (menu) => {
      console.log(menu.menus)
      console.log("XXXXXXXXXXXXXXXXXXXXXXxx")
    }
  }*/
};
