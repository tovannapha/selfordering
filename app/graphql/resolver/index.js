import { Query } from './query';
import { Mutation } from './mutation'; 
import { Order } from './query/order'; 
import { OrderMenu } from './query/order-menu'; 
import { Review } from './query/review'; 
import { Restaurant } from './query/restaurant'; 


const resolvers = {
  Query,
  Mutation,
  Order,
  OrderMenu,
  Review,
  Restaurant
};

export default resolvers
