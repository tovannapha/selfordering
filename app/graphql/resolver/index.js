import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
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

export const resolvers = {
  Query: {
    restaurants: (a, b, c) => {
      console.log("a: ", a)
      console.log("b: ", b)
      console.log("c: ", c)
      //console.log("d: ", d)

      return Restaurant.find();
    },
    restaurant: (root, { id }) => {
      return Restaurant.findById(id);
    },
    restaurant_types: () => {
      return RestaurantType.find();
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
      await Restaurant.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Restaurant.findById(args.id)
    },
    deleteRestaurant: async (root, args) => {
      await Restaurant.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Restaurant.findById(args.id)
    },

    addRestaurantType: async (root, args) => {
      return RestaurantType.create(args.data)
    },
    editRestaurantType: async (root, args) => {
      await RestaurantType.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await RestaurantType.findById(args.id)
    },
    deleteRestaurantType: async (root, args) => {
      await RestaurantType.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await RestaurantType.findById(args.id)
    },

    addEvent: async (root, args) => {
      return Event1.create(args.data)
    },
    editEvent: async (root, args) => {
      await Event1.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Event1.findById(args.id)
    },
    deleteEvent: async (root, args) => {
      await Event1.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Event1.findById(args.id)
    },

    addMenu: async (root, args) => {
      return Menu.create(args.data)
    },
    editMenu: async (root, args) => {
      await Menu.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Menu.findById(args.id)
    },
    deleteMenu: async (root, args) => {
      await Menu.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Menu.findById(args.id)
    },

    addMenuCategory: async (root, args) => {
      return MenuCategory.create(args.data)
    },
    editMenuCategory: async (root, args) => {
      await MenuCategory.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await MenuCategory.findById(args.id)
    },
    deleteMenuCategory: async (root, args) => {
      await MenuCategory.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await MenuCategory.findById(args.id)
    },
    
    addOrder: async (root, args) => {
      return Order.create(args.data)
    },
    editOrder: async (root, args) => {
      await Order.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Order.findById(args.id)
    },
    deleteOrder: async (root, args) => {
      await Order.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Order.findById(args.id)
    },

    addUser: async (root, args) => {
      return User.create(args.data)
    },
    editUser: async (root, args) => {
      await Order.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Order.findById(args.id)
    },
    deleteUser: async (root, args) => {
      await Order.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Order.findById(args.id)
    },

    addCupon: async (root, args) => {
      return Cupon.create(args.data)
    },
    editCupon: async (root, args) => {
      await Cupon.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Cupon.findById(args.id)
    },
    deleteCupon: async (root, args) => {
      await Cupon.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Cupon.findById(args.id)
    },

    addReview: async (root, args) => {
      return Review.create(args.data)
    },
    editReview: async (root, args) => {
      await Review.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Review.findById(args.id)
    },
    deleteReview: async (root, args) => {
      await Review.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Review.findById(args.id)
    },

    addRate: async (root, args) => {
      return Rate.create(args.data)
    },
    editRate: async (root, args) => {
      await Rate.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Rate.findById(args.id)
    },
    deleteRate: async (root, args) => {
      await Rate.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Rate.findById(args.id)
    },

    addExpenditure: async (root, args) => {
      return Expediture.create(args.data)
    },
    editExpenditure: async (root, args) => {
      await Expediture.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Expediture.findById(args.id)
    },
    deleteExpenditure: async (root, args) => {
      await Expediture.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Expediture.findById(args.id)
    },

    addProduct: async (root, args) => {
      return Product.create(args.data)
    },
    editProduct: async (root, args) => {
      await Product.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Product.findById(args.id)
    },
    deleteProduct: async (root, args) => {
      await Product.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Product.findById(args.id)
    },

    addProductType: async (root, args) => {
      return ProductType.create(args.data)
    },
    editProductType: async (root, args) => {
      await ProductType.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await ProductType.findById(args.id)
    },
    deleteProductType: async (root, args) => {
      await ProductType.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await ProductType.findById(args.id)
    },

    addReservation: async (root, args) => {
      return Reservation.create(args.data)
    },
    editReservation: async (root, args) => {
      await Reservation.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Reservation.findById(args.id)
    },
    deleteReservation: async (root, args) => {
      await Reservation.findByIdAndUpdate(args.id, { $set: args.data },(err,x)=> {});
      return await Reservation.findById(args.id)
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
