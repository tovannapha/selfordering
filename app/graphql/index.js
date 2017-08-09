import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import  resolvers  from './resolver/index';
import  typeDefs  from './schema/index'


const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
