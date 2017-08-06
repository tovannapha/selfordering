import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
import ac from './acl';
import { Error1, Error2, Error3, Error4 } from './error';
const specialcase = require("./specialcase")
const pubsub = new PubSub();

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
  "level": "RESTAURANT",
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

      var lv = specialcase.checkLevel(testuser, "12345")
      var permission = ac.can(lv.position).readAny("restaurants");

      if(permission.granted){ 
        return Restaurant.find();
      }else{ throw new Error1()}

    },
    restaurant: (root, { id }, context, info) => {
      var lv = specialcase.checkLevel(testuser, "12345")  // context is user obj
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
    events: () => {
      return Event1.find();
    },
    event: (root, { id }) => {
      return Event1.findById(id);
    },
    menus: () => {
      return Menu.find();
    },
    menu: (root, { id }) => {
      return Menu.findById(id);
    },
    menu_categories: () => {
      return MenuCategory.find();
    },
    menu_category: (root, { id }) => {
      return MenuCategory.findById(id);
    },
    orders: () => {
      return Order.find();
    },
    order: (root, { id }) => {
      return Order.findById(id);
    },
    users: () => {
      return User.find();
    },
    user: (root, { id }) => {
      return User.findById(id);
    },
    cupons: () => {
      return Cupon.find();
    },
    cupon: (root, { id }) => {
      return Cupon.findById(id);
    },
    reviews: () => {
      return Review.find();
    },
    review: (root, { id }) => {
      return Review.findById(id);
    },
    rate: (root, { id }) => {
      return Rate.findById(id);
    },
    expenditures: () => {
      return Expenditure.find();
    },
    expenditure: (root, { id }) => {
      return Expenditure.findById(id);
    },
    products: () => {
      return Product.find();
    },
    product: (root, { id }) => {
      return Product.findById(id);
    },
    product_types: () => {
      return ProductType.find();
    },
    product_type: (root, { id }) => {
      return ProductType.findById(id);
    },
    reservations: () => {
      return Reservation.find();
    },
    reservation: (root, { id }) => {
      return Reservation.findById(id);
    },
  },
  Mutation: {
    addRestaurant: async (root, args) => {
      return Restaurant.create(args.data)
    },
    editRestaurant: async (root, args) => {
      return await Restaurant.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteRestaurant: async (root, args) => {
      return await Restaurant.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addRestaurantType: async (root, args) => {
      return RestaurantType.create(args.data)
    },
    editRestaurantType: async (root, args) => {
      return await RestaurantType.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteRestaurantType: async (root, args) => {
      await RestaurantType.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addEvent: async (root, args) => {
      return Event1.create(args.data)
    },
    editEvent: async (root, args) => {
      return await Event1.findByIdAndUpdate(args.id, { $set: args.data }, {new: true});
      
    },
    deleteEvent: async (root, args) => {
      await Event1.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addMenu: async (root, args) => {
      return Menu.create(args.data)
    },
    editMenu: async (root, args) => {
      return await Menu.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteMenu: async (root, args) => {
      await Menu.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addMenuCategory: async (root, args) => {
      return MenuCategory.create(args.data)
    },
    editMenuCategory: async (root, args) => {
      return await MenuCategory.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteMenuCategory: async (root, args) => {
      await MenuCategory.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },
    
    addOrder: async (root, args) => {
      return Order.create(args.data)
    },
    editOrder: async (root, args) => {
      return await Order.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteOrder: async (root, args) => {
      await Order.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addUser: async (root, args) => {
      return User.create(args.data)
    },
    editUser: async (root, args) => {
      return await Order.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteUser: async (root, args) => {
      await Order.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addCupon: async (root, args) => {
      return Cupon.create(args.data)
    },
    editCupon: async (root, args) => {
      return await Cupon.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteCupon: async (root, args) => {
      await Cupon.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addReview: async (root, args) => {
      return Review.create(args.data)
    },
    editReview: async (root, args) => {
      return await Review.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteReview: async (root, args) => {
      await Review.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addRate: async (root, args) => {
      return Rate.create(args.data)
    },
    editRate: async (root, args) => {
      return await Rate.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteRate: async (root, args) => {
      await Rate.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addExpenditure: async (root, args) => {
      return Expenditure.create(args.data)
    },
    editExpenditure: async (root, args) => {
      return await Expediture.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteExpenditure: async (root, args) => {
      await Expediture.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addProduct: async (root, args) => {
      return Product.create(args.data)
    },
    editProduct: async (root, args) => {
      return await Product.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteProduct: async (root, args) => {
      await Product.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addProductType: async (root, args) => {
      return ProductType.create(args.data)
    },
    editProductType: async (root, args) => {
      return await ProductType.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteProductType: async (root, args) => {
      await ProductType.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },

    addReservation: async (root, args) => {
      return Reservation.create(args.data)
    },
    editReservation: async (root, args) => {
      return await Reservation.findByIdAndUpdate(args.id, { $set: args.data }, {new: true})
    },
    deleteReservation: async (root, args) => {
      await Reservation.findByIdAndRemove(args.id, (err,x)=> {
        if(err){
          return "Error on delete"
        }
        var res_msg = "Successfully delete"
        return res_msg
      })
    },
  },
  Menu: {
    restaurant_id: (menu) => {
      console.log("XXXXXXXXXXXXXXXXXXXXXXxx")
      return Restaurant.findById(menu.restaurant_id);
    },
  },
  /*Order:{
    menus: (menu) => {
      console.log(menu.menus)
      console.log("XXXXXXXXXXXXXXXXXXXXXXxx")
    } 
  }*/
};
