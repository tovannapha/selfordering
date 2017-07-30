const Query = `
# This type specifies the entry points into our API
type Query {
  restaurants: [Restaurant]
  restaurant(id: ID!) : Restaurant
  restaurant_types: [RestaurantType]
  restaurant_type(id: ID!): RestaurantType
  menus :[Menu]
  menu(id: ID!) : Menu
  menu_categories : [MenuCategory]
  menu_category(id: ID!) : MenuCategory
  orders: [Order]
  order(id: ID!): Order
  users: [User]
  user(id: ID!) : User
  cupons : [Cupon]
  cupon(id: ID!): Cupon
  reviews: [Review]
  review(id : ID!): Review
  rate(id : ID!): Rate
}
`

export default Query;

