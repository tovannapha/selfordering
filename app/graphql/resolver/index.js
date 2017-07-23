import { PubSub } from 'graphql-subscriptions';
import { withFilter } from 'graphql-subscriptions';
const pubsub = new PubSub();



var Restaurant = require('../../models/models').Restaurant

export const resolvers = {
  Query: {
    restuarants: () => {
      return Restaurant.find();
    },
    restuarant: (root, { id }) => {
      return Restaurant.findById(id);
    },
  },
  Mutation: {
    addRestuarant:async (root, args) => {
      return Restaurant.create(args.data)
    },
  }
};
