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


export const Mutation =  {
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

          //ສ້າງຕົວປ່ຽນໄວ້ເກັບຄ່າໄອດີຂອງ ordermenu ເພື່ອແອັດເຂົ້າຖານຂໍ້ມູນ
          var orderMenu =[];

          //ແອັດຂໍ້ມູນຂອງ ordermenu ເທື່ອລະຕົວແລ້ວເກັບຕົວປ່ຽນມັນ
          for(var ii=0; ii < args.data.order_menu_id.length; ii++){
            var orderMenuId = await OrderMenu.create(args.data.order_menu_id[ii])
            orderMenu.push(orderMenuId._id)
          }

          //ແປງຄ່າ args ໃຫ້ຖືກຮູບແບບຂອງ model
          args.data.order_menu_id = orderMenu;

          //ເພີມຂໍ້ມູນເຂົ້າຖານຂໍ້ມູນແລ້ວສົ່ງກັບ GraphQL
          return Order.create(args.data)
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
  }
