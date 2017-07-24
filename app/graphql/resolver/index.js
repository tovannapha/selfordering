import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
const pubsub = new PubSub();



var Restaurant = require('../../models/models').Restaurant
var RestaurantType = require('../../models/models').RestaurantType
var Menu = require('../../models/models').Menu
var MenuCategory = require('../../models/models').Menu_category
var Order = require('../../models/models').Order

export const resolvers = {
  Query: {
    restaurants: () => {
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
  },
  Mutation: {
    addRestaurant: async (root, args) => {
      return Restaurant.create(args.data)
    },
    addRestaurantType: async (root, args) => {
      return RestaurantType.create(args.data)
    },
    addMenu: async (root, args) => {
      return Menu.create(args.data)
    },
    addMenuCategory: async (root, args) => {
      return MenuCategory.create(args.data)
    },
    addOrder: async (root, args) => {
      return Order.create(args.data)
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
