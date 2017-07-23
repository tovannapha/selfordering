import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolver/index';

const typeDefs = `
#############################################################
###  Restuarant Type
#############################################################

type Restuarant{
  id : ID!
  name : String
  location : Location
  address : Address
  phones : [String]
  sociallinks : [String]
  pictures : [String]
  tags : [String]
  budgets : Budget
  rate : Int
  available_table_no : [String]
  reservable : String
  access : Access
  operation_days : String   ###check!
  cards : String   ###check!
  capacity : [Capacity]
  parking_lot : ParkingLot
  feature : String
  remark : String
}

input RestuarantInput{
  name : String
  location : LocationInput
  address : AddressInput
  phones: [String]
  sociallinks: [String]
  pictures:[String]
  tags : [String]
  budgets : BudgetInput
  rate : Int
  available_table_no : [String]
  reservable : String
  access : AccessInput
  operation_days : String
  capacity : [CapacityInput]
  parking_lot : ParkingLotInput
  feature : String
  remark : String 
}


type Location{
  x: String
  y: String
}
input LocationInput{
  x: String
  y: String
}

type Address{
  province : String
  district : String
  detail : String
}
input AddressInput{
  province : String
  district : String
  detail : String
}

type Budget{
  lowerbound: Int
  upperbound: Int
  currency: String
}
input BudgetInput{
  lowerbound: Int
  upperbound: Int
  currency: String
}

type Access{
  detail : String
} 
input AccessInput{
  detail : String
} 

type Capacity{
  table : Int
  chairs: Int
}
input CapacityInput{
  table : Int
  chairs: Int
}


type ParkingLot{
  status: String
  capacity : Int
}
input ParkingLotInput{
  status: String
  capacity : Int
}


#############################################################
###  RestuarantType Type
#############################################################

type RestuarantType{
  id: ID!
  name :String
  slug : String
  description : String
}


#############################################################
###  Menu Type
#############################################################

type Menu{
  id: ID!
  restuarant_id : ID!
  name :String
  category: [String]
  pictures : [String]
  price: Int
  currency: String
  description : String
  discount : String  ##Check!!
}

#############################################################
###  MenuCategory Type
#############################################################

type MenuCategory{
  id: ID!
  name :String
  slug : String
  description : String
}

#############################################################
###  Order Type
#############################################################

type Order{
  id: ID!
  barcode_id :  String
  people : Int
  checkin_time: String
	checkout_time: String
  table_no: String,
  menus: [Menu]
	restaurant_id: ID!,
	total_price: Int
}

#############################################################
###  User Type
#############################################################

type User{
  id: ID!
  _id: ID!
	name: String
	fullname: String
	password: String
	email: String
	user_uuid: String
	phonenumber: String
	last_login: String
	social_login: [String]
	secret: String
}

#############################################################
###  OwnerOrEmployee Type
#############################################################

type OwnerOrEmployee{
  id: ID!
  _id: ID!
	name: String
	password: String
	email: String
	phonenumber: String
	employee_id: String
	last_login: String
	restaurant_id: ID!
	position: String
	social_login: [String]
	phonenumber: String
}

#############################################################
###  Cupon Type
#############################################################

type Cupon{
  id: ID!
  name: String
	description: String
	type: [String]
	period: Period
}

type Period{
  fromDate :String
  toDate: String
}

#############################################################
###  Review Type
#############################################################

type Review{
  id:ID!
  user_id: ID!
  restaurant_id: ID!
  review_detail: String
}

#############################################################
###  Rate Type
#############################################################
  type Rate{
    id:ID!
    user_id: ID!
    restaurant_id: ID!
    rate_point: Int
    comment: String
  }


#############################################################
#############################################################
#############################################################


# This type specifies the entry points into our API
type Query {
  restuarants: [Restuarant]
  restuarant(id: ID!) : Restuarant
  restuarant_types: [RestuarantType]
  restuarant_type(id: ID!): RestuarantType
  menus :[Menu]
  menu(id: ID!) : Menu
  menu_categories : [MenuCategory]
  menu_category(id: ID!) : MenuCategory
  orders: [Order]
  order(id: ID!): Order
  users: [User]
  user(id: ID!) : User
  ownerOrEmployees:[OwnerOrEmployee]
  ownerOrEmployee(id: ID!) :OwnerOrEmployee
  cupons : [Cupon]
  cupon(id: ID!): Cupon
  reviews: [Review]
  review(id : ID!): Review
  rate(id : ID!): Rate
}

# The mutation root type, used to define all mutations
type Mutation {
  addRestuarant(data: RestuarantInput!) : Restuarant
}


`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
